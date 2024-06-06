

URLBase = urlBaseApi();

let dados_user = {};
validadeDadosWaterUser();

function urlBaseApi(){
    if(window.location.href.includes("vercel"))
        return "https://nutrischedule.vercel.app/api/";
    else
        return "http://localhost:3000/";
}

// GET - PROCEDIMENTO PARA OBTER UM USUARIO
function obterUsuarioLogadoId() {
  let usuarioLogado = obterDadosUsuarioLogadoSessao();
  if (usuarioLogado != null) {
    return usuarioLogado.id;
  }
}

async function getDadosUser() {
  let id_usuario = obterUsuarioLogadoId();
  let params = `id=${id_usuario}`;
  let newURLBase = URLBase + "usuarios";
  let urlUser = `${newURLBase}?${params}`;
  console.log('urlUser -> ', urlUser);

  var response = await fetch(urlUser);
  if (response.ok) {
    let jsonData = await response.json();
    // console.log('getDadosUser -> ', jsonData);
    return jsonData;
  } else {
    throw new Error('Erro retorno db');
  }
}

async function validadeDadosWaterUser(){
  let user = await getDadosUser();
  let peso = user[0].peso;
  dados_user['peso'] = peso;
  dados_user['metadeagua'] = (peso * 35);

  await calculaStatusMetaAgua();
}


async function calculaStatusMetaAgua() {
  let metadeagua = dados_user.metadeagua;
  let aguaIngerida = await obterRegistroDeAgua();
  console.log('calculaStatusMetaAgua', aguaIngerida);

  let titleMeta = document.getElementById("meta-agua-title");
  
  if(aguaIngerida.length > 0){
    const qtdIngerida = 250 * parseInt(aguaIngerida[0].foodAmount);
    if (qtdIngerida < metadeagua){
      titleMeta.innerText = "Restante para Atigir Meta:"
      const restanteMeta = metadeagua - qtdIngerida;
      document.getElementById('metagua').innerHTML = `${restanteMeta} ml`;
    } else {
      titleMeta.innerText = "Objetivo concluído - Total Ingerido:"
      document.getElementById('metagua').innerHTML = `${qtdIngerida} ml`;
    }
  }
  else{
    titleMeta.innerText = "Objetivo diário:"
    document.getElementById('metagua').innerHTML = `${metadeagua} ml`;
  }
}


// Drink Water
async function drinkWater() {
  await adicionarInsercaoAguaNoBanco();
  await calculaStatusMetaAgua();
}


async function checkWaterRegisters(paramsFilter, urlWaterData) {
  console.log('checkWaterRegisters -> ', urlWaterData);
  var response = await fetch(urlWaterData);
    if (response.ok) {
      let jsonData = await response.json();

      // SINCE THE PARAMS ARE NOT WORKING ON THE REQUEST
      jsonData = filterResponseDatabase(jsonData, paramsFilter);
      console.log('checkWaterRegisters data result -> ', jsonData);
      return jsonData;
    }
}

async function adicionarInsercaoAguaNoBanco(){
  let idUsuario = obterUsuarioLogadoId();
  let idRefeicao = 5;

  let params = `idUsuario=${idUsuario}&idRefeicao=${idRefeicao}&dataRegistro=${currentDate}`;
  let urlWaterData = `${URLBase + "registro_alimentar"}?${params}`;

  let paramsFilter = [idUsuario, idRefeicao, currentDate];
  let waterData = await checkWaterRegisters(paramsFilter, urlWaterData);
  console.log('waterData -> ', waterData);
  if (waterData.length > 0) {
    console.log('THERE ARE WATER DATA -> YOU SHOULD UPDATE');
    await updateWater(waterData[0].id, waterData[0].foodAmount);
  } else {
    console.log('SHOULD POST A NEW REGISTERS');
    await postWater(idUsuario, idRefeicao);
  }

}

async function postWater(idUsuario, idRefeicao){
  let new_data_food = {
    id: generateUUID(),
    idUsuario : idUsuario,
    dataRegistro: currentDate,
    idRefeicao : idRefeicao,
    foodName : "Água",
    foodId: "food_agua",
    foodAmount: "1",
    foodMeasure: "Milliliter",
    foodWeight: "15",
    kcalValue: "0",
    measures: {
      "Milliliter": "250"
    }
  };

  let urlAddWater = URLBase + "registro_alimentar";

  let response = await fetch(urlAddWater, {
    method: 'POST',
    headers : {
        "Content-Type":"application/json"
    },
    body : JSON.stringify(new_data_food)
  });
  
  if (response.ok){
    await calculaStatusMetaAgua();
  }
}


async function updateWater(id, foodAmount) {
  let newFoodAmount = (parseInt(foodAmount)+ 1).toString()

  let updateFields = {
    id: id,
    foodAmount: newFoodAmount,
  }

  let urlPatchFood = URLBase + "registro_alimentar" + `/${id}`;
  let response = await fetch(urlPatchFood, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(updateFields)
  });

  if (response.ok){
      await calculaStatusMetaAgua();
  }
}

async function obterRegistroDeAgua(){
  console.log('obterRegistroDeAgua CURRENT DATE -> ', currentDate);
  let id_usuario = obterUsuarioLogadoId();
  let idRefeicao = 5;

  let params = `idUsuario=${id_usuario}&idRefeicao=${idRefeicao}&dataRegistro=${currentDate}`;
  let urlConsumoAgua = `${URLBase + "registro_alimentar"}?${params}`;
  // let urlConsumoAgua = `${urlBaseApi() + "registro_alimentar"}?dataRegistro=31-05-2024`;
  console.log('obterRegistroDeAgua -> ', urlConsumoAgua);
  var response = await fetch(urlConsumoAgua);
  if (response.ok) {
      let jsonData = await response.json();

      // SINCE THE PARAMS ARE NOT WORKING ON THE REQUEST
      let paramsFilter = [id_usuario, idRefeicao, currentDate];
      jsonData = filterResponseDatabase(jsonData, paramsFilter);
      console.log('obterRegistroDeAgua', jsonData);
      return jsonData;
  }
}


function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}



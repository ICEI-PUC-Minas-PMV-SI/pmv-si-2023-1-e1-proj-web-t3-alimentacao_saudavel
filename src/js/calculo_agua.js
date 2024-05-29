
URLBase = urlBaseApi() + "usuarios";
calculaMetaAgua();

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
      console.log('usuarioLogado', usuarioLogado.id);
    return usuarioLogado.id;
  }
}

// <<<<<<< Calculo-IMC

// =======
// >>>>>>> main
async function getDadosUser() {
  let id_usuario = obterUsuarioLogadoId();
  let params = `id=${id_usuario}`;
  var response = await fetch(`${URLBase}?${params}`);
  if (response.ok) {
    let jsonData = await response.json();
    console.log('jsonData',jsonData);
    return jsonData;
  } else {
    throw new Error('Erro retorno db');
  }
}

async function calculaMetaAgua() {
  let dados_user = await getDadosUser();
  let peso = dados_user[0].peso;
  let aguaIngerida = await obterRegistroDeAgua()
  
  if(aguaIngerida.length > 0){
    const metadeagua = (peso * 35) - (250 * aguaIngerida[0].descricao)
    document.getElementById('metagua').innerHTML = `${metadeagua} ml`;
  }
  else{
    const metadeagua = (peso * 35)
    document.getElementById('metagua').innerHTML = `${metadeagua} ml`;
  }
// <<<<<<< Calculo-IMC
//   //show in the page
// =======
// >>>>>>> main
  
}
// Drink Water
async function drinkWater() {
  const metaAguaElement = document.getElementById('metagua');
  let metaAgua = parseInt(metaAguaElement.innerText.split(' ')[0]); // Extrai o valor numérico da meta
  const passo = 250;

  if (metaAgua >= passo) {
    metaAgua -= passo;
    metaAguaElement.innerText = `${metaAgua} ml`;

    if (metaAgua === 0) {
      document.getElementById('drinkWaterButton').setAttribute('disabled', 'true');
      document.getElementById('drinkWaterButton').innerText = 'Objetivo alcançado';
    }
  } else {
    alert('Você já atingiu sua meta diária de ingestão de água!');
  }
  await adicionarInsercaoAguaNoBanco()
}

async function adicionarInsercaoAguaNoBanco(){   

    let new_data_food = {
        idUsuario : obterUsuarioLogadoId(),
        dataRegistro: currentDate,
        idRefeicao : 5,
        descricao : 1,
        id: generateUUID()
    };
    let httpMethod = 'POST'
    let urlRegistro = urlBaseApi() + "registro_alimentar"

  let params = `idUsuario=${new_data_food.idUsuario}&idRefeicao=${new_data_food.idRefeicao}&dataRegistro=${currentDate}`

    var response = await fetch(`${urlBaseApi() + "registro_alimentar"}?${params}`);
    if (response.ok) {
        let jsonData = await response.json();
        if(jsonData.length > 0){
          new_data_food.descricao = jsonData[0].descricao + 1
          new_data_food.id = jsonData[0].id
          httpMethod = 'PUT'
          urlRegistro = urlBaseApi() + "registro_alimentar/" + new_data_food.id
        }
        await fetch(urlRegistro, {
            method:httpMethod,
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(new_data_food)
        })
    }
    else {
        throw new Error('Erro retorno db');
    }
}

async function obterRegistroDeAgua(){
  let params = `idUsuario=${obterUsuarioLogadoId()}&idRefeicao=${5}&dataRegistro=${currentDate}`

  var response = await fetch(`${urlBaseApi() + "registro_alimentar"}?${params}`);
  if (response.ok) {
      let jsonData = await response.json();
      return jsonData
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



// document.getElementById("show-imc").addEventListener('click', function(event){
// 	event.preventDefault();

// 	var myImc = document.getElementById('imc-resultado');
// 	if (myImc.style.display == "none"){
// 		myImc.style.display = "block";
// 	} else {
// 		myImc.style.display = "none";
// 	}

//     const peso = document.getElementById('peso').value;
//     const altura = document.getElementById('altura').value;

//     const imc =  (peso / (altura * altura)).toFixed(2);


// 	if (imc < 18.5){
// 		descripition =`IMC : ${imc} - Você está abaixo do seu peso ideal.`;
// 	} else if (imc >= 18.5 && imc <= 25){
// 		descripition =`IMC : ${imc} - Você está em seu peso ideal.`;
// 	} else if(imc > 25  && imc <= 30){
// 		descripition = `IMC : ${imc} - Cuidado! Você está com sobrepeso.`;
// 	} else if(imc > 30  && imc <= 35){
// 		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade moderada.`;
// 	} else if(imc > 35  && imc <= 40){
// 		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade severa.`;
// 	} else {
// 		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade morbida.`;
// 	}

//   value.textContent = imcreplace('.',',');
// 	document.getElementById('description').textContent = descripition;
// });


//=====================================================
URL = urlBaseApi() + "usuarios";
verificaUserLogado();

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
  } else {
    console.log(' NÃO LOGADO usuarioLogado', usuarioLogado);
    return null
  }
}

async function getDadosUser() {
  let id_usuario = obterUsuarioLogadoId();
  let params = `idUsuario=${id_usuario}`;
  var response = await fetch(`${URL}?${params}`);
  if (response.ok) {
    let jsonData = await response.json();
    console.log('jsonData',jsonData);
    console.log('jsonData.Value',jsonData.value);
    return jsonData;
  } else {
    throw new Error('Erro retorno db');
  }
}

async function verificaUserLogado() {
  let dados_user = await obterUsuarioLogadoId();
  console.log('verificaUserLogado', dados_user);
  if (dados_user === null) {
    console.log('NÃO FAZ CALCULO AUTOMATICO');

    document.getElementById("show-imc").addEventListener('click', function(event){
      event.preventDefault();
      let peso = document.getElementById('peso').value;
      let altura = document.getElementById('altura').value;
      if (peso){
        if (altura){
          calculoIMC(peso, altura);
        }
      }
    });


  } else {
    console.log('FAZ !! CALCULO AUTOMATICO');

    let dados_user = await getDadosUser();
    console.log(dados_user);
    console.log('--------------------');
    // console.log(typeof(dados_user));
    // console.log(dados_user.keys);


    let peso = dados_user[0].peso;
    let altura = dados_user[0].altura;

    calculoIMC(peso, altura);
  }

}

function calculoIMC(peso, altura) {
  console.log('peso', peso);
  console.log('altura', altura);

  // EXIBE RESULTADO - ALTERA STATUS DIV
  var myImc = document.getElementById('imc-resultado');
  if (myImc.style.display == "none") {
    myImc.style.display = "block";
  } else {
    myImc.style.display = "none";
  }

  // MANTÉM DADOS ALTURA E PESO NA TELA
  document.getElementById('peso').value = peso;
  document.getElementById('altura').value = altura;

  const imc = (peso / (altura * altura)).toFixed(2);

  if (imc < 18.5) {
    descripition = `IMC : ${imc} - Você está abaixo do seu peso ideal.`;
  } else if (imc >= 18.5 && imc <= 25) {
    descripition = `IMC : ${imc} - Você está em seu peso ideal.`;
  } else if (imc > 25 && imc <= 30) {
    descripition = `IMC : ${imc} - Cuidado! Você está com sobrepeso.`;
  } else if (imc > 30 && imc <= 35) {
    descripition = `IMC : ${imc} - Cuidado! Você está com obesidade moderada.`;
  } else if (imc > 35 && imc <= 40) {
    descripition = `IMC : ${imc} - Cuidado! Você está com obesidade severa.`;
  } else {
    descripition = `IMC : ${imc} - Cuidado! Você está com obesidade morbida.`;
  }

  document.getElementById('resultado').textContent = descripition;
}
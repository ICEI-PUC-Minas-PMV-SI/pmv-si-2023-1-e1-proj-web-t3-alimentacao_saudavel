document.getElementById("show-imc").addEventListener('click', function(event){
	event.preventDefault();

	var myImc = document.getElementById('imc-resultado');
	if (myImc.style.display == "none"){
		myImc.style.display = "block";
	} else {
		myImc.style.display = "none";
	}

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc =  (peso / (altura * altura)).toFixed(2);


	if (imc < 18.5){
		descripition =`IMC : ${imc} - Você está abaixo do seu peso ideal.`;
	} else if (imc >= 18.5 && imc <= 25){
		descripition =`IMC : ${imc} - Você está em seu peso ideal.`;
	} else if(imc > 25  && imc <= 30){
		descripition = `IMC : ${imc} - Cuidado! Você está com sobrepeso.`;
	} else if(imc > 30  && imc <= 35){
		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade moderada.`;
	} else if(imc > 35  && imc <= 40){
		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade severa.`;
	} else {
		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade morbida.`;
	}

    value.textContent = imcreplace('.',',');
	document.getElementById('description').textContent = descripition;
});

function urlBaseApi(){
    if(window.location.href.includes("vercel"))
        return "https://nutrischedule.vercel.app/api/";
    else
        return "http://localhost:3000/";
}

//=====================================================

URL = urlBaseApi() + "usuarios";
calculaIMCcadastrado();

//PARA USUÁRIO CADASTRADO

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

async function getDadosUser() {
  let id_usuario = obterUsuarioLogadoId();
  let params = `idUsuario=${id_usuario}`;
  var response = await fetch(`${URL}?${params}`);
  if (response.ok) {
    let jsonData = await response.json();
    console.log('jsonData',jsonData);
    return jsonData;
  } else {
    throw new Error('Erro retorno db');
  }
}

async function calculaIMCcadastrado() {
  let dados_user = await getDadosUser();
  let peso = dados_user[0].peso;
  let altura = dados_user[0].altura;
  console.log(peso);
  console.log(altura);

  const imc =  (peso / (altura * altura)).toFixed(2);

if (imc < 18.5){
	descripition =`IMC : ${imc} - Você está abaixo do seu peso ideal.`;
} else if (imc >= 18.5 && imc <= 25){
	descripition =`IMC : ${imc} - Você está em seu peso ideal.`;
} else if(imc > 25  && imc <= 30){
	descripition = `IMC : ${imc} - Cuidado! Você está com sobrepeso.`;
} else if(imc > 30  && imc <= 35){
	descripition = `IMC : ${imc} - Cuidado! Você está com obesidade moderada.`;
} else if(imc > 35  && imc <= 40){
	descripition = `IMC : ${imc} - Cuidado! Você está com obesidade severa.`;
} else {
	descripition = `IMC : ${imc} - Cuidado! Você está com obesidade morbida.`;
}

value.textContent = imcreplace('.',',');
document.getElementById('description').textContent = descripition;
}


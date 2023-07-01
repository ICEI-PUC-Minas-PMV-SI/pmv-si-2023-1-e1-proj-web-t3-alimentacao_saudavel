URL = urlBaseApi() + "usuarios";
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

async function calculaMetaAgua() {
  let dados_user = await getDadosUser();
  let peso = dados_user[0].peso;
  console.log(peso);

  const metadeagua = (peso * 35);
  document.getElementById('metagua').innerText = `${metadeagua} ml`;
}





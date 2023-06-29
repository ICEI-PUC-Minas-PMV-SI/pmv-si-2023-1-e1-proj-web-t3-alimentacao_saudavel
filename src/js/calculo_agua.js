// const btn = document.querySelector("#meta");
// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     const peso = document.querySelector("#peso");
// });
URL = urlBase + "registro_alimentar"

obterUsuarioLogadoId();

// Função para obter o ID do usuário logado
function obterUsuarioLogadoId() {
    let usuarioLogado = obterDadosUsuarioLogadoSessao();
    if (usuarioLogado != null) {
        console.log(usuarioLogado);
      return usuarioLogado.id;
    }
  }


let peso = 90;
const metadeagua = (peso * 35);

document.getElementById('metagua').innerText = `${metadeagua} ml`;





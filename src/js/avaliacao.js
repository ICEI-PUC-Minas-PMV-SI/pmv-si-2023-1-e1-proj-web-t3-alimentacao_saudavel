// Função para gerar um ID único para o usuário
function generateUniqueId() {
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

// Função para obter o ID do usuário logado ou gerar um ID único
function obterUsuarioLogadoId() {
  let usuarioLogado = obterDadosUsuarioLogadoSessao();

  if (usuarioLogado != null) {
    return usuarioLogado.id;
  }

  return null;
}

// Função para adicionar uma avaliação ao histórico da receita
async function adicionarAvaliacao(avaliacao, comentario) {
  const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita

  const usuarioId = obterUsuarioLogadoId(); // Obter o ID do usuário logado ou gerar um ID único
  const novaAvaliacao = {
    id: generateUniqueId(),
    idUsuario: usuarioId,
    idReceita: parseInt(receitaId),
    nota: parseInt(avaliacao),
    avaliacaoReceita: comentario
  };

  try {
    await salvarAvaliacaoNoServidor(novaAvaliacao); // Salvar a avaliação no servidor

    // Atualizar apenas a lista de avaliações e a média
    await Promise.all([
      exibirAvaliacoes(receitaId),
      calcularMediaAvaliacoes(receitaId)
    ]);

    // Limpar os campos de avaliação e comentário
    document.querySelector("input[name='avaliacao']:checked").checked = false;
    document.getElementById("comentarios").value = "";
  } catch (error) {
    console.error(error);
  }
}

// Função para exibir as avaliações no histórico da receita
function exibirAvaliacoes(receitaId) {
  const listaAvaliacoes = document.getElementById("listaAvaliacoes");
  listaAvaliacoes.innerHTML = ""; // Limpar a lista antes de exibir as avaliações

  obterAvaliacaoPorReceita(receitaId)
    .then((avaliacoes) => {
      if (avaliacoes.length > 0) {
        for (const avaliacao of avaliacoes) {
          const itemAvaliacao = document.createElement("li");
          itemAvaliacao.textContent = `Avaliação: ${avaliacao.nota} estrela(s) - Comentário: ${avaliacao.avaliacaoReceita}`;

          listaAvaliacoes.appendChild(itemAvaliacao);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Função para calcular a média das avaliações
function calcularMediaAvaliacoes(receitaId) {
  obterAvaliacaoPorReceita(receitaId)
    .then((avaliacoes) => {
      if (avaliacoes.length > 0) {
        const totalAvaliacoes = avaliacoes.length;
        let somaAvaliacoes = 0;
        for (const avaliacao of avaliacoes) {
          somaAvaliacoes += avaliacao.nota;
        }
        const mediaAvaliacoes = somaAvaliacoes / totalAvaliacoes;

        const elementoMedia = document.getElementById("mediaAvaliacoes");
        elementoMedia.textContent = `Média das avaliações: ${mediaAvaliacoes.toFixed(2)} estrela(s)`;

        const ratingElement = document.getElementById("ratingStars");
        ratingElement.innerHTML = ""; // Limpar o conteúdo existente

        // Gerar as estrelas preenchidas com base na média
        for (let i = 1; i <= 5; i++) {
          const starElement = document.createElement("i");
          if (i <= mediaAvaliacoes) {
            starElement.className = "bi bi-star-fill";
          } else {
            starElement.className = "bi bi-star";
          }
          ratingElement.appendChild(starElement);
        }
      } else {
        const elementoMedia = document.getElementById("mediaAvaliacoes");
        elementoMedia.textContent = "Ainda não há avaliações";

        const ratingElement = document.getElementById("ratingStars");
        ratingElement.innerHTML = ""; // Limpar o conteúdo existente
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Evento de clique no botão de enviar avaliação
document.querySelector(".submit-button").addEventListener("click", function(event) {
  event.preventDefault();

  const avaliacao = document.querySelector("input[name='avaliacao']:checked").value;
  const comentario = document.getElementById("comentarios").value;

  adicionarAvaliacao(avaliacao, comentario)
    .then(() => {
      document.querySelector("input[name='avaliacao']:checked").checked = false;
      document.getElementById("comentarios").value = "";
    })
    .catch((error) => {
      console.error(error);
    });
});

// Exibir avaliações iniciais da receita (se houver)
const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita
exibirAvaliacoes(receitaId);

// Calcular a média e exibir para o usuário
calcularMediaAvaliacoes(receitaId);

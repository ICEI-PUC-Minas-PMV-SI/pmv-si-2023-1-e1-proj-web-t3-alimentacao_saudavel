// Função para obter todas as avaliações do servidor
function obterTodasAvaliacoes() {
  return fetch('http://localhost:3000/historicoAvaliacoes')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro ao obter as avaliações");
      }
    });
}

// Função para adicionar uma avaliação ao histórico da receita
function adicionarAvaliacao(avaliacao, comentario) {
  const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita

  const usuarioId = obterUsuarioLogadoId(); // Obter o ID do usuário logado ou gerar um ID único
  const novaAvaliacao = {
    idUsuario: usuarioId,
    idReceita: receitaId,
    nota: parseInt(avaliacao),
    avaliacaoReceita: comentario
  };

  salvarAvaliacao(novaAvaliacao)
    .then(() => {
      exibirAvaliacoes(receitaId);
      calcularMediaAvaliacoes(receitaId); // Calcular a média e exibir para o usuário
    })
    .catch(error => {
      console.error("Erro ao adicionar avaliação:", error);
    });
}

// Função para exibir as avaliações no histórico da receita
function exibirAvaliacoes(receitaId) {
  const listaAvaliacoes = document.getElementById("listaAvaliacoes");
  listaAvaliacoes.innerHTML = ""; // Limpar a lista antes de exibir as avaliações

  obterAvaliacoesPorReceita(receitaId)
    .then(avaliacoes => {
      for (const avaliacao of avaliacoes) {
        const itemAvaliacao = document.createElement("li");
        const usuario = avaliacao.idUsuario === parseInt(obterUsuarioLogadoId()) ? "Você" : `Usuário ${avaliacao.idUsuario}`;
        itemAvaliacao.textContent = `${usuario} - Avaliação: ${avaliacao.nota} estrela(s) - Comentário: ${avaliacao.avaliacaoReceita}`;

        listaAvaliacoes.appendChild(itemAvaliacao);
      }
    })
    .catch(error => {
      console.error("Erro ao exibir as avaliações:", error);
    });
}

// Função para calcular a média das avaliações
function calcularMediaAvaliacoes(receitaId) {
  obterAvaliacoesPorReceita(receitaId)
    .then(avaliacoes => {
      if (avaliacoes && avaliacoes.length > 0) {
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
    .catch(error => {
      console.error("Erro ao calcular a média das avaliações:", error);
    });
}

// Evento de submissão do formulário de avaliação
document.getElementById("avaliacaoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const avaliacao = document.querySelector("input[name='avaliacao']:checked").value;
  const comentario = document.getElementById("comentarios").value;

  adicionarAvaliacao(avaliacao, comentario);

  document.querySelector("input[name='avaliacao']:checked").checked = false;
  document.getElementById("comentarios").value = "";

  const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita
  exibirAvaliacoes(receitaId); // Chamar a função de exibição após adicionar uma avaliação
});

// Carregar as avaliações iniciais da receita
const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita
exibirAvaliacoes(receitaId);

// Calcular a média e exibir para o usuário
calcularMediaAvaliacoes(receitaId);

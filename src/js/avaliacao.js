// Função para gerar um ID único para o usuário
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Função para obter o ID do usuário logado ou gerar um ID único
function obterUsuarioLogadoId() {
  let usuarioLogado = obterDadosUsuarioLogadoSessao();

  if (usuarioLogado != null) {
    return usuarioLogado.id
  }

  return generateUniqueId();
}

// Função para adicionar uma avaliação ao histórico da receita
function adicionarAvaliacao(avaliacao, comentario) {
  const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita

  // Verificar se o histórico da receita já existe
  if (!historicoAvaliacoes[receitaId]) {
    historicoAvaliacoes[receitaId] = [];
  }

  const usuarioId = obterUsuarioLogadoId(); // Obter o ID do usuário logado ou gerar um ID único
  const novaAvaliacao = {
    usuarioId: usuarioId,
    avaliacao: parseInt(avaliacao),
    comentario: comentario
  };

  salvarHistoricoAvaliacoes(novaAvaliacao,receitaId); // Salvar o histórico no localStorage
  exibirAvaliacoes(receitaId);
  calcularMediaAvaliacoes(receitaId); // Calcular a média e exibir para o usuário
}

// Função para exibir as avaliações no histórico da receita
function exibirAvaliacoes(receitaId) {
  const listaAvaliacoes = document.getElementById("listaAvaliacoes");
  listaAvaliacoes.innerHTML = ""; // Limpar a lista antes de exibir as avaliações
var avaliacoes =obterTodasAvaliacoes()

  if (avaliacoes[receitaId]) {
    for (const avaliacao of avaliacoes[receitaId]) {
      const itemAvaliacao = document.createElement("li");
      const usuario = avaliacao.usuarioId === obterUsuarioLogadoId() ? "Você" : `Usuário ${avaliacao.usuarioId}`;
      itemAvaliacao.textContent = `${usuario} - Avaliação: ${avaliacao.avaliacao} estrela(s) - Comentário: ${avaliacao.comentario}`;

      listaAvaliacoes.appendChild(itemAvaliacao);
    }
  }
}

// Função para calcular a média das avaliações
function calcularMediaAvaliacoes(receitaId) {
  const avaliacoes = obterAvaliacaoPorReceita(receitaId);
  if (avaliacoes && avaliacoes.length > 0) {
    const totalAvaliacoes = avaliacoes.length;
    let somaAvaliacoes = 0;
    for (const avaliacao of avaliacoes) {
      somaAvaliacoes += avaliacao.avaliacao;
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

// Carregar o histórico de avaliações do localStorage
carregarHistoricoAvaliacoes();

// Exibir avaliações iniciais da receita (se houver)
const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita
exibirAvaliacoes(receitaId);

// Calcular a média e exibir para o usuário
calcularMediaAvaliacoes(receitaId);

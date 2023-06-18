// Função para gerar um ID único para o usuário
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Função para obter o ID do usuário logado ou gerar um ID único
function obterUsuarioLogadoId() {
  let usuarioLogado = obterDadosUsuarioLogadoSessao();

  if (usuarioLogado != null) {
    return usuarioLogado.idUsuario;
  }

  return generateUniqueId();
}

// Função para adicionar uma avaliação ao histórico da receita
async function adicionarAvaliacao(avaliacao, comentario) {
  const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita

  const usuarioId = obterUsuarioLogadoId(); // Obter o ID do usuário logado ou gerar um ID único
  const novaAvaliacao = {
    idUsuario: usuarioId,
    idReceita: parseInt(receitaId),
    nota: parseInt(avaliacao),
    avaliacaoReceita: comentario
  };

  await salvarAvaliacaoNoServidor(novaAvaliacao); // Salvar a avaliação no servidor
  exibirAvaliacoes(receitaId);
  calcularMediaAvaliacoes(receitaId); // Calcular a média e exibir para o usuário
}

// Função para obter todas as avaliações do servidor
async function obterTodasAvaliacoes() {
  const response = await fetch('http://localhost:3000/avaliacoes');
  const avaliacoes = await response.json();
  return avaliacoes;
}

// Função para obter as avaliações de uma receita específica do servidor
async function obterAvaliacaoPorReceita(receitaId) {
  const response = await fetch(`http://localhost:3000/avaliacoes?idReceita=${receitaId}`);
  const avaliacoes = await response.json();
  return avaliacoes;
}

// Função para salvar a avaliação no servidor
async function salvarAvaliacaoNoServidor(avaliacao) {
  await fetch('http://localhost:3000/avaliacoes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(avaliacao)
  });
}

// Função para exibir as avaliações no histórico da receita
async function exibirAvaliacoes(receitaId) {
  const listaAvaliacoes = document.getElementById("listaAvaliacoes");
  listaAvaliacoes.innerHTML = ""; // Limpar a lista antes de exibir as avaliações

  const avaliacoes = await obterAvaliacaoPorReceita(receitaId);

  if (avaliacoes.length > 0) {
    for (const avaliacao of avaliacoes) {
      const itemAvaliacao = document.createElement("li");
      const usuario = avaliacao.idUsuario === obterUsuarioLogadoId() ? "Você" : `Usuário ${avaliacao.idUsuario}`;
      itemAvaliacao.textContent = `${usuario} - Avaliação: ${avaliacao.nota} estrela(s) - Comentário: ${avaliacao.avaliacaoReceita}`;

      listaAvaliacoes.appendChild(itemAvaliacao);
    }
  }
}

// Função para calcular a média das avaliações
async function calcularMediaAvaliacoes(receitaId) {
  const avaliacoes = await obterAvaliacaoPorReceita(receitaId);
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

// Exibir avaliações iniciais da receita (se houver)
const receitaId = document.querySelector("main").dataset.receitaId; // Obter o ID da receita
exibirAvaliacoes(receitaId);

// Calcular a média e exibir para o usuário
calcularMediaAvaliacoes(receitaId);

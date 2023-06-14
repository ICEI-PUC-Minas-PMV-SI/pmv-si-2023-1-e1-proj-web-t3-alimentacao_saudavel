// Objeto para armazenar as avaliações por receita
let historicoAvaliacoes = {};

// Função para carregar o histórico de avaliações do localStorage
function carregarHistoricoAvaliacoes() {
    const historicoArmazenado = localStorage.getItem("historicoAvaliacoes");
    if (historicoArmazenado) {
      historicoAvaliacoes = JSON.parse(historicoArmazenado);
    }
  }

  // Função para salvar o histórico de avaliações no localStorage
function salvarHistoricoAvaliacoes(novaAvaliacao,receitaId) 
{
    historicoAvaliacoes[receitaId].push(novaAvaliacao); // Adicionar a avaliação ao histórico da receita
    localStorage.setItem("historicoAvaliacoes", JSON.stringify(historicoAvaliacoes));
  }

  function obterTodasAvaliacoes() {
    return historicoAvaliacoes
  }

  function obterAvaliacaoPorReceita(receitaId) {
    return historicoAvaliacoes[receitaId]
  }
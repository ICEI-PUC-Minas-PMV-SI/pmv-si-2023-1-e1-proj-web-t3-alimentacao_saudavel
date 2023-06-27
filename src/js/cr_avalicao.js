// URL DA API DE DADOS DE USUARIOS
URL = urlBase + "avaliacoes"
//=================================================================================================

// Função para obter todas as avaliações do servidor
async function obterTodasAvaliacoes() {
  const response = await fetch(URL);
  const avaliacoes = await response.json();
  return avaliacoes;
}

// Função para obter as avaliações de uma receita específica do servidor
async function obterAvaliacaoPorReceita(receitaId) {
  const response = await fetch(`${URL}?idReceita=${receitaId}`);
  const avaliacoes = await response.json();
  return avaliacoes;
}

// Função para salvar a avaliação no servidor
async function salvarAvaliacaoNoServidor(avaliacao) {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(avaliacao)
  });
}
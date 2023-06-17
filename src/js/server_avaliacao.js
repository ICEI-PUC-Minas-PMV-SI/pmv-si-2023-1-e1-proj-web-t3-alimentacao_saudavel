// Função para obter todas as avaliações de uma receita
function obterAvaliacoesPorReceita(receitaId) {
    return fetch(`http://localhost:3000/historicoAvaliacoes?idReceita=${receitaId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erro ao obter as avaliações da receita");
        }
      });
  }
  
  // Função para salvar uma nova avaliação no servidor
  function salvarAvaliacao(novaAvaliacao) {
    return fetch('http://localhost:3000/historicoAvaliacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaAvaliacao)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erro ao salvar a avaliação");
        }
      });
  }
  
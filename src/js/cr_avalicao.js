async function salvarAvaliacaoNoServidor(avaliacao, receitaId) {
  const avaliacaoComId = { ...avaliacao, id: generateUniqueId() };
  
  await fetch('http://localhost:3000/avaliacoes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...avaliacaoComId, receitaId })
  });
}

function enviarAvaliacao(event) {
    event.preventDefault();
  
    const avaliacao = document.querySelector('input[name="avaliacao"]:checked').value;
  
    const comentarios = document.getElementById('comentarios').value;
  
    console.log('Avaliação:', avaliacao);
    console.log('Comentários:', comentarios);
  
    document.getElementById('avaliacaoForm').reset();
  }
  
  function adicionarAvaliacao(avaliacao, comentario) {
    const listaAvaliacoes = document.getElementById("listaAvaliacoes");
  
    const itemAvaliacao = document.createElement("li");
    itemAvaliacao.textContent = `Avaliação: ${avaliacao} estrela(s) - Comentário: ${comentario}`;
  
    listaAvaliacoes.appendChild(itemAvaliacao);
  }
  
  document.getElementById("avaliacaoForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const avaliacao = document.querySelector("input[name='avaliacao']:checked").value;
    const comentario = document.getElementById("comentarios").value;
  
    adicionarAvaliacao(avaliacao, comentario);
  
    document.querySelector("input[name='avaliacao']:checked").checked = false;
    document.getElementById("comentarios").value = "";
  });
  teste
async function searchFood() {
    const query = document.getElementById('searchInput').value;
    if (!query) {
        alert('Por favor, digite o nome de um alimento.');
        return;
    }
    const appId = '21b85a74'; // Seu app ID correto
    const appKey = '07848316d3278be7032bf43ad8334799'; // Seu app key correto
    const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${appId}&app_key=${appKey}`;

    try {
        const response = await fetch(url);
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        if (!response.ok) {
            const errorDetails = await response.text();
            console.error('Erro na resposta da API:', errorDetails);
            resultsContainer.innerHTML = `<li>Erro ao buscar alimentos: ${errorDetails}. Por favor, tente novamente mais tarde.</li>`;
            return;
        }

        const data = await response.json();

        if (data.hints && data.hints.length > 0) {
            data.hints.forEach(item => {
                const food = item.food;
                const listItem = document.createElement('li');
                listItem.textContent = `${food.label} - ${food.category}`;
                resultsContainer.appendChild(listItem);
            });
        } else {
            resultsContainer.innerHTML = '<li>Nenhum alimento encontrado.</li>';
        }
    } catch (error) {
        console.error('Erro ao buscar alimentos:', error);
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '<li>Erro ao buscar alimentos. Por favor, tente novamente mais tarde.</li>';
    }
}

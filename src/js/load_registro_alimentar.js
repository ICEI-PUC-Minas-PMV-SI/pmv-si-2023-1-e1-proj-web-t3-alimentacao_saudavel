
checkCurrentDate();
loadDataBaseInfo();


async function loadDataBaseInfo() {
    for (let id_refeicao = 1; id_refeicao < 5; id_refeicao++) {
        currentRefeicao = id_refeicao;
        let list_registros = await getAlimentosRegistradosDB();
        let myListFood = document.querySelector('#' + checkRefeicaoID(currentRefeicao));
        let fullDescription = "";

        // console.log('list_registros', list_registros);
        if (list_registros.length != 0) {
            list_registros.forEach(registro => {
                textFoodContent = `${registro.foodAmount} ${registro.foodMeasure} of ${registro.foodName} \n`;
                fullDescription += textFoodContent;
            });
        }
        myListFood.innerText = fullDescription;
    }
}

async function getAlimentosRegistradosDB() {
    let id_usuario = obterUsuarioLogadoId();
    id_usuario = parseInt(id_usuario);
    // THE MULTIPLE PARAMS ARE NOT WORKING   !!!!!!!!
    let params = `idUsuario=${id_usuario}&idRefeicao=${currentRefeicao}&dataRegistro=${currentDate}`

    let newURLBase = URLBase + "registro_alimentar";
    // console.log(' getAlimentosRegistradosDB URL DE BUSCA'+' ' + `${URLBase}?${params}`);

    var response = await fetch(`${newURLBase}?${params}`);
    if (response.ok) {
        let jsonData = await response.json();

        // SINCE THE PARAMS ARE NOT WORKING ON THE REQUEST
        let paramsFilter = [id_usuario, currentRefeicao, currentDate];
        jsonData = filterResponseDatabase(jsonData, paramsFilter);
        return jsonData;
    } else {
        throw new Error('Erro retorno db');
    }
}
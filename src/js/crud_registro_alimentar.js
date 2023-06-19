
// URL DA API DO REGISTRO ALIMENTAR CADASTRADOS - db_registro_alimentar.JSON
URL = 'http://localhost:3000/registro_alimentar'
let currentRefeicao = null
//=================================================================================================


// GET - RETORNO DO QUE FOI CADASTRADO NO db_registro_alimentar
async function getAlimentosRegistradosDB() {
    let id_usuario = 1;
    let id_refeicao = currentRefeicao;

    let params = `idUsuario=${id_usuario}&idRefeicao=${id_refeicao}`

    console.log('URL DE BUSCA'+' ' + `${URL}?${params}`);

    var response = await fetch(`${URL}?${params}`);
    if (response.ok) {
        let jsonData = await response.json();
        console.log(jsonData);
        console.log(jsonData.value);
        return jsonData;
    } else {
        throw new Error('Erro retorno db');
    }

}





function openModal(triggerInfo) {
    console.log('id_refeicao sent'+ ' ' + triggerInfo);
    currentRefeicao = triggerInfo;
}

function closeModal() {
    let modal = document.getElementById('adiciona');
    modal.style.display = "none";
}


// GET OS ALIMENTOOS REGISTRADOS - EXECUTADO NO MOMENTO DE EDICAO 
async function getAlimentosRegistrados() {
    // let myListFood = document.getElementById(checkRefeicaoID(currentRefeicao));
    let textArea = document.getElementById("alimentos_registrados_input");
    // textArea.value = myListFood.textContent;

    textoDB = await getAlimentosRegistradosDB();
    console.log('RETORNO CADASTRADO NO BANCO :' + ' '+ textoDB[0].descricao);
    textArea.value = textoDB[0].descricao;
}


// POST - CADASTRO DO QUE FOI ALIMENTADO NO db_registro_alimentar
// ADICIONA ALIMENTOS BASICO - MODAL 1
async function addRegularFood(id_food) {
    event.preventDefault();
    // let myListFood = document.querySelector('#breakfast_list');
    let myListFood = document.querySelector('#' + checkRefeicaoID(currentRefeicao));

    //ADICIONA NA TELA 
    foodNames = [id_food];
    foodNames.forEach(element => {
        let textNode = document.createTextNode(element + ', ');
        myListFood.appendChild(textNode);
    });

    // ENVIA PARA SALVAR NO BD
    let new_data_food = {
        idUsuario : 1,
        dataRegistro: "25-04-2022",
        idRefeicao : currentRefeicao,
        descricao : `${myListFood.textContent}`
    };
    await saveFoodDataBase(new_data_food);
}


// ADICIONA ALIMENTOS ESPECIFICOS - MODAL 2
function addSpecificFood() {
    let myListFood = document.querySelector('#' + checkRefeicaoID(currentRefeicao));

    let nomeAlimento = document.getElementById('name_alimento').value;
    let quantidade = document.getElementById('value_quantidade').value;
    let unidade = document.getElementById('unidade_alimento').value;

    let dados_alimento = nomeAlimento + ' ' + quantidade + ' '  + unidade

    //ADD NA TELA O ALIMENTO REGISTRADO
    foodData = [dados_alimento];
    foodData.forEach(element => {
        let textNode = document.createTextNode(element + ', ');
        myListFood.appendChild(textNode);
    });

    // LIMPA O FORMULARIO DE INSERCAO DE ALIMENTO PERSONALIZADO
    document.getElementById('newAlimentForm').reset();
}


async function saveFoodEditDataBase() {
    // let myListFood = document.getElementById(checkRefeicaoID(currentRefeicao));
    let textArea = document.getElementById("alimentos_registrados_input");
    console.log(textArea.textContent);
    // ENVIA PARA SALVAR NO BD
    let new_data_food = {
        idUsuario : 1,
        dataRegistro: "25-04-2022",
        idRefeicao : currentRefeicao,
        descricao : `${textArea.textContent}`
    };
    await saveFoodDataBase(new_data_food);
}


// SALVA NO BANCO DE DADOS
async function saveFoodDataBase(new_data_food) {
    // RECUPERAR id DO REGISTRO ALIMENTAR
    let list_registros = await getAlimentosRegistradosDB();
    let id_registro = list_registros[0].id;
    console.log('ID REGISTRO ALIMENTAR', id_registro);


    // let params = `idUsuario=${id_usuario}&idRefeicao=${id_refeicao}`
    // ACESSO É DIRETO NO CAMPO id - O NOME DEVE SER EXATAMENTE ESSE
    // POR ISSO TALVEZ SEJA NECESSÁRIO QUE O CAMPO id FOSSE REFERNTE AO REGISTRO ESPECIFICO
    // LOGO TODO id TERIA UM idUsuario E UM idRefeicao PARA QUE SEJA POSSIVEL FAZER A IDENTIFICACAO
    // ANTES DE EDITAR A REFEICAO DEVE FAZER UMA REQUISICAO PARA IDENTIFICAR QUAL É O id REFERENTE AQUELE REGISTRO DE FATO...
    await fetch(`${URL}/${id_registro}`, {
        method:"PUT",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(new_data_food)

    });

}



function checkRefeicaoID(id_refeicao) {
    switch (id_refeicao) {
        case 1:
            return 'breakfast_list';
        case 2:
            return 'lunch_list';
        case 3:
            return 'snack_list';
        case 4:
            return 'dinner_list';  
    }
}

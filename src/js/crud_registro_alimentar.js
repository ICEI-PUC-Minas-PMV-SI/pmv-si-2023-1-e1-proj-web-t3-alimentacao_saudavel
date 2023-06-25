
// URL DA API DO REGISTRO ALIMENTAR CADASTRADOS - db_registro_alimentar.JSON
// URL = 'http://localhost:3000/registro_alimentar'
URL = urlBase + "registro_alimentar"

let currentRefeicao = null
let currentDate = null
//BUSCA INFO SALVAS - PRIMEIRO DEVE CHECAR A DATA
checkCurrentDate();
loadDataBaseInfo();
//=================================================================================================


// GET - RETORNO DO QUE FOI CADASTRADO NO db_registro_alimentar
async function getAlimentosRegistradosDB() {
    let id_usuario = obterUsuarioLogadoId();
    console.log('vou buscar o seguinte id_usuario', id_usuario);
    console.log('vou buscar na seguinte data', currentDate);
    let params = `idUsuario=${id_usuario}&idRefeicao=${currentRefeicao}&dataRegistro=${currentDate}`

    console.log('URL DE BUSCA'+' ' + `${URL}?${params}`);

    var response = await fetch(`${URL}?${params}`);
    if (response.ok) {
        let jsonData = await response.json();
        console.log('jsonData',jsonData);
        console.log('jsonData.Value',jsonData.value);
        return jsonData;
    } else {
        throw new Error('Erro retorno db');
    }

}



function openModal(triggerInfo) {
    console.log('id_refeicao sent'+ ' ' + triggerInfo);
    currentRefeicao = triggerInfo;
}

//EDIT REFEICAO
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
        idUsuario : obterUsuarioLogadoId(),
        dataRegistro: currentDate,
        idRefeicao : currentRefeicao,
        descricao : `${myListFood.textContent}`
    };
    await saveFoodDataBase(new_data_food);
}


// ADICIONA ALIMENTOS ESPECIFICOS - MODAL 2
async function addSpecificFood() {
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

    // ENVIA PARA SALVAR NO BD
    let new_data_food = {
        idUsuario : obterUsuarioLogadoId(),
        dataRegistro: currentDate,
        idRefeicao : currentRefeicao,
        descricao : `${myListFood.textContent}`
    };
    await saveFoodDataBase(new_data_food);

    // LIMPA O FORMULARIO DE INSERCAO DE ALIMENTO PERSONALIZADO
    document.getElementById('newAlimentForm').reset();
}


async function saveFoodEditDataBase() {
    // let myListFood = document.getElementById(checkRefeicaoID(currentRefeicao));
    let textArea = document.getElementById("alimentos_registrados_input");
    console.log('CONTEUDO EDITAR: ' + textArea.value);
    // ENVIA PARA SALVAR NO BD
    let new_data_food = {
        idUsuario : obterUsuarioLogadoId(),
        dataRegistro: currentDate,
        idRefeicao : currentRefeicao,
        descricao : `${textArea.value}`
    };
    await saveFoodDataBase(new_data_food);
    loadDataBaseInfo();

}


// SALVA NO BANCO DE DADOS
async function saveFoodDataBase(new_data_food) {
    // RECUPERAR id DO REGISTRO ALIMENTAR
    let list_registros = await getAlimentosRegistradosDB();
    if (list_registros.length != 0) {
        let id_registro = list_registros[0].id;
        httpMethod = 'PUT';
        URL_REG_ALIM = `${URL}/${id_registro}`;

        console.log('ID REGISTRO ALIMENTAR', id_registro);
    } else {
        httpMethod = 'POST';
        URL_REG_ALIM = `${URL}`;
        console.log('NOVO REGISTRO ALIMENTAR');

    }
    


    // let params = `idUsuario=${id_usuario}&idRefeicao=${id_refeicao}`
    // ACESSO É DIRETO NO CAMPO id - O NOME DEVE SER EXATAMENTE ESSE
    // POR ISSO TALVEZ SEJA NECESSÁRIO QUE O CAMPO id FOSSE REFERNTE AO REGISTRO ESPECIFICO
    // LOGO TODO id TERIA UM idUsuario E UM idRefeicao PARA QUE SEJA POSSIVEL FAZER A IDENTIFICACAO
    // ANTES DE EDITAR A REFEICAO DEVE FAZER UMA REQUISICAO PARA IDENTIFICAR QUAL É O id REFERENTE AQUELE REGISTRO DE FATO...
    await fetch(URL_REG_ALIM, {
        method:httpMethod,
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(new_data_food)
    });
}

async function loadDataBaseInfo() {
    // CHECK ID USUARIO
    // let idUsuario = obterUsuarioLogadoId();
    // CHECK DIA
    // currentDate;
    // CHECK ID REFEICAO
    // currentRefeicao;
    // FILL REFEICAO ON SCREEN
    //ADICIONA DADOS EXISTENTES DO BD NA TELA 
    //PERCORRE TODAS POSSIVEIS REFEICOES

    for (let id_refeicao = 1; id_refeicao < 5; id_refeicao++) {
        currentRefeicao = id_refeicao;
        let list_registros = await getAlimentosRegistradosDB();
        let myListFood = document.querySelector('#' + checkRefeicaoID(currentRefeicao));


        console.log('list_registros',list_registros);
        if (list_registros.length != 0) {
            let descricao_bd = list_registros[0].descricao;
            console.log(currentRefeicao, descricao_bd);
            myListFood.innerText = descricao_bd;
        } else {
            myListFood.innerText = '';
        }
        
    }
    
}



function checkCurrentDate() {
    let today = new Date();
    let day = today.getDate();
    let dayOfWeek = today.getDay();
    let monthOfYear = today.getMonth();
    let year = today.getFullYear();

    const daysOfWeek = [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    let dayName = daysOfWeek[dayOfWeek];
    let monthName = monthsOfYear[monthOfYear];

    day = String(day).padStart(2,'0');
    monthOfYear = String(monthOfYear+1).padStart(2,'0');

    currentDate = `${day}-${monthOfYear}-${year}`;
    

    console.log('currentDate:', currentDate);


    let calendarButton = document.querySelector('#calendarSelector');
    calendarButton.innerText = ' ' + day + ' - '+ monthName + ' - ' + year;

    highlightDayWeek();
}


function updateDateSelector() {
    let calendarText = document.querySelector('#dataRegistro');
    let dateSelected = calendarText.value;
    // FORMART RETURN YYYY-MM-DD
    console.log('dateSelected', dateSelected);
    let dateArray = dateSelected.split('-');

    let day = dateArray[2];
    let monthOfYear = dateArray[1];
    let year = dateArray[0];

    const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let monthName = monthsOfYear[parseInt(monthOfYear)-1];

    console.log('dateArray', dateArray);
    console.log('day', day);
    console.log('monthOfYear', monthOfYear);
    console.log('year', year);
    console.log('monthName', monthName);

    currentDate = `${day}-${monthOfYear}-${year}`;
    console.log('currentDate:', currentDate);

    let calendarButton = document.querySelector('#calendarSelector');
    calendarButton.innerText = ' ' + day + ' - '+ monthName + ' - ' + year;
    loadDataBaseInfo();
    highlightDayWeek();

}


function highlightDayWeek() {
    console.log('highlightDayWeek');
    console.log(currentDate);

    let dateArray = currentDate.split('-');
    let day = dateArray[0];
    let monthOfYear = dateArray[1]-1;
    let year = dateArray[2];

    dateHighlight = new Date(parseInt(year), parseInt(monthOfYear), parseInt(day));
    dateHighlight = dateHighlight.getDay();

    const daysOfWeek = [ 'domingo', "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    let dayName = daysOfWeek[dateHighlight];

    console.log('dateHighlight, ', dayName);
    


}


// Função para obter o ID do usuário logado
function obterUsuarioLogadoId() {
    let usuarioLogado = obterDadosUsuarioLogadoSessao();
  
    if (usuarioLogado != null) {
      return usuarioLogado.id;
    }

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

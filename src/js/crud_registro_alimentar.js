
// URL DA API DO REGISTRO ALIMENTAR CADASTRADOS - db_registro_alimentar.JSON
// URL = 'http://localhost:3000/registro_alimentar'
URLBase = urlBaseApi() + "registro_alimentar"
//============================================================()=====================================

function urlBaseApi(){
    if(window.location.href.includes("vercel"))
        return "https://nutrischedule.vercel.app/api/"
    else
        return "http://localhost:3000/"
}

let currentRefeicao = null
let currentDate = null
//BUSCA INFO SALVAS - PRIMEIRO DEVE CHECAR A DATA
checkCurrentDate();
loadDataBaseInfo();
//=================================================================================================


// GET - RETORNO DO QUE FOI CADASTRADO NO db_registro_alimentar
async function getAlimentosRegistradosDB() {
    let id_usuario = obterUsuarioLogadoId();
    // console.log('vou buscar o seguinte id_usuario', id_usuario);
    // console.log('vou buscar na seguinte data', currentDate);
    let params = `idUsuario=${id_usuario}&idRefeicao=${currentRefeicao}&dataRegistro=${currentDate}`


    // UPDATE URL 
    URLBase = urlBaseApi() + "registro_alimentar";
    // console.log(' getAlimentosRegistradosDB URL DE BUSCA'+' ' + `${URLBase}?${params}`);

    var response = await fetch(`${URLBase}?${params}`);
    if (response.ok) {
        let jsonData = await response.json();
        // console.log('jsonData',jsonData);
        // console.log('jsonData.Value',jsonData.value);
        return jsonData;
    } else {
        throw new Error('Erro retorno db');
    }
}



function openModal(triggerInfo) {
    currentRefeicao = triggerInfo;
}

//EDIT REFEICAO
// GET OS ALIMENTOOS REGISTRADOS - EXECUTADO NO MOMENTO DE EDICAO 
async function getAlimentosRegistrados() {
    // let myListFood = document.getElementById(checkRefeicaoID(currentRefeicao));
    let textArea = document.getElementById("alimentos_registrados_input");
    // textArea.value = myListFood.textContent;

    textoDB = await getAlimentosRegistradosDB();
    // console.log('RETORNO CADASTRADO NO BANCO :' + ' '+ textoDB[0].descricao);
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
    // console.log('CONTEUDO EDITAR: ' + textArea.value);
    // ENVIA PARA SALVAR NO BD
    let new_data_food = {
        idUsuario : obterUsuarioLogadoId(),
        dataRegistro: currentDate,
        idRefeicao : currentRefeicao,
        descricao : `${textArea.value}`
    };
    await saveFoodDataBase(new_data_food);
    await loadDataBaseInfo();

}


// SALVA NO BANCO DE DADOS
async function saveFoodDataBase(new_data_food) {
    // UPDATE URL 
    URLBase = urlBaseApi() + "registro_alimentar";
    
    // RECUPERAR id DO REGISTRO ALIMENTAR
    let list_registros = await getAlimentosRegistradosDB();
    if (list_registros.length != 0) {
        let id_registro = list_registros[0].id;
        httpMethod = 'PUT';
        URL_REG_ALIM = `${URLBase}/${id_registro}`;

        // console.log('ID REGISTRO ALIMENTAR', id_registro);
    } else {
        httpMethod = 'POST';
        URL_REG_ALIM = `${URLBase}`;
        // console.log('NOVO REGISTRO ALIMENTAR');
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

async function loadDataBaseInfo2() {
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


        // console.log('list_registros',list_registros);
        if (list_registros.length != 0) {
            let descricao_bd = list_registros[0].foodName;
            // console.log(currentRefeicao, descricao_bd);
            myListFood.innerText = descricao_bd;
        } else {
            myListFood.innerText = '';
        }
        
    }
    
}


async function checkCurrentDate() {
    let today = new Date();
    let day = today.getDate();
    let dayOfWeek = today.getDay();
    let monthOfYear = today.getMonth();
    let year = today.getFullYear();

    const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    
    let monthName = monthsOfYear[monthOfYear];

    day = String(day).padStart(2,'0');
    monthOfYear = String(monthOfYear+1).padStart(2,'0');

    currentDate = `${day}-${monthOfYear}-${year}`;
    

    // console.log('currentDate:', currentDate);


    let calendarButton = document.querySelector('#calendarSelector');
    calendarButton.innerText = ' ' + day + ' - '+ monthName + ' - ' + year;

    await highlightDayWeek();
}

async function changeDay(id_day) {
    let calendarText = document.querySelector(`#${id_day}`);
    let dateValueSelected = calendarText.querySelector("#textNumDay").innerText
    // FORMART RETURN YYYY-MM-DD
    // console.log('dateValueSelected BOTAO', dateValueSelected);
    // console.log('dateSelected BOTAO', calendarText);

    let dateArray = dateValueSelected.split('/');
    let day = parseInt(dateArray[0]);
    let monthOfYear = parseInt(dateArray[1]);

    let data_separada = currentDate.split('-');
    let year = parseInt(data_separada[2]);

    // console.log(day);
    // console.log(monthOfYear);
    // console.log(year);

    //NEW CURRENT DAY
    day = String(day).padStart(2,'0');
    monthOfYear = String(monthOfYear).padStart(2,'0');

    currentDate = `${day}-${monthOfYear}-${year}`;
    // console.log('NEW currentDate:', currentDate);

    const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let monthName = monthsOfYear[parseInt(monthOfYear)-1];

    let calendarButton = document.querySelector('#calendarSelector');
    calendarButton.innerText = ' ' + day + ' - '+ monthName + ' - ' + year;

    await loadDataBaseInfo();
    await highlightDayWeek();

}


async function updateDateSelector() {
    let calendarText = document.querySelector('#dataRegistro');
    let dateSelected = calendarText.value;
    // FORMART RETURN YYYY-MM-DD
    // console.log('dateSelected', dateSelected);
    let dateArray = dateSelected.split('-');

    let day = dateArray[2];
    let monthOfYear = dateArray[1];
    let year = dateArray[0];

    const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let monthName = monthsOfYear[parseInt(monthOfYear)-1];

    // console.log('dateArray', dateArray);
    // console.log('day', day);
    // console.log('monthOfYear', monthOfYear);
    // console.log('year', year);
    // console.log('monthName', monthName);

    currentDate = `${day}-${monthOfYear}-${year}`;
    // console.log('currentDate:', currentDate);

    let calendarButton = document.querySelector('#calendarSelector');
    calendarButton.innerText = ' ' + day + ' - '+ monthName + ' - ' + year;
    await loadDataBaseInfo();
    await highlightDayWeek();

}


// ADD THE DAYS TO THE WEEK 
async function highlightDayWeek() {
    // console.log('highlightDayWeek');
    // console.log(currentDate);

    let dateArray = currentDate.split('-');
    let day = parseInt(dateArray[0]);
    let monthOfYear = parseInt(dateArray[1])-1;
    let year = parseInt(dateArray[2]);

    let dateHighlight = new Date(year, monthOfYear, day);
    dayDate = dateHighlight.getDate();
    dayHigh = dateHighlight.getDay();

    const daysOfWeekID = [ "dayDom", "daySeg", "dayTer", "dayQua", "dayQui", "daySex", "daySab"];
    let idDayName = daysOfWeekID[dayHigh];

    // console.log('dateHighlight, ', idDayName);
    

    //THE CURRENT DAY HIGHLIGHT
    for (i=0; i<daysOfWeekID.length; i++) {
        day_id = daysOfWeekID[i];

        if (idDayName === day_id) {
            let weekDayButton = document.querySelector(`#${idDayName}`);
            weekDayButton.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 0);
            weekDayButton.classList.remove('bg-light');
            weekDayButton.classList.remove('text-success');
            weekDayButton.classList.add('bg-primary');
            weekDayButton.classList.add('text-white');

        } else {
            let weekDayButton = document.querySelector(`#${day_id}`);
            // weekDayButton.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 0);
            weekDayButton.classList.add('bg-light');
            weekDayButton.classList.add('text-success');
            weekDayButton.classList.remove('bg-primary');
            weekDayButton.classList.remove('text-white');

        }
    }


    // FILL THE OTHER DAYS
    switch (idDayName) {
        case "dayDom":
            seg = document.querySelector(`#daySeg`);
            seg.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            ter = document.querySelector(`#dayTer`);
            ter.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qua = document.querySelector(`#dayQua`);
            qua.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qui = document.querySelector(`#dayQui`);
            qui.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sex = document.querySelector(`#daySex`);
            sex.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sab = document.querySelector(`#daySab`);
            sab.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            break;

        case "daySeg":
            dom = document.querySelector(`#dayDom`);
            dom.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, -1);
            ter = document.querySelector(`#dayTer`);
            ter.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 2);
            qua = document.querySelector(`#dayQua`);
            qua.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qui = document.querySelector(`#dayQui`);
            qui.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sex = document.querySelector(`#daySex`);
            sex.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sab = document.querySelector(`#daySab`);
            sab.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            break;

        case "dayTer":
            dom = document.querySelector(`#dayDom`);
            dom.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, -2);
            seg = document.querySelector(`#daySeg`);
            seg.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qua = document.querySelector(`#dayQua`);
            qua.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 2);
            qui = document.querySelector(`#dayQui`);
            qui.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sex = document.querySelector(`#daySex`);
            sex.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sab = document.querySelector(`#daySab`);
            sab.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            break;

        case "dayQua":
            dom = document.querySelector(`#dayDom`);
            // console.log('dayDom');
            dom.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, -3);
            seg = document.querySelector(`#daySeg`);
            // console.log('daySeg');
            seg.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            ter = document.querySelector(`#dayTer`);
            // console.log('dayTer');
            ter.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qui = document.querySelector(`#dayQui`);
            // console.log('dayQui');
            qui.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 2);
            sex = document.querySelector(`#daySex`);
            // console.log('daySex');
            sex.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sab = document.querySelector(`#daySab`);
            // console.log('daySab');
            sab.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            break;

        case "dayQui":
            dom = document.querySelector(`#dayDom`);
            dom.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, -4);
            seg = document.querySelector(`#daySeg`);
            seg.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            ter = document.querySelector(`#dayTer`);
            ter.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qua = document.querySelector(`#dayQua`);
            qua.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sex = document.querySelector(`#daySex`);
            sex.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 2);
            sab = document.querySelector(`#daySab`);
            sab.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            break;

        case "daySex":
            dom = document.querySelector(`#dayDom`);
            dom.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, -5);
            seg = document.querySelector(`#daySeg`);
            seg.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            ter = document.querySelector(`#dayTer`);
            ter.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qua = document.querySelector(`#dayQua`);
            qua.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qui = document.querySelector(`#dayQui`);
            qui.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sab = document.querySelector(`#daySab`);
            sab.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 2);
            break;

        case "daySab":
            dom = document.querySelector(`#dayDom`);
            dom.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, -6);
            seg = document.querySelector(`#daySeg`);
            seg.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            ter = document.querySelector(`#dayTer`);
            ter.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qua = document.querySelector(`#dayQua`);
            qua.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            qui = document.querySelector(`#dayQui`);
            qui.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            sex = document.querySelector(`#daySex`);
            sex.querySelector("#textNumDay").innerText = fillWeekDays(dateHighlight, 1);
            break;


    }

}


// CALCULATE THE DAYS 
function fillWeekDays(data, qtd_days) {
    data.setDate(data.getDate() + qtd_days);
    // console.log('DT ORG: ',data);
    // console.log('QTD ADD: ',qtd_days);

    day = String(data.getDate()).padStart(2,'0');
    monthOfYear = String(data.getMonth()+1).padStart(2,'0');
    year = data.getFullYear()
    formattedDate = `${day}/${monthOfYear}`;

    // console.log('formattedDate', formattedDate);
    return formattedDate;
}



// MUDA STATE DO BUTTON MODE REPORT - NECESSÁRIO P CONFERIR RELATORIO
function changeStateReport(id_selected) {
    // console.log(id_selected);
    options = ['month_report', 'week_report', 'day_report'];
    for (i=0; i<options.length; i++) {
        if (id_selected === options[i]) {
            document.querySelector(`#${options[i]}`).classList.add('active');
        } else {
            document.querySelector(`#${options[i]}`).classList.remove('active');
        }
    }
}



//generatePDF MUST MAKE SURE REPORT OPTIONS WAS SELECTED - id=selected_report
async function generatePDF() {
    // let report_btn = document.querySelector('#selected_report');
    let opt_report_btn = document.querySelector('#selected_report').children;
    // console.log(opt_report_btn);

    // DEVE VERIFICAR QUAL ESTÁ ATIVO NO FUTURO...
    report_type_id = 'day_report';
    // console.log('THIS ID CONTAINS THE ACTIVE CLASS REQUIRED ' + report_type_id);
    await createReportTable(report_type_id);

}


async function createReportTable(report_type_id) {
    // console.log('createReportTable  ' + report_type_id);

    switch (report_type_id) {
        case 'day_report':
            await getTableDataBase();
        case 'week_report':
            await getTableDataBase();
        case 'month_report':
            await getTableDataBase();
    }
}


// function addOneWeek(){
//     // ULTIMO DIA PRESENTE = SABADO
//     //FIRST DAY NEXT WEEK = DOM = SABADO + 1
//     // SEG = SABADO + 2
//     // TER = SABADO + 3
//     // QUA = SABADO + 4
//     // QUI = SABADO + 5
//     // SEX = SABADO + 6
//     // SAB PASS = SABADO + 7
//     let data_separada = currentDate.split('-');
//     let year = parseInt(data_separada[2]);
//     console.log(year);

//     sab = document.querySelector(`#daySab`);
//     let ultimo_dia_menu = sab.querySelector("#textNumDay").innerText;

//     let dateArray = ultimo_dia_menu.split('/');
//     let day = parseInt(dateArray[0]);
//     let monthOfYear = parseInt(dateArray[1]);
//     console.log(dateArray);
//     console.log(day);
//     console.log(monthOfYear);


//     let ultimo_dia = new Date(year, monthOfYear, day);
//     dayDate = ultimo_dia.getDate();
//     dayName = ultimo_dia.getDay();

//     // CHANGE MENU SELECTOR DATA
//     // let calendarText = document.querySelector('#dataRegistro');
//     // calendarText.value =  ' ' + day + ' - '+ monthName + ' - ' + year;
//     // let dateSelected = calendarText.value;

//     console.log('ULTIMO DIA', `${ultimo_dia}`);


// }

// function removeOneWeek(){
//     //PRIMEIRO DIA PRESENTE = DOMINGO
//     //LAST DAY PREV WEEK = SAB = DOMINGO - 1
//     // SEX = DOMINGO - 2
//     // QUI = DOMINGO - 3
//     // QUA = DOMINGO - 4
//     // TER = DOMINGO - 5
//     // SEG = DOMINGO - 6
//     // DOM PASS = DOMINGO - 7

// }



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

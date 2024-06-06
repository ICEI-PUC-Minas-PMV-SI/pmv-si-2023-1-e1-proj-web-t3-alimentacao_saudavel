URLBase = urlBaseApi();

function urlBaseApi(){
    if(window.location.href.includes("vercel"))
        return "https://nutrischedule.vercel.app/api/";
    else
        return "http://localhost:3000/";
}

let currentRefeicao = null;
let currentDate = null;

function openModal(triggerInfo) {
    currentRefeicao = triggerInfo;
}

function obterUsuarioLogadoId() {
    let usuarioLogado = obterDadosUsuarioLogadoSessao();
  
    if (usuarioLogado != null) {
      return usuarioLogado.id;
    }
  }
  

function getRefeicaoName(idRefeicao) {
    return {
        1:"Café da manhã.", 
        2:"Almoço.",
        3:"Lanche.",
        4:"Jantar.",
        5:"Agua"
    }[idRefeicao];
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


// SINCE THE PARAMS ARE NOT WORKING ON THE REQUEST
function filterResponseDatabase(jsonData, paramsFilter) {
    let [idUsuario, idRefeicao, dataRegistro] = paramsFilter;

    // Validate types
    if (idUsuario == null) {
        throw new Error('idUsuario must not be none');
    }
    if (idRefeicao !== undefined && typeof idRefeicao !== 'number') {
        throw new Error('idRefeicao must be a number');
    }
    if (dataRegistro !== undefined && typeof dataRegistro !== 'string') {
        throw new Error('dataRegistro must be a string');
    }

    let jsonDataFiltered = jsonData.filter(registro => {
        let isMatch = true;
        if (idUsuario !== undefined && registro.idUsuario !== idUsuario){
            isMatch = false;
        }
        if (idRefeicao !== undefined && registro.idRefeicao !== idRefeicao){
            isMatch = false;
        }
        if (dataRegistro !== undefined && registro.dataRegistro !== dataRegistro){
            isMatch = false;
        }
        return isMatch;
    });
    return jsonDataFiltered;
}

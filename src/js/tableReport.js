
// URL DA API DO REGISTRO ALIMENTAR CADASTRADOS - db_registro_alimentar.JSON
// URL = 'http://localhost:3000/registro_alimentar'
URL = urlBaseApi() + "registro_alimentar"
//============================================================()=====================================

function urlBaseApi(){
    if(window.location.href.includes("vercel"))
        return "https://nutrischedule.vercel.app/api/"
    else
        return "http://localhost:3000/"
}

//=================================================================================================


// GET - RETORNO DO QUE FOI CADASTRADO NO db_registro_alimentar
async function getAllRegistersFromUser() {
    let id_usuario = obterUsuarioLogadoId();
    // let id_usuario = 1;
    let params = `idUsuario=${id_usuario}`

    // UPDATE URL 
    URL = urlBaseApi() + "registro_alimentar";
    console.log('URL DE BUSCA getAllRegistersFromUser '+' ' + `${URL}?${params}`);

    var response = await fetch(`${URL}?${params}`);
    if (response.ok) {
        let jsonData = await response.json();
        console.log('jsonData',jsonData);
        return jsonData;
    } else {
        throw new Error('Erro retorno db');
    }
}



async function getTableDataBase() {
    console.log('----------- THE WHOLE REGISTER FROM ID_USER');
    let registersFound = await getAllRegistersFromUser();
    console.log('-----------------')

    registersFound.sort((a,b) => a['dataRegistro'].localeCompare(b['dataRegistro']));


    const data = registersFound;
    
    // Create an empty table element
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-bordered');


    
    // Create the table header row
    const headerRow = document.createElement('tr');
    
    // Extract the keys from the first object to create table headers
    let keys = Object.keys(data[0]);
    // keys = keys['dataRegistro', 'idRefeicao', 'descricao'];
    console.log('keys ', keys);
    
    // Create table headers
    keys.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      th.setAttribute('scope', 'col');
      headerRow.appendChild(th);
    });
    
    // Append the table header row to the table
    table.appendChild(headerRow);
    
    // Create table rows and cells with data
    data.forEach(item => {
      const row = document.createElement('tr');
    
      // Create table cells
      keys.forEach(key =>  {
        const cell = document.createElement('td');
        if (key == 'idRefeicao') {
            cell.textContent = getRefeicaoName(item[key]);
        } else {
            cell.textContent = item[key];
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
    console.log(table);
    console.log(table.children)


    const container = document.querySelector('#myTableReport');
    console.log(container)
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    container.appendChild(table);
}


function getRefeicaoName(idRefeicao) {
    return {
        1:"Café da manhã.", 
        2:"Almoço.",
        3:"Lanche.",
        4:"Jantar."
      }[idRefeicao]
}



function obterUsuarioLogadoId() {
    let usuarioLogado = obterDadosUsuarioLogadoSessao();
  
    if (usuarioLogado != null) {
      return usuarioLogado.id;
    }

  }

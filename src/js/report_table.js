// GET - RETORNO DO QUE FOI CADASTRADO NO db.json
async function getAllRegistersFromUser() {
    let id_usuario = parseInt(obterUsuarioLogadoId());
    // let id_usuario = 1;
    let params = `idUsuario=${id_usuario}`;

    let urlFoodDatabase = URLBase + "registro_alimentar";
    // console.log('URL DE BUSCA getAllRegistersFromUser '+' ' + `${urlFoodDatabase}?${params}`);

    var response = await fetch(`${urlFoodDatabase}?${params}`);
    if (response.ok) {
        let jsonData = await response.json();
        // console.log('jsonData', jsonData);
        return jsonData;
    } else {
        throw new Error('Erro retorno db');
    }
}



async function createReportTableV2(){
    let registersFound = await getAllRegistersFromUser();

    // sort the array of objects by a date property 
    registersFound.sort((a,b) => a['dataRegistro'].localeCompare(b['dataRegistro']));

    const data = registersFound;
    
    // Create an empty table element
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-bordered');
    table.setAttribute('id','myTableContent');
    
    // Create the table header row
    const headerRow = document.createElement('tr');
    
    // Extract the keys from the first object to create table headers
    // let keys = Object.keys(data[0]);
    // let keys = ['id', 'dataRegistro', 'idRefeicao', 'foodName', 'foodAmount', 'foodMeasure', 'foodWeight', 'kcalValue'];
    let keys = ['dataRegistro', 'idRefeicao', 'foodName', 'foodAmount', 'foodMeasure', 'kcalValue'];
    // console.log('keys ', keys);
    
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
      let idFood = item['id'];
      let row = document.createElement('tr');
      row.setAttribute("id", idFood);
    
      // Create table cells with database content
      // row with cells added
      row = createCellData(row, keys, item);

      if (row){
        // Add edit and remove option
        let optionCell = row.insertCell(-1);
        let divButtonOptions = createButtonOnTable(idFood, data);
        optionCell.appendChild(divButtonOptions);

        table.appendChild(row);
      }

      
    });
    // console.log(table);
    // console.log(table.children)

    // CREATE THE TOTAL INFO - A DIFFERENT TABLE -> AMOUNT KCAL
    let totalAmountTable = createTotalAmountTable(data);

    const container = document.querySelector('#myTableReport');
    // console.log(container)
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    container.appendChild(table);
    container.appendChild(totalAmountTable);
    container.appendChild(createButtonPDF());
}

function convertDateIntoYYYYMMDD(dateStr){
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
}

function convertDateIntoDDMMYYYY(dateStr){
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
}


function createCellData(row, keys, item){
    // IGNORA idRefeicao == 5 -> AGUA
    if (item.idRefeicao !== 5){
        keys.forEach(key =>  {
            const cell = document.createElement("td");
            cell.setAttribute("id", key);
    
            if (key === "dataRegistro" ){
                const dateInput = document.createElement("input");
                dateInput.setAttribute("type", "date");
                dateInput.classList.add("form-control");
                dateInput.classList.add("form-control-sm");
                // dateInput.setAttribute("readonly", true);
                dateInput.disabled = true;
                dateInput.value = convertDateIntoYYYYMMDD(item[key]);
    
                cell.appendChild(dateInput);
            } else if(key === "idRefeicao"){
                const selectInput = document.createElement("select");
                selectInput.classList.add("form-control");
                selectInput.classList.add("form-control-sm");
                selectInput.disabled = true;
    
                const options = [
                    {value: 1, text: "Café da manhã."},
                    {value: 2, text: "Almoço."},
                    {value: 3, text: "Lanche."},
                    {value: 4, text: "Jantar."},
                ];
                
                options.forEach(option => {
                    const opt = document.createElement("option");
                    opt.value = option.value;
                    opt.text = option.text;
                    selectInput.appendChild(opt);
                });
    
                selectInput.value = item[key];
    
                cell.appendChild(selectInput);
            } else if (key === "foodMeasure"){
                const selectInput = document.createElement("select");
                selectInput.classList.add("form-control");
                selectInput.classList.add("form-control-sm");
                selectInput.disabled = true;
    
                let options = [];
                let measures = item.measures;
                Object.keys(measures).forEach(label => {
                    options.push({value: measures[label], text: label});
                });
    
                options.forEach(option => {
                    const opt = document.createElement("option");
                    opt.value = option.value;
                    opt.text = option.text;
                    selectInput.appendChild(opt);
                });
                selectInput.label = item[key];
    
                cell.appendChild(selectInput);
            } else if (key === "foodAmount"){
                const amountInput = document.createElement("input");
                amountInput.classList.add("form-control");
                amountInput.classList.add("form-control-sm");
                amountInput.disabled = true;
    
                amountInput.value = item[key];
    
                cell.appendChild(amountInput);
            } else if (key === "kcalValue"){
                cell.textContent = parseFloat(item[key]).toFixed(2);
            }
            
            else {
                cell.textContent = item[key];
            }
    
            row.appendChild(cell);
          });
        return row;
    } else {
        return false;
    }
}


function sumkCAL(data){
    // console.log(data);
    const sums = {};

    data.forEach(item => {
        const key = `${item.dataRegistro}_${item.idRefeicao}`;
        const kcalPer100g = parseFloat(item.kcalValue);
        const weightInGrams = parseFloat(item.foodWeight);
        const kcalPerServing = (kcalPer100g / 100) * weightInGrams;
        const totalKcal = kcalPerServing * (parseFloat(item.foodAmount || 1));
        // console.log(`Calories per serving ${item.foodName}: ${totalKcal} KCAL || ${item.foodMeasure} ${weightInGrams} || ${item.kcalValue}`);

        sums[key] = (sums[key] || 0) + totalKcal;

    });
    // console.log(sums);
    return sums;
}


function createTotalAmountTable(data){
    let amountKcal = sumkCAL(data);
    // console.log(amountKcal);

    let tableAmountKcal = document.createElement("table");
    tableAmountKcal.classList.add("table");
    tableAmountKcal.classList.add("table-bordered");
    tableAmountKcal.setAttribute("id", "tableAmountKcal");

    let row = document.createElement("tr");
    let footerText = document.createElement("td");
    footerText.textContent = "Total de Calorias";

    row.appendChild(footerText);
    tableAmountKcal.appendChild(row);
    
    Object.keys(amountKcal).forEach(key => {
        // console.log(key);
        let tempKeyData = key.split("_");
        let dataRegistro = tempKeyData[0];
        let idRefeicao = parseInt(tempKeyData[tempKeyData.length - 1]);
    
        let row = document.createElement("tr");
        let cellDate = document.createElement("td");
        let cellMealName = document.createElement("td");
        let cellValueAmount = document.createElement("td");

        cellDate.textContent = dataRegistro;
        cellMealName.textContent = getRefeicaoName(idRefeicao);
        cellValueAmount.textContent = `${amountKcal[key].toFixed(2)} Kcal`;

        row.appendChild(cellDate);
        row.appendChild(cellMealName);
        row.appendChild(cellValueAmount);
        tableAmountKcal.appendChild(row);
    });
    return tableAmountKcal;
}


function createButtonOnTable(idFood, data){
    let btnEdit = document.createElement("button");
    btnEdit.setAttribute("type", "button");
    btnEdit.classList.add("btn");
    btnEdit.classList.add("btn-success");
    btnEdit.setAttribute("id", "btnEditFields");
    btnEdit.setAttribute("onclick", `toggleDisabledPropertyFields('${idFood}')`);
    btnEdit.textContent = "i";

    let btnRemove = document.createElement("button");
    btnRemove.setAttribute("type", "button");
    btnRemove.classList.add("btn");
    btnRemove.classList.add("btn-success");
    btnRemove.setAttribute("onclick", `removeFood('${idFood}')`);
    btnRemove.textContent = "x";

    let btnSave = document.createElement("button");
    btnSave.setAttribute("type", "button");
    btnSave.classList.add("btn");
    btnSave.classList.add("btn-success");
    btnSave.setAttribute("id", "btnSaveChanges");
    // btnSave.setAttribute("onclick", `updateDataFood('${idFood}, ${JSON.stringify(data)}')`);
    btnSave.setAttribute("onclick", `updateDataFood('${idFood}', '${JSON.stringify(data)}')`);

    btnSave.textContent = "v";
    btnSave.disabled = true;

    let divButtonOptions = document.createElement("div");
    divButtonOptions.setAttribute("id", "divButtonOptions");
    divButtonOptions.appendChild(btnEdit);
    divButtonOptions.appendChild(btnRemove);
    divButtonOptions.appendChild(btnSave);

    return divButtonOptions;
}


async function removeFood(idFood){
    let urlDeleteFood = URLBase + "registro_alimentar" + `/${idFood}`;
    // console.log(urlDeleteFood);
    let response = await fetch(urlDeleteFood, {
        method: "DELETE"
    })

    if (response.ok){
        // REMOVE THE TABLE ROW
        let foodHtmlElement = document.getElementById(idFood);
        if (foodHtmlElement && foodHtmlElement.parentNode){
            foodHtmlElement.parentNode.removeChild(foodHtmlElement);
        }

        // ADD THE NEW AMOUNT TABLE RESULT
        let amountTableResult = document.getElementById("tableAmountKcal");
        if (amountTableResult && amountTableResult.parentNode){
            amountTableResult.parentNode.removeChild(amountTableResult);
        }

        let updatedDataFood = await getAllRegistersFromUser();
        let newAmountResult = createTotalAmountTable(updatedDataFood);
        let myTableReport = document.getElementById("myTableReport");
        myTableReport.appendChild(newAmountResult);s
    }
}


function toggleDisabledPropertyFields(idFood){
    let foodHtmlElement = document.getElementById(idFood);
    let editableFields = ['dataRegistro', 'idRefeicao', 'foodMeasure', 'foodAmount'];
    editableFields.forEach(idEditField => {
        let htmlElement = foodHtmlElement.querySelector(`#${idEditField}`);
        htmlElement = htmlElement.querySelector(".form-control");
        if(htmlElement.hasAttribute("disabled")){
            htmlElement.removeAttribute("disabled");
        } else {
            htmlElement.disabled = true;
        }
    });

    let btnIdToggle = ["btnSaveChanges", "btnEditFields"];

    for (let idBtn of btnIdToggle){
        let btnChange = foodHtmlElement.querySelector(`#${idBtn}`);
        if (btnChange.hasAttribute("disabled")){
            btnChange.removeAttribute("disabled");
        } else {
            btnChange.setAttribute("disabled", true);
        }
    }
}


async function updateDataFood(idFood, data){
    data = JSON.parse(data);
    // console.log("should save the new data selected in the form fields into database");
    // console.log("Should recalculate the data shown in the table");
    let htmlRowFood = document.getElementById(idFood);
    // console.log(htmlRowFood);

    let dataRegistro = htmlRowFood.querySelector("#dataRegistro");
    dataRegistro = dataRegistro.querySelector("input").value;

    let foodAmount = htmlRowFood.querySelector("#foodAmount");
    foodAmount = foodAmount.querySelector("input").value;

    let idRefeicao = htmlRowFood.querySelector("#idRefeicao");
    idRefeicao = idRefeicao.querySelector("select");
    idRefeicao = idRefeicao.options[idRefeicao.selectedIndex].value;

    let foodMeasure = htmlRowFood.querySelector("#foodMeasure");
    foodMeasure = foodMeasure.querySelector("select");
    foodMeasure = foodMeasure.options[foodMeasure.selectedIndex].textContent;

    // let editableFields = ['dataRegistro', 'idRefeicao', 'foodMeasure'];
    // console.log('dados food found of user');
    let updatingFood = data.filter(object => {
        return object.id === idFood
    })[0];

    let newFoodWeight = updatingFood.measures[foodMeasure];
    // console.log(updatingFood);
    // console.log('updating ->', idFood);
    // console.log('updating foodMeasure ->', foodMeasure);
    // console.log('new foodWeight ->', newFoodWeight);

    let updateFields = {
        id: idFood,
        dataRegistro: convertDateIntoDDMMYYYY(dataRegistro),
        idRefeicao: parseInt(idRefeicao),
        foodAmount: foodAmount,
        foodMeasure: foodMeasure,
        foodWeight: newFoodWeight
    }

    let urlPatchFood = URLBase + "registro_alimentar" + `/${idFood}`;
    let response = await fetch(urlPatchFood, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateFields)
    });

    if (response.ok){
        // console.log(idFood, " -> FOOD UPDATED IN DATABASE");
        // UPDATE TOTAL AMOUNT KCAL
        await updateTotalAmountTable();
    }


    // console.log(updateFields);
    // block the fields again
    toggleDisabledPropertyFields(idFood);
}

async function updateTotalAmountTable(){
    let registersFound = await getAllRegistersFromUser();
    // sort the array of objects by a date property 
    registersFound.sort((a,b) => a['dataRegistro'].localeCompare(b['dataRegistro']));
    const data = registersFound;

    let newTotalTable = createTotalAmountTable(data);
    const container = document.querySelector('#myTableReport');
    let oldVersionTotalAmountTable = document.getElementById("tableAmountKcal");
    container.removeChild(oldVersionTotalAmountTable);
    container.appendChild(newTotalTable);
}

function createButtonPDF(){
    // <button class="btn bg-white border-success btn-md text-success" type="button" onclick="GerarRelatorioEmPDF()">Gerar PDF</button>

    let buttonHtmlElementPDF = document.createElement("button");
    buttonHtmlElementPDF.classList.add("btn", "bg-white", "btn-md", "border-success", "button-hover-success");
    buttonHtmlElementPDF.setAttribute("type", "button");
    buttonHtmlElementPDF.setAttribute("id", "pdf-button");
    buttonHtmlElementPDF.setAttribute("onclick", "GerarRelatorioEmPDF()");
    buttonHtmlElementPDF.textContent = "Gerar PDF"

    return buttonHtmlElementPDF;
}
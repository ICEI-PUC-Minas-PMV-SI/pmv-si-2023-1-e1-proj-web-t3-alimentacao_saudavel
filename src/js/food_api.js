
URL_BASE_FOOD_DATABASE = "https://api.edamam.com";
APP_ID = "840c28f2";
APP_KEY = "c89dcd238b75011c48254d86b90473ef";
// let currentRefeicao = null;

// npx json-server --watch db.json

let tempFoodData = [];


function urlBaseApi(){
    if(window.location.href.includes("vercel"))
        return "https://nutrischedule.vercel.app/api/"
    else
        return "http://localhost:3000/"
}



async function fetchFood() {
    let input = document.getElementById("myInput");
    let textSearch = input.value.toUpperCase();

    let endpoint = `${URL_BASE_FOOD_DATABASE}/api/food-database/v2/parser`;
    let url = `${endpoint}?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${textSearch}`;

    let response = await fetch(url);
    if (response.ok){
        let foods = await response.json();
        foods = foods["hints"];
        if (foods.length){
            showFoodsFound(foods);
        }
    }
}



async function showFoodsFound(foods){
    console.log(foods);

    let ul = document.getElementById("mySearchFood");
    ul.innerHTML = "";

    foods.forEach(element => {
        let foodName = element["food"]["label"];
        let imgUrl = element["food"]["image"]; 
        let measures = element["measures"];
        let foodId = element["food"]["foodId"];
        let kcalValue = element["food"]["nutrients"]["ENERC_KCAL"];

        let li = document.createElement("li");
        li.classList.add("myLiElement");
        li.setAttribute("id", foodId);
        li.setAttribute("kcalValue", kcalValue);

        let textFood = document.createElement("b");
        textFood.setAttribute("foodLabel", foodName);
        textFood.textContent = foodName;
        
        let img = document.createElement("img");
        img.setAttribute("src", imgUrl);

        let selectMeasure = document.createElement("select");
        selectMeasure.classList.add("form-control");
        selectMeasure.classList.add("form-control-sm");
        selectMeasure.setAttribute("id", "selectMeasure");

        let inputAmount = document.createElement("input");
        inputAmount.classList.add("form-control");
        inputAmount.classList.add("form-control-sm");
        inputAmount.setAttribute("id", "inputAmount");
        inputAmount.setAttribute("placeholder", "Quantidade");

        let addButton = document.createElement("button");
        addButton.classList.add("btn");
        addButton.classList.add("btn-success");
        addButton.textContent = "+"
        addButton.setAttribute("onclick", `addFoodSelected('${foodId}')`);
        addButton.setAttribute("id", "addFoodButton");

        measures.forEach(element => {
            let option = document.createElement("option");
            option.setAttribute("value", element['weight']);
            option.setAttribute("label", element['label']);
            option.textContent = element['label'];

            selectMeasure.appendChild(option);
        });

        li.appendChild(img);
        li.appendChild(textFood);
        li.appendChild(selectMeasure);
        li.appendChild(inputAmount);
        li.appendChild(addButton);
        ul.appendChild(li);

    });
}


function addFoodSelected(foodId){
    event.preventDefault();

    let foodLiElement = document.getElementById(foodId);
    let foodName = foodLiElement.querySelector("b[foodLabel]").textContent;

    let selectElement = foodLiElement.querySelector("#selectMeasure");
    let selectedOption  = selectElement.options[selectElement.selectedIndex];
    let labelMeasure = selectedOption.getAttribute("label");
    let valueMeasure = foodLiElement.querySelector("#selectMeasure").value;

    let foodAmount = foodLiElement.querySelector("#inputAmount").value;

    let kcalValue = foodLiElement.getAttribute("kcalValue");

    let optionsMeasure = {};
    for(let item of selectElement.options){
        optionsMeasure[item.label] = item.value;
    }
    
    let foodData = {
        // idUsuario: obterUsuarioLogadoId(),
        idUsuario: 1,
        dataRegistro: currentDate,
        idRefeicao: currentRefeicao,
        foodName: foodName,
        foodId: foodId,
        foodAmount: foodAmount,
        foodMeasure: labelMeasure,
        foodWeight: valueMeasure,
        kcalValue: kcalValue,
        measures: optionsMeasure
    }
    tempFoodData.push(foodData);

    // add foodName to the page
    let myListFood = document.querySelector('#' + checkRefeicaoID(currentRefeicao));
    let textNode = document.createTextNode(foodName + ', ');
    myListFood.appendChild(textNode);
}


async function saveFoodDatabase(){
    console.log(tempFoodData);
    let urlAddFoodDB = urlBaseApi() + "registro_alimentar";

    // POST FOODS IN db.json
    for (let specificFoodData of tempFoodData){
        await fetch(urlAddFoodDB, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(specificFoodData)
        });
    }
    // ALL FOOD WAS ADDED
    tempFoodData = [];
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







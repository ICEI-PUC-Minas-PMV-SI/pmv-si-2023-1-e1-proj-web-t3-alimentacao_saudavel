

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

    let calendarButton = document.querySelector('#calendarSelector');
    calendarButton.innerText = ' ' + day + ' - '+ monthName + ' - ' + year;

    await highlightDayWeek();
}

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
    await validadeDadosWaterUser();
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
    await validadeDadosWaterUser();
    await highlightDayWeek();

}
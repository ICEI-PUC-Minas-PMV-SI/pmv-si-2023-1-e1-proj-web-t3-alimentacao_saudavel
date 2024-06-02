
window.jsPDF = window.jspdf.jsPDF;


function checkKeyTablePDF(idRefeicao) {
    return {
        1:"cafe_da_manha", 
        2:"almoco",
        3:"lanche",
        4:"jantar",
        5:"agua"
      }[idRefeicao]
}


async function GerarRelatorioEmPDF(){
    var doc = new jsPDF('p', 'mm', 'a4');

    //title
    doc.setFontSize(22);
    doc.text("NutriSchedule - Alimentos Consumidos no Período", 105, 20, null, null, 'center');

    var registros = await getAllRegistersFromUser();
    registros.sort((a,b) => a['dataRegistro'].localeCompare(b['dataRegistro']));

    console.log(registros);
    
    var colunas = [
        { title: "Data", dataKey: "data" },
        { title: "Café da Manhã", dataKey: "cafe_da_manha" },
        { title: "Almoço", dataKey: "almoco" },
        { title: "Lanche", dataKey: "lanche" },
        { title: "Jantar", dataKey: "jantar" },
        { title: "Água Consumida", dataKey: "agua" }
    ];

    var mappedData = [];
    registros.forEach(registro => {

        if (registro.idRefeicao === 5) {
            description = parseInt(registro.foodAmount)*250 + "ml";
        }
        else {
            description = `${registro.foodAmount} ${registro.foodMeasure} of ${registro.foodName}`;
        }

        //ADD A NEW LINE AFTER EACH DIFF DAY WITH THE TOTAL AMOUNT OF KCAL
        
        mappedData.push(
            {
                data: registro.dataRegistro,
                [checkKeyTablePDF(registro.idRefeicao)]: description,
            }
        );

    });
    console.log(mappedData);

    var dados = Object.values(mappedData);

    // doc.autoTable(colunas, dados);
    doc.autoTable({
        columns: colunas,
        body: dados,
        startY: 30,
        headStyles: {
            fillColor: "28a745",
            textColor: "#fff",
            fontStyle: "bold"
        }
    })

    doc.save('relatorio-alimentar.pdf');

    var pdf = doc.output("datauristring")

    var base64pdf = pdf.split('base64,')[1]
    await enviarEmailPdfRelatorio(base64pdf)
}

async function enviarEmailPdfRelatorio(base64pdf){
    Email.send({
        SecureToken : "dfbef122-8525-49bf-b1eb-1417137ad7cc",
        To : `vinicius.coelho.1404638@sga.pucminas.br`,
        From : "nutrischedule@gmail.com",
        Subject : "Relatorio Registro Alimentar - Nutrischedule",
        Attachments : [
            {
                name : "registro_alimentar.pdf",
                data : base64pdf
            }
        ],
        Body : `<html>
                    <h3>Segue em anexo pdf do seu registro alimentar</h3>
                </html>`
    }).then(
        message => {
            console.log(message)
            if(message == "OK"){
                alert("Seu relatorio foi enviado para o email cadastrado com sucesso!")
            }
            else
                alert("Ocorreu um erro ao tentar enviar seu relatorio via email, tente novamente mais tarde!")
        }
    );
}

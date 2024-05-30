
window.jsPDF = window.jspdf.jsPDF;

async function GerarRelatorioEmPDF(){
    var doc = new jsPDF('p', 'mm', 'a4');
    var registros = await getAllRegistersFromUser()
    
    var colunas = [
        { title: "Data", dataKey: "data" },
        { title: "Café da Manhã", dataKey: "café da manhã" },
        { title: "Almoço", dataKey: "almoço" },
        { title: "Lanche", dataKey: "lanche" },
        { title: "Jantar", dataKey: "jantar" },
        { title: "Água Consumida", dataKey: "agua" }
    ];

    var dadosPorData = {};

    registros.forEach(registro => {
        var data = registro.dataRegistro;
        var nomeRefeicao = getRefeicaoName(registro.idRefeicao);

        if (!dadosPorData[data]) {
            dadosPorData[data] = {
                data: data,
                cafe: "",
                almoco: "",
                lanche: "",
                jantar: "",
                agua: ""
            };
        }

        if(nomeRefeicao.toLowerCase() == "agua")
            dadosPorData[data][nomeRefeicao.toLowerCase()] = registro.descricao*250 + "ml";
        else
            dadosPorData[data][nomeRefeicao.toLowerCase()] = registro.descricao;
    });

    var dados = Object.values(dadosPorData);

    doc.autoTable(colunas, dados);

    doc.save('relatorio-alimentar.pdf');

    var pdf = doc.output("datauristring")

    var base64pdf = pdf.split('base64,')[1]
    await enviarEmailPdfRelatorio(base64pdf)
}

async function enviarEmailPdfRelatorio(base64pdf){
    let dadosUsuario = obterDadosUsuarioLogadoSessao()

    Email.send({
        SecureToken : "dfbef122-8525-49bf-b1eb-1417137ad7cc",
        To : dadosUsuario.email,
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

function initLoginData() {
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
        personalizarPaginasComLogin();
    }
    else if(!paginasSomenteLogadas()){
        window.location.href = 'login.html';
    }
}

function personalizarPaginasComLogin(){
    if(window.location.href.includes("index")){
        montarDadosHeader("pages/", "index.html")
        retirarBotaoCadastro()
        prepararLogOff("index.html")
    }
    else{
        montarDadosHeader("", "../index.html")
        prepararLogOff("../index.html")
    }
}

function montarDadosHeader(rota, rotaSair){
    var dadosPessoaisNav = 
            `<li class="nav-item">` +
                `<a class="nav-link link-success" href="${rota}dados_pessoais.html">Dados Pessoais</a>` +
            `</li>`
    var emissaoRelatorio = 
            `<li class="nav-item">` +
                `<a class="nav-link link-success" href="#">Emitir Relatorio</a>` +
            `</li>`
    var sairNav = 
            `<li class="nav-item">` +
                `<a class="nav-link link-success" href="${rotaSair}" id="log_off_option">Sair</a>` +
            `</li>`

    var navBar = document.getElementsByClassName("navbar-nav");

    if(navBar.length != 0)
        navBar[0].innerHTML = 
            dadosPessoaisNav + 
            document.getElementsByClassName("navbar-nav")[0].innerHTML + 
            emissaoRelatorio +  
            sairNav;
}

function retirarBotaoCadastro(){
    document.getElementsByClassName("sign-up-button")[0].classList.add("d-none");
}

function paginasSomenteLogadas(){
    var paginaAtual = window.location.href
    if(paginaAtual.includes("registro") || paginaAtual.includes("dados_pessoais"))
        return false
    else
        return true
}

function prepararLogOff(rota){  
    document.getElementById('log_off_option').addEventListener('click', (e) => {
        if(confirm("Deseja realmente encerrar sua sessão?")){
            sessionStorage.removeItem('usuarioCorrente');
            window.location.href = `${rota}`;
        }
    })

}


function obterDadosUsuarioLogadoSessao(){
    return JSON.parse(sessionStorage.getItem('usuarioCorrente'));
}

initLoginData()
async function initDadosUsuario(){
    var usuarioSessao = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
    if(usuarioSessao == null){
        window.location.href = "../index.html"
    }

    var params = `id=${usuarioSessao.id}`

    var result = await getUser(params)

    document.getElementById("inputName").value = result[0].nome;
    document.getElementById("inputEmail").value = result[0].email;
    document.getElementById("inputWeight").value = parseFloat(result[0].peso);
    document.getElementById("inputHeight").value = parseFloat(result[0].altura);
    document.getElementById("inputBirthday").value = result[0].dataNascimento.split("T")[0];
}

function atualizarCadastro(){
    for (const iterator of document.querySelectorAll(".form-control")) {
        iterator.removeAttribute("readonly")
    }
    
    document.getElementById("atualizar-Cadastro").classList.add("d-none")
    document.getElementById("salvar-Cadastro").classList.remove("d-none")
    document.getElementById("alterar-Senha").classList.remove("d-none")
}

async function salvarAlteracoesCadastro(){
    await updateUser()

    bloquearAlteracaoInput()

    exibirDadosPessoais()
}

async function salvarAlteracaoSenha(){
    var result = await updateUserPassword();

    if(result != null && result.status == 200)
    {
        alert("Senha alterada com sucesso!")
        fecharAlteracaoSenha()
    }
    else{
        alert("Dados informados estão incorretos!");
        zerarAlteracaoSenha()
    }
}

function fecharAlteracaoSenha(){   
    bloquearAlteracaoInput()
    zerarAlteracaoSenha()
    esconderAlteracaoSenha()
    exibirDadosPessoais()
}

//funções auxiliares
function bloquearAlteracaoInput(){
    for (const iterator of document.querySelectorAll(".form-control")) {
        iterator.setAttribute("readonly", "") 
    }
}

function exibirDadosPessoais(){
    document.getElementById("atualizar-Cadastro").classList.remove("d-none")
    document.getElementById("salvar-Cadastro").classList.add("d-none")
    document.getElementById("alterar-Senha").classList.add("d-none")
}

function exibirAlteracaoSenha(){
    document.getElementById("dados-pessoais-section").classList.add("d-none")
    document.getElementById("alterar-senha-section").classList.remove("d-none")
}

function esconderAlteracaoSenha(){
    document.getElementById("dados-pessoais-section").classList.remove("d-none")
    document.getElementById("alterar-senha-section").classList.add("d-none")
}

function zerarAlteracaoSenha(){
    document.getElementById("inputSenhaAtual").value = null;
    document.getElementById("inputNovaSenha").value = null;
    document.getElementById("inputConfirmacaoNovaSenha").value = null;
}

initDadosUsuario()
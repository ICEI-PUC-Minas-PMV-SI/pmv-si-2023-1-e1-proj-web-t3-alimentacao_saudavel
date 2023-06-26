// URL DA API DE DADOS DE USUARIOS
URL = urlBase + "usuarios"
//=================================================================================================

// GET - PROCEDIMENTO PARA OBTER UM USUARIO

async function getUser(params){
    var response = await fetch(`${URL}?${params}`);
    return await response.json();
}

//=================================================================================================

// DELETE/PUT - PROCEDIMENTO PARA EXCLUIR UM USUARIO

async function deleteUser(){

    event.preventDefault();

    var id = document.getElementById('userId').value
    var usuario = JSON.stringify({
        status : false
    })

    await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: usuario
    })
    .then(res => res.json())
    .then(() => location.reload());

    window.location.href = '../index.html';

}
//=================================================================================================

// CREATE - PROCEDIMENTO PARA CRIAR USUARIO

async function registerUser(){
    //obtem dados informados
    var dadosUsuario = JSON.stringify({
        id : generateUUID(),
        nome : document.getElementById('inputName').value,
        dataNascimento : new Date(document.getElementById('inputBirthday').value),
        peso : parseFloat(document.getElementById('inputWeight').value),
        altura : parseFloat(document.getElementById('inputHeight').value),
        idGenero : defineIdGender(),
        email : document.getElementById('inputEmail').value,
        senha : document.getElementById('inputNewPassword').value,
        status : true,
    })
   
    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dadosUsuario
    })
    .then(res => res.json())
    .then(() => location.reload());      

    console.log(dadosUsuario)

    window.location.href = '../index.html';
}
//=================================================================================================

// UPDATE - PROCEDIMENTO PARA ATUALIZAR DADOS DO USUARIO

async function updateUser(){
    event.preventDefault();

    var dadosUsuario = getUserSession();
    
    if(dadosUsuario.length == 1){
        dadosUsuario[0].nome = document.getElementById('inputName').value,
        dadosUsuario[0].dataNascimento = new Date(document.getElementById('inputBirthday').value),
        dadosUsuario[0].peso = parseFloat(document.getElementById('inputWeight').value),
        dadosUsuario[0].altura = parseFloat(document.getElementById('inputHeight').value),
        dadosUsuario[0].email = document.getElementById('inputEmail').value
    };  
    
    console.log(dadosUsuario[0]);

    await fetch(`${URL}/${dadosUsuario[0].id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosUsuario[0])
    });   

    alert("Seus dados foram atualizados com sucesso!");

}
//=================================================================================================

// UPDATE - PROCEDIMENTO PARA ATUALIZAR SENHA DO USUARIO

async function updateUserPassword(){
    var dadosUsuario = await getUserSession();
    var senhaAtualInformada = document.getElementById('inputSenhaAtual').value;
    var novasenha = document.getElementById('inputNovaSenha').value;
    var confirmacaoNovaSenha = document.getElementById('inputConfirmacaoNovaSenha').value;
    
    if(senhaAtualInformada == dadosUsuario[0].senha && novasenha == confirmacaoNovaSenha){
        dadosUsuario[0].senha = novasenha;
        var result = await fetch(`${URL}/${dadosUsuario[0].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosUsuario[0])
        });   

        
        if(result.status == 200)
        {
            window.location.href = "dados_pessoais.html"
            alert("Senha alterada com sucesso")
        }
    }
    else{
        confirm("Dados informados estão incorretos");
    }
}
//=================================================================================================

async function getUserSession(){
    var usuarioCorrente = sessionStorage.getItem('usuarioCorrente');
    var usuarioCorrenteJSON = JSON.parse(usuarioCorrente);
    var params = `id=${usuarioCorrenteJSON.id}`;

     return await getUser(params);
}
function defineIdGender(){
    if(document.querySelector('input[name="genderRadio"]:checked').value == "homem")
        return 1
    else
        return 0    
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function validateUserRegister(){
    event.preventDefault();

    if(document.getElementById('inputNewPassword').value == document.getElementById('inputConfirmPassword').value){
        registerUser()
    }
    else{
        alert ('As senhas informadas não são compativeis, favor inseri-las novamente!');
        document.getElementById('inputNewPassword').value = "";
        document.getElementById('inputConfirmPassword').value = "";
    }
}

async function loginUser(){
    event.preventDefault();
    var resultadoLogin = false;
    var usuarioCorrente ={};

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var dados = {
        email : document.getElementById('inputEmail').value,
        senha : document.getElementById('inputPassword').value
    };

    var params = `email=${dados.email}&senha=${dados.senha}`

    var result = await getUser(params)

    console.log(result)

    if(result.length == 1){
        usuarioCorrente.id = result[0].id;
        usuarioCorrente.email = result[0].email;
        usuarioCorrente.nome = result[0].nome;
        sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
        resultadoLogin = true;
    };

    if(resultadoLogin){
        window.location.href = '../index.html';
    }
    else{
        alert ('Usuário ou senha incorretos');
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputPassword').value = "";
    }
}


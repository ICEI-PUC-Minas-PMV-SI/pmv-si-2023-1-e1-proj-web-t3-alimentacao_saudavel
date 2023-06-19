async function initDadosUsuario(){
    var usuarioSessao = JSON.parse(sessionStorage.getItem('usuarioCorrente'));

    var params = `id=${usuarioSessao.id}`

    var result = await getUser(params)

    document.getElementById("inputName").value = result[0].nome;
    document.getElementById("inputEmail").value = result[0].email;
    document.getElementById("inputWeight").value = result[0].peso + " Kg";
    document.getElementById("inputHeight").value = result[0].altura + " M";
    document.getElementById("inputBirthday").value = result[0].dataNascimento.split("T")[0];
}

initDadosUsuario()
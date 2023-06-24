// PARA GUARDAR OS DADOS COLOCADOS NO FORMULARIO

var dadosIMC = JSON.stringify({
    genero : document.getElementById('imc-genero').value,
    peso : document.getElementById('imc-peso').value,
    altura :document.getElementById('imc-altura').value
});

// =======================================================================================


// PARA EMITIR O RESULTADO DO IMC
var IMC = peso / (altura * altura);
document.getElementById("show-imc").addEventListener("click", function(){
           if(IMC < 20)
    		{
    			alert('Você esta abaixo do peso!');
    		} 
    		else if(IMC >20 && IMC <= 25)
    		{
    			alert("Peso Ideal");
    		}
    		else if(IMC >25 && IMC <= 30)
    		{
    			alert("Sobrepeso");
    		} 
    		else if(IMC >30 && IMC <= 35)
    		{
    			alert("Obesidade Moderada");
    		}
    		else if(IMC >35 && IMC <= 40)
    		{
    			alert("Obesidade Severa");
    		}
    		else if(IMC >40 && IMC <= 50)
    		{
    			alert("Obesidade Morbida");
    		}
    		else
    		{
    			alert('Tente novamente');
    		}
});
// =======================================================================================

// PARA CONCLUIR O CALCULO IMC DE UM USUÁRIO CADASTRADO
var resultcad = (`${i} X ${nun} = ${i*nun}`);

function dadosIMC (){
    if (dadosUsuario == dadosUsuario){
        alert('Olá ' + nome + ', é um prazer te ver!');
       resultcad = dadosUsuario[0].peso / (dadosUsuario[0].altura*dadosUsuario[0].altura);
    }
    else{
        alert('Faça seu cadastro se não ainda não tem');
    }
}


// =======================================================================================



document.getElementById("show-imc").addEventListener('click', function(event){
	event.preventDefault();

	var myImc = document.getElementById('imc-resultado');
	if (myImc.style.display == "none"){
		myImc.style.display = "block";
	} else {
		myImc.style.display = "none";
	}

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc =  (peso / (altura * altura)).toFixed(2);


	if (imc < 18.5){
		descripition =`IMC : ${imc} - Você está abaixo do seu peso ideal.`;
	} else if (imc >= 18.5 && imc <= 25){
		descripition =`IMC : ${imc} - Você está em seu peso ideal.`;
	} else if(imc > 25  && imc <= 30){
		descripition = `IMC : ${imc} - Cuidado! Você está com sobrepeso.`;
	} else if(imc > 30  && imc <= 35){
		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade moderada.`;
	} else if(imc > 35  && imc <= 40){
		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade severa.`;
	} else {
		descripition = `IMC : ${imc} - Cuidado! Você está com obesidade morbida.`;
	}

    value.textContent = imcreplace('.',',');
	document.getElementById('description').textContent = descripition;
});



function dadosIMC (){
    if (dadosUsuario == dadosUsuario){
        alert('Olá ' + nome + ', é um prazer te ver!');
       resultcad = dadosUsuario[0].peso / (dadosUsuario[0].altura*dadosUsuario[0].altura);
    }
    else{
        alert('Faça seu cadastro se não ainda não tem');
    }
}


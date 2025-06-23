
// Abaixo de 17 Muito abaixo do peso
// Entre 17, 18 Abaixo do peso
// Entre 18,5 e 24,99 Peso normal
// Entre 25 e 29,99 Acima do peso

// peso/ (altura * altura)
//toFixed = usado para pegar duas casas depois do número

//document.getElementById('peso') busca o campo com id="peso".
//.value pega o valor digitado pelo usuário.
//parseFloat() converte esse valor de string para número com casas decimais.

//isNaN() verifica se o valor não é um número.
//Se peso ou altura forem (vazio, texto, zero ou negativo), aparece uma mensagem de erro e a função é interrompida com return false

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault(); //Inpede o recarregamento da página

    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);
    resultado = document.getElementById('resultado');



    imc = peso / (altura * altura);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, preencha os dados corretamente!";
        return false;
    }


    console.log(imc);

    if(imc < 17){
        resultado.innerHTML= "<br> Seu reslutado foi:" + imc.toFixed(2) + " (Muito abaixo do peso)";
    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML= "<br> Seu reslutado foi:" + imc.toFixed(2) + " (Abaixo do peso)";
    }else if(imc > 18.5 && imc <= 24.99){
        resultado.innerHTML= "<br> Seu reslutado foi:" + imc.toFixed(2) + " (Peso normal)";
    }else if(imc > 25 && imc <= 29.99){
       resultado.innerHTML= "<br> Seu reslutado foi:" + imc.toFixed(2) + " (Acima do peso)";
    }else if(imc > 30){
        resultado.innerHTML= "<br> Seu reslutado foi:" + imc.toFixed(2) + " (Cuidado! Obesidade!)";
    }


    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    
} 
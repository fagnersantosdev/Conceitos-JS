let idade = 25;

if (idade <12){
    console.log('Criança')
} else if (idade > 12 && idade < 17){
    console.log('Adolecente')
} else if (idade > 18 && idade < 60){
    console.log('Adulto')
} else {
    console.log('Idoso')
}

let numero = 10;
// Se o resto da divisão por 2 for 0, é par. Caso contrário, é ímpar.
if (numero % 2 === 0) {
  console.log(numero + " é par.");
} else {
  console.log(numero + " é ímpar.");
}

let hoje = 2;

switch (hoje) {
    case 1: 
        console.log('Hoje é Domingo');
    break;
    case 2:
        console.log('Hoje é Segunda')
    break;
    case 3:
        console.log('Hoje é Terça')
    break;
    case 4: 
        console.log('Hoje é Quarta')
    break;
    case 5: 
        console.log('Hoje é Quinta')
    break;
    case 6: 
        console.log('Hoje é Sexta')
    break;
    default:
        console.log('Hoje é Sabado')
    
}

for (let i=1; i<=20; i++) {
    console.log('contagem: ' + i);
}

let soma = 0
let contador = 1;

while (contador <= 15) {
    soma += contador;
    contador++;
} console.log("Soma de 1 a 10: " + soma);

//tabuada do número 7
let num = 7;

console.log('Tabuada do ' + num + ':');
for(let i =1; i<=10; i++){
    console.log(num + ' x ' + i + ' = ' + (num * i));
}

let somaPares = 0;
let n = 1;
while(n<=20){
    if(n % 2 === 0){
        somaPares += n;
    }
    n++;
}
console.log('Soma dos pares de 1 a 20: ' + somaPares);

// Tente adivinhar o número secreto de 1 a 10
let numeroSecreto = 4;
let palpite = 6; // altere esse valor para testar

if (palpite === numeroSecreto) {
  console.log("Parabéns, você acertou!");
} else if (palpite < numeroSecreto) {
  console.log("O número secreto é maior que " + palpite);
} else {
  console.log("O número secreto é menor que " + palpite);
}
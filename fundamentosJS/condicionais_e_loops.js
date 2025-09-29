
let idade = 20;

// IF e ELSE (executar um bloco de código apenas se uma condição for verdadeira.)
if (idade > 18){
    console.log('Você é maior de idade.')
} else {
    console.log('Você não é maios de idade.')
}

// IF, ELSE IF e ELSE

let nota = 7;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 6) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}

// SWITCH (Quando temos muitas comparações, o switch pode deixar o código mais organizado.)

let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("Pare!");
    break;
  case "amarelo":
    console.log("Atenção!");
    break;
  case "verde":
    console.log("Siga!");
    break;
  default:
    console.log("Cor inválida.");
}

// LOOPS (laços de repetição)

// FOR (Repete algo um número determinado de vezes.)
for (let i = 1; i <= 5; i++) {
  console.log("Contagem: " + i);
}

//WHILE (Repete enquanto a condição for verdadeira.)
let contador = 1;
while (contador <= 5) {
  console.log("Número: " + contador);
  contador++;
}

// DO WHILE (Executa pelo menos uma vez, mesmo que a condição seja falsa.)

let num = 0;
do {
  console.log("Valor: " + num);
  num++;
} while (num < 3);


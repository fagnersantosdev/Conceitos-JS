//Um array é uma estrutura de dados para armazenar vários valores em uma única variável.

let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]); 
console.log(frutas[1]); 
console.log(frutas.length); //tamanho do array

// .push() → adiciona no final
// .pop() → remove do final
// .unshift() → adiciona no início
// .shift() → remove do início
// .includes() → verifica se contém
// .indexOf() → retorna posição
// .splice() → remove ou substitui elementos
// .map(), .filter(), .reduce()

let numeros = [1, 2, 3];
numeros.push(4); // [1, 2, 3, 4]
numeros.pop();   // [1, 2, 3]

//função é um bloco de código reutilizável.

function saudacao(nome) {
  return "Olá, " + nome;
}
console.log(saudacao("Fagner")); // Olá, Fagner

//arrow function
const soma = (a, b) => a + b;
console.log(soma(5, 3)); // 8


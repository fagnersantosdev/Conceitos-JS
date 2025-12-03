const nome = 'Fagner';
const idade = 25;
const cidade = 'Barra Mansa';

let produto = 'Luminária';
let preco = 20;
let quantidade = 3;

let estaChuvendo = true;

let a = 10;
let b = 20;

let senha = '1234';

let temCarteira = true;
let temCarro = true;
let podeDirigir = temCarteira && temCarro;
// && retorna true quando as duas condições são verdadeiras.
let podeUsarUber = temCarteira || temCarro;
// || retorna true quando pelo menos uma condição for verdadeira.

let nota1 = 10;
let nota2 = 8;
let nota3 = 5;
let media = (nota1 + nota2 + nota3) / 3;

let anoAtual = 2025;
let anoNascimento = 1998;
let idadeAtual = anoAtual - anoNascimento;


console.log('Meu nome é ' + nome + ', tenho ' + idade + ' de idade e moro em ' + cidade);

console.log('Soma: ' + a + b);
console.log('Subtração: ' + (b - a));
console.log('Divisão: ' + a / b);
console.log('Multiplicação: ' + a * b);

console.log('É maior de idade? ' + (idade >= 18));

console.log('Total: ' + preco * quantidade);

console.log(senha == '4321');
console.log(senha === '4321');

console.log('Pode dirigir? ' + podeDirigir);
console.log('Pode andar de Uber? ' + podeUsarUber);

console.log('A média do aluno é: ' + media.toFixed(2));
// .toFixed(2) -> mostra com 2 casas decimais

console.log('A pessoa tem a idade de ' + idadeAtual + 'anos.')







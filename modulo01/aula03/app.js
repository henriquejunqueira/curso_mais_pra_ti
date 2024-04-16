// Exercício 1: Par ou impar
// const prompt = require('prompt-sync')();
// let numero = prompt("Digite um número: ");

// if(numero % 2 === 0){
//     console.log("Par");
// }else{
//     console.log("Ímpar");
// }

// Exercício 2: Maior de dois números
// const prompt = require('prompt-sync')();
// let numero1 = +prompt("Insira o primeiro número: ");
// let numero2 = +prompt("Insira o segundo número: ");

// if(numero1 > numero2){
//     console.log("O primeiro número é maior.");
// }else if(numero2 > numero1){
//     console.log("O segundo número é maior.");
// }else{
//     console.log("Os números são iguais");
// }

// Exercício 3: Triângulo
// const prompt = require('prompt-sync')();
// let lado1 = +prompt('Insira o comprimento do primeiro lado: ');
// let lado2 = +prompt('Insira o comprimento do segundo lado: ');
// let lado3 = +prompt('Insira o comprimento do terceiro lado: ');

// if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//     console.log("É possível formar um triângulo com essas medidas.");
// }else{
//     console.log("Não é possível formar um triângulo");
// }

// Exercício 4: Calculadora Simples
// const prompt = require('prompt-sync')();

// let num1 = +prompt("Insira o primeiro número: ");
// let num2 = +prompt("Insira o segundo número: ");
// let operacao = prompt("Insira a operação desejada (+, -, /, *): ");
// let resultado;

// if(operacao === '+'){
//     resultado = num1 + num2;
// }else if(operacao === '-'){
//     resultado = num1 - num2;
// }else if(operacao === '*'){
//     resultado = num1 * num2;
// } else if(operacao === '/'){
//     if(num2 !== 0){
//         resultado = num1 / num2;
//     }else{
//         console.log("Erro: divisão por zero.");
//         resultado = undefined;
//     }
// }else{
//     console.log("Operação inválida");
// }

// if(resultado !== undefined){
//     console.log("Resultado: ", resultado);
// }

// Switch-Case
// const prompt = require('prompt-sync')();

// let dia = +prompt("Insira um número do dia da semana: ");

// let nomeDia;

// switch(dia){
//     case 1:
//         nomeDia = "Domingo";
//         break;
//     case 2:
//         nomeDia = "Segunda-Feira";
//         break;
//     case 3:
//         nomeDia = "Terça-Feira";
//         break;
//     case 4:
//         nomeDia = "Quarta-Feira";
//         break;
//     case 5:
//         nomeDia = "Quinta-Feira";
//         break;
//     case 6:
//         nomeDia = "Sexta-Feira";
//         break;
//     case 7:
//         nomeDia = "Sábado";
//         break;
//     default:
//         nomeDia = "Digite um número de 1 a 7"
//         break;
// }

// console.log("O dia é: ", nomeDia);

// Exercício 5: Calculadora Simples com switch
// const prompt = require('prompt-sync')();

// let valor1 = +prompt("Digite o primeiro número: ");
// let valor2 = +prompt("Digite o segundo número: ");
// let opcao = prompt("Digite o operador (+, -, *, /): ");
// let total;

// switch(opcao){
//     case '+':
//         total = valor1 + valor2;
//         break;
//     case '-':
//         total = valor1 - valor2;
//         break;
//     case '-':
//         total = valor1 - valor2;
//         break;
//     case '*':
//         total = valor1 * valor2;
//         break;
//     case '/':
//         if(valor2 !== 0){
//             total = valor1 / valor2;
//         }else{
//             console.log("Erro: divisão por zero.");
//             total = undefined;
//         }

//         break;
//     default:
//         console.log("Operação inválida");
// }

// if(total !== undefined){
//     console.log("Resultado: ", total);
// }

// Estrutura de repetição For
// let contador = 0;
// let multiplicando = 5;
// for(contador = 0; contador <= 10; contador++){
//     console.log(`${multiplicando} * ${contador} = ${multiplicando * contador}`);
// }

// for(let contador = 0; contador <= 10; contador++){
//     console.log(`${contador}`);
// }

// for(let i = 0; i <= 100; i += 2){
//     console.log(i);
// }

// let soma = 0;
// for(let i = 0; i <= 10; i++){
//     soma += i;
// }

// console.log(soma);

// Exercício 06: números decrescentes com for
// for(let i = 10; i >= 0; i--){
//     console.log(i);
// }

// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }

// Exercício 07: Imprimir os múltiplos de 5 menores que 100
// let i = 5;

// while(i < 100){
//     console.log(i);
//     i+=5;
// }

// Exercício 08: Calcular a soma dos número de 1 a 1000
// let soma = 0;
// let i = 0;

// while(i <= 1000){
//     soma += i;
//     i++;
// }

// console.log(soma);

// Estrutura de repetição do-while
// const prompt = require('prompt-sync')();

// let senha;

// do{
//     senha = prompt('Digite a senha: ');
// }while(senha !== '1234');

// console.log('Senha correta!');

// Pedir ao usuário para adivinhas um número entre 1 e 10
const prompt = require('prompt-sync')();

const numeroCorreto = Math.floor((Math.random() * 10) + 1);
// console.log(numeroCorreto);
let tentativa;

do{
    tentativa = parseInt(prompt('Advinhe o número entre 1 e 10: '));
    if(tentativa < numeroCorreto){
        console.log("Tente um número maior");
    }else if(tentativa > numeroCorreto){
        console.log("Tente um número menor");
    }
}while(tentativa !== numeroCorreto);

console.log("Parabéns! Você acertou!");
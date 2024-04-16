//======================================= Exercício 01 ============================================

// const prompt = require('prompt-sync')();

// let celsius = parseFloat(prompt('Digite a temperatura em Celsius: °'));
// let fahrenheit = celsius * 1.8 + 32;

// console.log(`${fahrenheit} (temperatura em Fahrenheit)`);

//======================================= Exercício 02 ============================================

// const prompt = require('prompt-sync')();

// let numeroEleitores = parseInt(prompt('Digite o número de eleitores do município: '));
// let numeroVotosBrancos = parseInt(prompt('Digite o número de votos brancos: '));
// let numeroVotosNulos = parseInt(prompt('Digite o número de votos nulos: '));
// let numeroVotosValidos = parseInt(prompt('Digite o número de votos válidos: '));

// let percentualVotosBrancos = numeroVotosBrancos / numeroEleitores * 100;
// let percentualVotosNulos = numeroVotosNulos / numeroEleitores * 100;
// let percentualVotosValidos = numeroVotosValidos / numeroEleitores * 100;

// console.log();
// console.log(`${percentualVotosBrancos} (percentual de votos brancos)`);
// console.log(`${percentualVotosNulos} (percentual de votos nulos)`);
// console.log(`${percentualVotosValidos} (percentual de votos válidos)`);

//======================================= Exercício 03 ============================================

// const prompt = require('prompt-sync')();

// let valor1 = parseInt(prompt('Digite o primeiro número: '));
// let valor2 = parseInt(prompt('Digite o segundo número: '));
// let valor3 = parseInt(prompt('Digite o terceiro número: '));
// let valor4 = parseInt(prompt('Digite o quarto número: '));

// let somaPrimeiroValor = valor1 + 25;
// let triplicaSegundoValor = valor2 * 3;
// let modificaTerceiroValor = valor3 * 0.12;
// valor4 = valor1 + valor2 + valor3 + valor4;

// console.log();
// console.log(`Soma primeiro valor: ${valor1} + 25 = ${somaPrimeiroValor}`);
// console.log(`Segundo valor triplicado: ${valor2} * 3 = ${triplicaSegundoValor}`);
// console.log(`Terceiro valor modificado: ${valor3} * 0.12 = ${modificaTerceiroValor.toFixed(2)}`);
// console.log(`Soma dos valores originais: ${valor1} + ${valor2} + ${valor3} = ${valor4}`);

//======================================= Exercício 04 ============================================

// const prompt = require('prompt-sync')();

// let nota1 = parseFloat(prompt('Digite a primeira nota: '));
// let nota2 = parseFloat(prompt('Digite a segunda nota: '));

// let media = (nota1 + nota2) / 2;

// if(media >= 6.0){
//     console.log('PARABÉNS! Você foi aprovado');
// }

//======================================= Exercício 05 ============================================

// const prompt = require('prompt-sync')();

// let nota1 = parseFloat(prompt('Digite a primeira nota: '));
// let nota2 = parseFloat(prompt('Digite a segunda nota: '));

// let media = (nota1 + nota2) / 2;
// if(media >= 6.0){
//     console.log('PARABÉNS! Você foi aprovado');
// }else{
//     console.log('Você foi REPROVADO! Estude mais');
// }

//======================================= Exercício 06 ============================================

// const prompt = require('prompt-sync')();

// let a = parseInt(prompt('Digite o valor do primeiro lado: '));
// let b = parseInt(prompt('Digite o valor do segundo lado: '));
// let c = parseInt(prompt('Digite o valor do terceiro lado: '));

// console.log();

// if(a+b > c && a+c > b && b+c > a){

//     if((a === b) && (a === c) && (b === c)){
//         console.log('É um triângulo e é do tipo equilátero');
//     }else if((a != b) && (a != c) && (b != c)){
//         console.log('É um triângulo e é do tipo escaleno');
//     }else if((a === b) || (a === c) || (b === c)){
//         console.log('É um triângulo e é do tipo isósceles');
//     }
// }else{
//     console.log('Isso não é um triângulo');
// }

//======================================= Exercício 07 ============================================

// const prompt = require('prompt-sync')();

// let macasCompradas = parseInt(prompt('Digite quantas maçãs foram compradas: '));
// let precoAbaixoDeDoze = 0.30;
// let precoDozeOuMais = 0.25;
// let valorTotalCompra;

// if(macasCompradas < 12){
//     valorTotalCompra = macasCompradas * precoAbaixoDeDoze;
//     console.log(`Valor total à pagar R$ ${valorTotalCompra.toFixed(2)}`);
// }else{
//     valorTotalCompra = macasCompradas * precoDozeOuMais;
//     console.log(`Valor total à pagar R$ ${valorTotalCompra.toFixed(2)}`);
// }

//======================================= Exercício 08 ============================================

// const prompt = require('prompt-sync')();

// let valor1 = parseInt(prompt('Digite o primeiro valor: '));
// let valor2 = parseInt(prompt('Digite o segundo valor: '));

// do{
//     valor1 = parseInt(prompt('Digite o primeiro valor: '));
//     valor2 = parseInt(prompt('Digite o segundo valor: '));
// }while(valor1 === valor2);

// if(valor1 < valor2){
//     console.log(valor1, valor2);
// }else{
//     console.log(valor2, valor1);
// }

//======================================= Exercício 09 ============================================

// const prompt = require('prompt-sync')();

// let codigoOrigemProduto = parseInt(prompt('Digite o código de origem do produto: '));

// if(codigoOrigemProduto === 1){
//     console.log('Sul');
// }else if(codigoOrigemProduto === 2){
//     console.log('Norte');
// }else if(codigoOrigemProduto === 3){
//     console.log('Leste');
// }else if(codigoOrigemProduto === 4){
//     console.log('Oeste');
// }else if(codigoOrigemProduto === 5 || codigoOrigemProduto === 6){
//     console.log('Nordeste');
// }else if(codigoOrigemProduto >= 7 && codigoOrigemProduto <= 9){
//     console.log('Sudeste');
// }else if(codigoOrigemProduto >= 10 && codigoOrigemProduto <= 20){
//     console.log('Centro-Oeste');
// }else if(codigoOrigemProduto >= 25 && codigoOrigemProduto <= 50){
//     console.log('Nordeste');
// }else{
//     console.log('Fora dos Intervalos - Produto Importado');
// }

//======================================= Exercício 10 ============================================

// const prompt = require('prompt-sync')();

// let numero = parseInt(prompt('Digite um número: '));

// for(let i = 1; i <= 10; i++){
//     console.log(numero);
// }

//======================================= Exercício 11 ============================================

// const prompt = require('prompt-sync')();

// let numero;

// do{
//     numero = parseInt(prompt('Digite um número: '));
//     if(numero % 2 == 0){
//         console.log(`${numero} é par`);
//     }else if(numero % 2 == 1){
//         console.log(`${numero} é ímpar`);
//     }

// }while(numero === null || numero >= 0);

//======================================= Exercício 12 ============================================

// const prompt = require('prompt-sync')();

// for(let i = 1000; i <= 1999; i++){
//     if(i % 11 === 5){
//         console.log(i);
//     }
// }

//======================================= Exercício 13 ============================================

// const prompt = require('prompt-sync')();

// let n;

// for(let i = 1; i <= 5; i++){
//     n = parseInt(prompt('Digite um valor: '));
//     for(let j = 1; j <= n; j++){
//         console.log(`${j} x ${n} = ${j * n}`);
//     }
// }

//======================================= Exercício 14 ============================================

// const prompt = require('prompt-sync')();

// let numero;
// let soma = 0;
// let i = 0;


// while(numero !== 0){
//     numero = parseFloat(prompt('Digite um número ou 0 para sair: '));

//     if(numero != 0){
//         soma += numero;
//         i++;
//     }
// }

// let media = soma / i;

// console.log(media.toFixed(2));

//======================================= Exercício 15 ============================================

// const prompt = require('prompt-sync')();

// let numero;
// let peso;
// let soma = 0;
// let somaPesos = 0;

// while(numero !== 0){
//     numero = parseFloat(prompt('Digite um número: '));
//     peso = parseFloat(prompt('Digite o peso do número: '));

//     if(numero != 0){
//         soma += numero * peso;
//         somaPesos += peso;
//     }
// }

// let media = soma / somaPesos;

// console.log(media);


//======================================= Exercício 16 ============================================

// const prompt = require('prompt-sync')();

// let inicio = 101;
// let numeroPrimo = 0;

// while(numeroPrimo < 50){
//     let divisor = 3;

//     while(divisor * divisor <= inicio){
//         if(inicio % divisor === 0){
//             break;
//         }
//         divisor += 2;
//     }

//     let condicaoIfResumida = divisor * divisor > inicio || inicio === 2;

//     if(condicaoIfResumida){
//         console.log(inicio);
//         numeroPrimo++;
//     }

//     inicio += 2;
// }
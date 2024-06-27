// Arrays (Vetores)

// let listaCompras = Array();

// listaCompras[0] = 'Shampoo';
// listaCompras[1] = 'Condicionador';
// listaCompras['x'] = 100;

// console.log(listaCompras);

// let listaFrutas = ['Banana', 'Morango'];

// console.log(listaFrutas);

// let listaViagem = Array('Passagens', 'Malas');

// console.log(listaViagem);

// Arrays Multidimensionais
// let listaCoisas = Array();

// listaCoisas['Frutas'] = Array();
// listaCoisas['Frutas'][0] = 'Morango';
// listaCoisas['Frutas'][1] = 'Uva';
// listaCoisas['Frutas'][2] = 'Laranja';
// listaCoisas['Frutas'][3] = 'Bergamota';

// listaCoisas['Viagem'] = Array();
// listaCoisas['Viagem'][0] = 'Passagens';
// listaCoisas['Viagem'][1] = 'Malas';

// console.log(listaCoisas);

/*let coisas = ['numeros', 'letras']; // Criando o array coisas
coisas['numeros'] = [1, 2, 3, 4]; // Colocando números na posição 'numeros'
coisas['letras'] = ['a', 'b', 'c', 'd']; // Colocando letras na posição 'letras'

console.log(coisas['numeros']);
console.log(coisas['letras']); */

// Inserção de elementos no final do array
// listaCoisas['Frutas'].push('Banana');
// console.log(listaCoisas);

// Inserção de elementos no começo do array
// listaCoisas['Frutas'].unshift('Limão');

// Exclusão de elementos no final do array
// listaCoisas['Frutas'].pop();

// Exclusão de elementos no começo do array
// listaCoisas['Frutas'].shift();

// console.log(listaCoisas);

// 
// let listaProdutos = Array('Computador', 'Caneta', 'Chuteira');
// let aux = listaProdutos.indexOf('Computador');

// console.log(aux);

// if(aux === -1){
//     console.log('Elemento não existe no array');
// }else{
//     console.log('Elemento existe e está na posição ' + aux);
// }

// let listaProdutos = Array('Lousa', 'Caneta', 'Chuteira', 'Garrafa de água');

// Ordena o array em ordem crescente
// console.log(listaProdutos.sort());

// let listaProdutos = Array(1, 10, 2);
// let listaProdutos = [1, 10, 2];

// console.log(listaProdutos.sort());

// Funções
// function calcularAreaTerreno(largura, comprimento){
//     let area = largura * comprimento; // escopo de função
    
//     return area;
// }

// area não é acessível aqui

// let prompt = require('prompt-sync')();

// let largura = prompt('Digite a largura do terreno em metros: ');
// let comprimento = prompt('Digite o comprimento do terreno em metros: ');

// Chamada da função e passagem de parâmetros
// let resultado = calcularAreaTerreno(largura, comprimento);

// console.log(`O terreno possui ${resultado} metros quadrados`);


// Exemplo função
//Global - permite que a variavel seja acessada em qualquer parte do codigo

// let prompt = require('prompt-sync')();

// let variavelGlobal;
// let x = 5;
// let y = -2;
//Função - apenas dentro da função.
// function variavelF (var1, var2){
//     let variavelFuncao = var1 + var2 //Função
//     return variavelFuncao;
// }

// variavelGlobal = variavelF(x,y); //Global
//Bloco - variaveis dentro de blocos como if, for, while...
// if (variavelGlobal > 0){
//     let maior = true //Bloco
//     if (maior){
//         console.log('OK')
//     }
// }

// Função Anônima
// let exibirFuncao = function(){
//     console.log('Olá');
// }

// exibirFuncao();

// Função callback
// let callbackSucesso = function(titulo, descricao){
//     console.log(titulo);
//     console.log(descricao);
// }

// let callbackErro = function(erro){
//     console.log(erro);
// }

// function exibirArtigo(callbackSucesso, callbackErro){
//     if(true){
//         callbackSucesso('Funções de callback em caso de sucesso');
//     }else{
//         callbackErro('Função de callback em caso de erro');
//     }
// }

// exibirArtigo(callbackSucesso, callbackErro);

// Exemplo função callback
// let prompt = require('prompt-sync')();
// function greeting(name) {
//     console.log("Olá " + name);
// }
  
// function processUserInput(callback) {
//     var name = prompt("Por favor insira seu nome.");
//     callback(name);
// }
  
// processUserInput(greeting);

// Exemplo 2 callback
// let soma = function(num1, num2){
//     console.log(num1 + num2);
// }

// let subtracao = function(num1, num2){
//     console.log(num1 - num2);
// }

// function calculo(soma, subtracao){
//     if(false){
//         soma(2, 2);
//     }else{
//         subtracao(6, 4);
//     }
// }

// calculo(soma, subtracao);

// Exemplo calculadora com callback
// let soma = function soma(num1, num2){
//     return num1 + num2;
// }

// let subtracao = function subtracao(num1, num2){
//     return num1 - num2;
// }

// let multiplicacao = function soma(num1, num2){
//     return num1 * num2;
// }

// let divisao = function subtracao(num1, num2){
//     return num1 / num2;
// }

// function calculadora(operacao, num1, num2, soma, subtracao, multiplicacao, divisao){
//     switch(operacao){
//         case 'soma':
//             return soma(num1, num2);
//             break;
//         case 'subtracao':
//             return subtracao(num1, num2);
//             break;
//         case 'multiplicacao':
//             return multiplicacao(num1, num2);
//             break;
//         case 'divisao':
//             return divisao(num1, num2);
//             break;
//     }
// }

// console.log(calculadora('soma', 10, 10, soma));

let teste = () => {
    console.log('Teste');
}
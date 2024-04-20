// * Exercitando arrays e funções

// ? Exercício 1: Somar todos os elementos de um array
// let elementos = [1, 2, 3, 4];
// let array = [10, 20, 150, 200];

// function somarElementos(vetor){
//     let soma = 0;
//     for(let i = 0; i < vetor.length; i++){
//         soma += vetor[i];
//     }

//     return soma;
// }

// console.log(`A soma dos elementos é: ${somarElementos(elementos)}`);
// console.log(`A soma dos elementos é: ${somarElementos(array)}`);

// ? Execício 2: Encontrar o maior número em um Array
// let numeros = [1, 5, 6, 8, 4, 10, 50, 48];

// function maiorElemento(vetor){
//     let valor = 0;

//     for(let i = 0; i < vetor.length; i++){
//         if(vetor[i] > valor){
//             valor = vetor[i];
//         }
//     }

//     return valor;
// }

// console.log(`Maior valor é ${maiorElemento(numeros)}`);

// ! Solução do professor
// function maiorNumero(vetor){
//     let maior = vetor[0];
//     for(let i = 1; i < vetor.length; i++){
//         if(vetor[i] > maior){
//             maior = vetor[i];
//         }
//     }

//     return maior;
// }

// console.log(`Dentre os elementos o maior é: ${maiorNumero([1, 10, 100, 70])}`);

// ? Exercício 3: Reverter um array
// let numeros = [10, 4, 20, 16, 2, 7, 50, 34];
// let valor = [];

// function arrayReverso(vetor){
//     for(let i = vetor.length - 1; i >= 0; i--){
//         valor.push(vetor[i]);
//     }

//     return valor;
// }

// console.log(`Array reverso ${arrayReverso(numeros)}`);

// ! Solução do professor
// function reverterArray(vetor){
//     let vetorResultado = [];

//     for(let i = vetor.length - 1; i >= 0; i--){
//         vetorResultado.push(vetor[i]);
//     }

//     return vetorResultado;
// }

// console.log(`O vetor invertido é: ${reverterArray([1, 2, 3, 4])}`);

// ? Exercício 4: Somar todos os elementos de uma matriz

// let matrizElementos = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 20, 30]
// ];

// function somarMatriz(matriz){
//     let soma = 0;
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             soma += matriz[i][j];
//         }
//     }

//     return soma;
// }

// console.log(`Soma da matriz: ${somarMatriz(matrizElementos)}`);

// ! Solução do professor
// function somarMatriz(matriz){
//     let soma = 0;
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[j].length; j++){
//             soma += matriz[i][j];
//         }

//         return soma;
//     }
// }

// console.log("A soma dos elementos contidos na nossa matriz é: ", somarMatriz([1, 2], [3, 4]));
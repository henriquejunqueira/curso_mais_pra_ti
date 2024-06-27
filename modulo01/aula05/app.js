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

// ? Exercício 5: Encontrar o maior número em uma matriz
// let matrizNumeros = [[10, 20, 30], [8, 9, 7], [50, 200, 60]];

// function maiorNumeroMatriz(matriz){
//     let valor = 0;
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             if(matriz[i][j] > valor){
//                 valor = matriz[i][j];
//             }
//         }
//     }

//     return valor;
// }

// console.log(`O maior valor da matriz é ${maiorNumeroMatriz(matrizNumeros)}`);

// ! Solução do professor
// function maiorNumeroMatriz(matriz){
//     let maior = matriz[0][0];
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             if(matriz[i][j] > maior){
//                 maior = matriz[i][j];
//             }
//         }
//     }

//     return maior;
// }

// console.log(`O maior número da minha matriz é: ${maiorNumeroMatriz([[1, 2], [3, 4]])}`);

// * Funções avançadas: String

/* 
    * String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos,
    * possuindo propriedades e métodos
*/

// console.log("Henrique Junqueira".length); // TODO Conta a quantidade de caracteres em uma string

// let nome = 'Gabriela';
// console.log(nome.indexOf('a')); // TODO indexOf retorna a primeira ocorrência do caracter na string

// let nome = 'Dick Vigarista';
// console.log(nome);
// let nomeAlterado = nome.replace('Dick Vigarista', 'Pica Pau'); // TODO replace substitui o trecho na string
// console.log(nomeAlterado);
// console.log(nome.substr('7', '5')); // TODO

// let nome = ' BATMAN ';
// console.log('-' + nome.trim() + '-'); // TODO remove os espaços em branco em uma string


// Funções avançadas: Matemáticas
// let x = Math.ceil(10.100); // TODO arredonda pra cima
// console.log(x);

// let x = Math.floor(10.100); // TODO arredonda pra baixo
// console.log(x);

// let x = Math.round(10.100); // TODO etorna o valor de um número arredondado para o inteiro mais proximo
// console.log(x);

// let x = Math.random(); // TODO retorna um número aleatório que pode ou não ser especificado
// console.log(x);

// * Funções avançadas: Datas
// let data = new Date();
// console.log(data.getDate()); // TODO Exibe o dia atual

// let data = new Date();
// console.log(data.getMonth() + 1); // TODO Exibe o mês

// let data = new Date();
// console.log(data.getFullYear()); // TODO Exibe o ano

// let dataAtual = new Date();
// console.log(`${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`);

// let data = new Date();
// console.log(data.toString());
// data.setDate(data.getDate() + 720);
// console.log(data.toString());

// let data = new Date();
// console.log(data.toString());
// data.setFullYear(data.getFullYear() + 5);
// console.log(data.toString());

// let data = new Date();
// console.log(data.toString());
// data.setMonth(data.getFullYear() + 5);
// console.log(data.toString());


// const novaData = new Date();
// console.log(novaData.toLocaleDateString('pt-BR'));

// Exercício 6: Encontrar a quantidade de milissegundos entre duas datas
let data = new Date(1994, 8, 15);
let data1 = new Date().getTime();

let miliSegundosEntreDatas = Math.abs(data - data1);
console.log(miliSegundosEntreDatas);
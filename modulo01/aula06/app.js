// * Objeto
// const pessoa = {
//     nome: 'Henrique',
//     idade: 29,
//     profissao: 'Músico',
//     altura: 1.76,
//     email: 'henrique@teste.com',
//     empregado: true,
//     numeros: [1, 2, 3, 4],
// };

// pessoa.nome = 'Jurema';

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(pessoa.email);
// console.log(pessoa.numeros[1]);

// delete pessoa.empregado; // ! deleta o atributo

// pessoa.falar = function() {
//     return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
// }

// console.log(pessoa.falar());
// console.log(pessoa);

// let cachorro = {
//     nome: 'Ping-Pong',
//     patas: 4,
//     latir: function(){
//         console.log('Au au');
//     }
// }

// console.log(cachorro.patas);
// console.log(cachorro.nome);
// cachorro.latir();

// * for in
// const pessoa = {
//     nome: 'Henrique',
//     idade: 29,
//     profissao: 'Músico',
//     altura: 1.76,
//     email: 'henrique@teste.com',
//     empregado: true,
//     descrever: function(){
//         console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
//     },
// };

// pessoa['nome'];
// for(let chave in pessoa){
//     console.log(chave + ': ' + pessoa[chave]);
// }

// console.log(pessoa.descrever());

// let numeros = [10, 20, 100];

// * for of
// for(let numero of numeros){
//     console.log(numero);
// }

// let nomes = 'Henrique Junqueira';

// for(let nome of nomes){
//     console.log(nome);
// }

// ? Exercício 01: Você em uma lista de objetos que representam diferentes tipos 
// ? de veículos e suas características. Seu objetivo é primeiro usar o FOR IN para listar
// ? todas as propriedades e valores de cada veículo. Depois, utilizar o FOR OF para listar
// ? apenas os modelos dos veículos.

// let carro = {   
//     modelo: ['Ford', 'Toyota', 'Fiat'],
//     portas: [4, 2],
//     cores: ['preta', 'vermelha', 'azul', 'branca'],
//     ligar: function(){
//         console.log(`Ligado`);
//     }
// }

// for(let carros in carro){
//     console.log(`${carros} : ${carro[carros]}`);
// }

// for(let modelo of carro.modelo){
//     console.log(`Modelo de carro: ${modelo}`);
// }

/**
 * FOR IN - chave retorna o indice de um array ou o atributo de um objeto
 * FOR OF - chave retorna os atributos de um objetos ou os valores de um array
 */

// * forEach
// let cores = ['Azul', 'Preto', 'Branco'];

// cores.forEach((cor, indice) => {
//     console.log(indice + ': ' + cor)
// });

// let compras = [];

// compras['frutas'] = new Array('banana', 'laranja');

// compras['frutas'].forEach((valor, index) => {
//     console.log(index + ': ' + valor)
// });

// ? Exercício 02: Construa um array de números e calcule a soma total dos número e também 
// ? imprima cada número multiplicado por dois
// const arrayNumeros = [2, 4, 6];
// let soma = 0;

// arrayNumeros.forEach((numero) => {
//     soma += numero;
//     console.log(`Valor multiplicado por dois: ${numero * 2}`);
// })

// console.log(`Soma total dos números: ${soma}`);

// ES6
// let nome = 'Henrique';
// let idade  = 29;
// let sexo = 'Masculino';

// let objeto = {
//     nome,
//     idade,
//     sexo
// }

// console.log(objeto);

// * Design Factories

let BicicletaFactory = function(cor, tipo, marca){
    return{
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory('Azul', 'Speed', 'Caloi');
let bicicleta2 = BicicletaFactory('Preta', 'Mountain', 'BMX');

console.log(bicicleta1);
console.log(bicicleta2);

// let cor = prompt('Escreva a cor: ');

// let bicicleta1 = BicicletaFactory(cor, 'Speed', 'Caloi');
// let bicicleta2 = BicicletaFactory('Preta', 'Mountain', 'BMX');

// console.log(bicicleta1);
// console.log(bicicleta2);

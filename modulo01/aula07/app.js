// ? Exercício 1:
// ? Crie um for in pra iterar sobre as propriedades dentro das notas, calcule a média e imprima a média da turma.
// ? caso a média esteja acima de 3.0, indique que a turma está acima da média de aprovação.

// const professor = {
//     nome: 'Tony Stark',
//     materia: 'Matemática',
//     notas: {
//         aluno1: 3.5,
//         aluno2: 4.0,
//         aluno3: 2.8
//     }
// }

// let somaNotas = 0;
// let alunos = 0;

// for(let aluno in professor.notas){
//     somaNotas += professor.notas[aluno];
//     alunos++;
// }

// let media = somaNotas / alunos;
// console.log(`Média das notas dos alunos: ${media.toFixed(1)}`);

// if(media > 3.0){
//     console.log(`A turma está acima da média de aprovação`);
// }else{
//     console.log(`A turma está acima da média de aprovação`);
// }

// ? Exercício 2:
// ? For of para iterar sobre o array biblioteca
// ? Para cada livro, verifique se foi publicado antes de 2000
// ? Imprimir o título e o ano dos livros que atendem essa condição

// const biblioteca = [
//     {titulo: '12 Regras para Vida', author: 'Jordan Peterson', ano: 1925},
//     {titulo: 'O Hobbit', author: 'J.R.R. Tolkien', ano: 1937},
//     {titulo: 'Senhora do Jogo', author: 'Sidney Sheldon', ano: 2009},
//     {titulo: 'Zé Carioca', author: 'Disney', ano: 1940},
//     {titulo: 'Nação Dopamina', author: 'Anna Lembke', ano: 2021},
// ];

// let arrayLivros = [];

// for(let livro of biblioteca){
//     if(livro.ano < 2000){
//         arrayLivros.push(livro.titulo);
//     }
// }

// console.log(arrayLivros)

// ? Exercício 3:
// ? Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
// ? Para cada filme no array, verifique se o gẽnero já existe no objeto contagem.
// ? Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1
// ? Após o loop, imprima cada gênero e o número de filmes correspondente

// const filmes = [
//     { titulo: 'Tropa de Elite', genero: 'Ação'},
//     { titulo: 'Capitão Fantástico', genero: 'Drama'},
//     { titulo: 'O Poderoso Chefão', genero: 'Crime'},
//     { titulo: 'Clube da Luta', genero: 'Drama'},
//     { titulo: 'Oppenheimer', genero: 'Biografia'},
//     { titulo: 'High School Musical', genero: 'Musical'},
//     { titulo: 'Barbie', genero: 'Live Action'},
// Adicionados
// { titulo: 'Dia de Treinamento', genero: 'Crime'},
// { titulo: 'Batman', genero: 'Crime'},
// { titulo: 'Logan', genero: 'Ação'},
// ];

// let somaFilmes = 0;
// let generos = {};

// filmes.forEach((nomeFilme) => {
//     if(generos[nomeFilme.genero]){
//         generos[nomeFilme.genero]++;
//     }else{
//         generos[nomeFilme.genero] = 1;
//     }
// });

// for(let genero in generos){
//     console.log(`${generos[genero]} filmes do gênero ${genero}.`)
// }

// * Pesquisa binária
// ? Desenvolver um algoritmo que seja capaz de receber uma lista, e um valor correto. e execute uma pesquisa binária para
// ? encontrar o valor certo.

// TODO binarySearch
// function pesquisaBinaria(listaNumerica, posicao){
//     let valorEsquerda = 0;
//     let valorDireita = listaNumerica.length - 1;

//     while(valorEsquerda <= valorDireita){
//         let valorMeio = Math.floor((valorEsquerda + valorDireita) / 2);

//         if(listaNumerica[valorMeio] === posicao){
//             return valorMeio;
//         }else if(listaNumerica[valorMeio] < posicao){
//             valorEsquerda = valorMeio + 1;
//         }else{
//             valorDireita = valorMeio - 1;
//         }
//     }

//     return -1;
// }

// const listaNumerica = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 13, 15, 17];
// const posicao = 6;
// const indice = pesquisaBinaria(listaNumerica, posicao);
// if(indice !== -1){
//     console.log(`O valor ${posicao} foi encontrado no índice ${indice}.`);
//     console.log(listaNumerica.length)
// }else{
//     console.log(`O valor ${posicao} não foi encontrado.`);
// }

// ! Solução do professor
// const binarySearch = (list, item) => {
//     let low = 0;
//     let high = list.length - 1;

//     while(low <= high){
//         const mid = Math.floor((low + high) / 2);
//         const guess = list[mid];

//         if(guess === item){
//             return mid;
//         }else if(guess > item){
//             high = mid - 1;
//         }else{
//             low = mid + 1;
//         }
//     }

//     return null;
// }

// const myList = [1, 3, 5, 7, 9];

// console.log(binarySearch(myList, 3)); // posição 1
// console.log(binarySearch(myList, 5)); // posição 2
// console.log(binarySearch(myList, 3)); // posição 2

// * spread = espalhar
// * rest = juntar

// TODO spread
// let tituloArtigo = 'Movimento ágil'
// console.log([...tituloArtigo])

// let listaTimes = ['Grêmio', 'Footbal Porto Alegrense'];
// let listaTimes2 = ['São José', 'Pelotas'];

// let listasTimesCompletos = ['Flamengo', 'São Paulo', ...listaTimes, ...listaTimes2]

// console.log(listasTimesCompletos);

// let pessoa = {nome: 'Pedro', idade: 15}
// let dadosCompletos = {endereco: 'Rua teste'}

// let dadosPessoais = {...pessoa, ...dadosCompletos, idade: 30, telefone: '95555-5555'};

// console.log(dadosPessoais);

// let nome = 'Henrique';
// console.log([...nome]);

// TODO rest

// function soma(...param){
//     let resultado = 0;

//     console.log(param);

//     param.forEach(elemento => resultado += elemento);

//     return resultado;
// }

// console.log(soma(3, 8, 5, 7));

function multiplicacao(m, ...p) {
  console.log(m);
  console.log(p);

  let resultado = 0;

  p.forEach((elemento) => (resultado += m * elemento));

  return resultado;
}

console.log(multiplicacao(5, 7, 12, 3, 50));

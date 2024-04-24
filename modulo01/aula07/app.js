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

const filmes = [
    { titulo: 'Tropa de Elite', genero: 'Ação'},
    { titulo: 'Capitão Fantástico', genero: 'Drama'},
    { titulo: 'O Poderoso Chefão', genero: 'Crime'},
    { titulo: 'Clube da Luta', genero: 'Drama'},
    { titulo: 'Oppenheimer', genero: 'Biografia'},
    { titulo: 'High School Musical', genero: 'Musical'},
    { titulo: 'Barbie', genero: 'Live Action'},
    // Adicionados
    { titulo: 'Dia de Treinamento', genero: 'Crime'},
    { titulo: 'Batman', genero: 'Crime'},
    { titulo: 'Logan', genero: 'Ação'},
];

let somaFilmes = 0;
let generos = {};

filmes.forEach((nomeFilme) => {
    if(generos[nomeFilme.genero]){
        generos[nomeFilme.genero]++;
    }else{
        generos[nomeFilme.genero] = 1;
    }
});

for(let genero in generos){
    console.log(`${generos[genero]} filmes do gênero ${genero}.`)
}
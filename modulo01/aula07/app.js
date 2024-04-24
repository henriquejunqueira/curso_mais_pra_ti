const professor = {
    nome: 'Tony Stark',
    materia: 'Matemática',
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

// ? Crie um for in pra iterar sobre as propriedades dentro das notas, calcule a média e imprima a média da turma.
// ? caso a média esteja acima de 3.0, indique que a turma está acima da média de aprovação.

let somaNotas = 0;
let alunos = 0;

for(let aluno in professor.notas){
    somaNotas += professor.notas[aluno];
    alunos++;
}

let media = somaNotas / alunos;
console.log(`Média das notas dos alunos: ${media.toFixed(1)}`);

if(media > 3.0){
    console.log(`A turma está acima da média de aprovação`);
}else{
    console.log(`A turma está acima da média de aprovação`);
}

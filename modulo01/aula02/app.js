//Aula 04

//O método 'log' do objeto 'console', utilizado para imprimir informações no console do navegador ou servidor
// console.log("Hello 'World'")
// console.log('Hello "World"')
// console.log(`Hello World`)

// console.log(1000, 1520.10, "Henrique")

//Apresente no console a seguinte mensagem: Meu nome é (X) e estou na aula 4 do professor Jaques
// let aluno = "Henrique"
// let aula = 4
// let professor = "Jaques"
// console.log(`Meu nome é ${aluno} e estou na aula ${aula} do professor ${professor}`)

// nome = "Henrique" // NÃO RECOMENDADO
// let nome = "Henrique" // Declaração padrão
// var name = "Henrique" // Antiga e inadequada
// var name
// const NAME = "Henrique"

// let teste
// console.log(teste)

// let meuNull = null
// console.log(meuNull)

// let meuNumber = 10.1
// let meuNumber = 10
// let minhaString = "Sou desenvolvedor"
// console.log(typeof(meuNumber))

// let meuBoolean = true
// meuBoolean = false
// console.log(meuBoolean)

// let num1 = 10
// let num2 = 5
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 / num2)
// console.log(num1 * num2)
// console.log(num1 ** num2)

// let numTeste = "5"
// let numTeste = "5.5"
// let numTeste2 = parseInt(numTeste)
// let numTeste2 = parseFloat(numTeste)
// let numTeste2 = Number(numTeste)
// console.log(numTeste + num1)
// console.log(numTeste2 + num1)
// console.log(numTeste - num1)
// console.log(numTeste2 + num1)

// let contador = 1
// console.log(contador)
// contador = contador + 1

// console.log(contador)

// contador++
// contador--
// console.log(contador)

// let contador = 1
// console.log(contador)

// --contador
// ++contador
// console.log(contador)

// const passo = 5
// let contador = 0
// contador += passo
// contador -= passo
// contador *= passo
// contador /= passo
// console.log(contador)

// Ordem de precedência
/*
    ()
    **
    * / %
    + -
    lê-se da esquerda para direita
*/

// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 > 5)
// console.log(10 >= 5)
// console.log(10 == 5)
// console.log(10 == "10") // valor
// console.log(10 != "10") // valor
// console.log(10 === "10") // valor e tipo
// console.log(10 !== "10") // valor e tipo

// console.log((10 > 5) && (10 > 2))
// console.log((10 > 5) || (10 > 2))
// console.log((10 > 5) && !(10 > 2))

// const usuario = "Henrique"
// const senha = "1234"
// const autenticacao = usuario === "Henrique" && senha === "123"
// console.log(autenticacao)

// console.log(true)
// console.log(!true)
// console.log(!!true)

// const nota = 60

// if(nota >= 60){
//     console.log("APROVADO!!!")
// }else if(nota >= 40 && nota <= 59){
//     console.log("ESTÁ DE RECUPERAÇÃO!")
// }else{
//     console.log("REPROVADO, PRECISA ESTUDAR MAIS!")
// }

// const idade = 30

// if((idade >= 18) && (idade <= 32)){
//     console.log("Pode realizar o concurso")
// }else{
//     console.log("Não pode realizá-lo")
// }

/*
    Operador ternário:

    Estrutura de decisão semelhante ao if/else, mas com sintaxe mais enxuta.

    <condicao> ? <verdadeiro> : <falso>
*/

// let resultadoTernario = (10 < 100) ? true : false
// console.log(resultadoTernario)

const prompt = require('prompt-sync')()

let teste = prompt("Digite aqui seu nome: ")
console.log(teste)
console.log("5" + 10)
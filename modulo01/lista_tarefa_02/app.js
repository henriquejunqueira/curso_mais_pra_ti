// ! ======================================= Exercício 01 ============================================
// const prompt = require('prompt-sync')();

// let cigarrosPorDia = prompt('Quantidade de cigarros fumados por dia: ');
// let anosFumando = prompt('Quantos anos fumando? ');
// let diasPorAno = 365;
// let minutosPorDia = 1440;
// let minutosDeVidaPorCigarro = 10;

// let diasFumando = anosFumando * diasPorAno;
// let totalCigarros = diasFumando * cigarrosPorDia;

// let tempoPerdido = totalCigarros * minutosDeVidaPorCigarro;
// let diasRestando = Number(tempoPerdido / minutosPorDia);
// console.log(`Tempo de vida perdido: ${Math.round(diasRestando)} dias`);

// ! ======================================= Exercício 02 ============================================
// const prompt = require('prompt-sync')();

// let velocidadeCarro = prompt('Qual a velocidade do carro? ');
// const limite = 80;

// if (velocidadeCarro > limite) {
//   let multa = (velocidadeCarro - limite) * 5;
//   let excedido = velocidadeCarro - limite;
//   console.log(
//     `Por exceder ${excedido}Km acima do limite de ${limite}Km/h, a multa será de R$${multa.toFixed(
//       2
//     )}`
//   );
// }

// ! ======================================= Exercício 03 ============================================
// const prompt = require('prompt-sync')();

// let distanciaParaPercorrer = prompt(
//   'Qual a distância deseja percorrer em Km? '
// );

// let viagemCurtaEBarata = 200;
// let precoViagemCurta = 0.5;
// let precoViagemLonga = 0.45;
// let precoTotalViagem = 0;

// if (distanciaParaPercorrer <= viagemCurtaEBarata) {
//   precoTotalViagem = distanciaParaPercorrer * precoViagemCurta;
//   console.log(
//     `O preço da viagem de ${distanciaParaPercorrer}Km é de R$${precoTotalViagem.toFixed(
//       2
//     )}`
//   );
// } else {
//   precoTotalViagem = distanciaParaPercorrer * precoViagemLonga;
//   console.log(
//     `O preço da viagem de ${distanciaParaPercorrer}Km é de R$${precoTotalViagem.toFixed(
//       2
//     )}`
//   );
// }

// ! ======================================= Exercício 04 ============================================
// const prompt = require('prompt-sync')();

// let segmentoReta = [];

// for (let i = 1; i <= 3; i++) {
//   segmentoReta.push(Number(prompt(`${i}º segmento de reta: `)));
// }

// let verificacaoA = segmentoReta[0] + segmentoReta[1] > segmentoReta[2];
// let verificacaoB = segmentoReta[0] + segmentoReta[2] > segmentoReta[1];
// let verificacaoC = segmentoReta[1] + segmentoReta[2] > segmentoReta[0];

// if (verificacaoA && verificacaoB && verificacaoC) {
//   console.log('Forma um triangulo');
// } else {
//   console.log('Não forma um triangulo');
// }

// ! ======================================= Exercício 05 ============================================
// const prompt = require('prompt-sync')();

// console.log('Opções do jogo JoKenPo');
// console.log('1 - Pedra');
// console.log('2 - Papel');
// console.log('3 - Tesoura');

// let opcao = 0;

// while (opcao < 1 || opcao > 3) {
//   opcao = Number(prompt('Digite o número da opção para jogar JoKenPo: '));
// }

// let opcaoComputador = parseInt(1 + Math.random() * 3);

// if (opcao === 1) {
//   console.clear();
//   console.log('Você escolheu Pedra!');
//   if (opcaoComputador === opcao) {
//     console.log('Empate! Computador também escolheu Pedra!');
//   } else {
//     if (opcaoComputador === 2) {
//       console.log('Você perdeu... Computador escolheu Papel!');
//     } else if (opcaoComputador === 3) {
//       console.log('Você ganhou... Computador escolheu Tesoura!');
//     }
//   }
// }

// if (opcao === 2) {
//   console.clear();
//   console.log('Você escolheu Papel!');
//   if (opcaoComputador === opcao) {
//     console.log('Empate! Computador também escolheu Papel!');
//   } else {
//     if (opcaoComputador === 1) {
//       console.log('Você ganhou... Computador escolheu Pedra!');
//     } else if (opcaoComputador === 3) {
//       console.log('Você perdeu... Computador escolheu Tesoura!');
//     }
//   }
// }

// if (opcao === 3) {
//   console.clear();
//   console.log('Você escolheu Tesoura!');
//   if (opcaoComputador === opcao) {
//     console.log('Empate! Computador também escolheu Tesoura!');
//   } else {
//     if (opcaoComputador === 2) {
//       console.log('Você ganhou... Computador escolheu Papel!');
//     } else if (opcaoComputador === 1) {
//       console.log('Você perdeu... Computador escolheu Pedra!');
//     }
//   }
// }

// ! ======================================= Exercício 06 ============================================
// const prompt = require('prompt-sync')();

// let numeroDigitado;
// let numeroSorteado;
// let tentativas = 0;

// numeroSorteado = parseInt(1 + Math.random() * 5);

// while (
//   numeroDigitado !== numeroSorteado ||
//   numeroDigitado < 1 ||
//   numeroDigitado > 5
// ) {
//   numeroDigitado = parseInt(prompt('Digite um número entre 1 e 5: '));

//   if (numeroDigitado != numeroSorteado) {
//     console.log('Você errou o número sorteado! Tente novamente');
//   }

//   tentativas++;
// }

// if (tentativas === 1) {
//   console.log(
//     `Você acertou de primeira!!! O número sorteado era o ${numeroSorteado}`
//   );
// } else {
//   console.log(
//     `Você acertou com ${tentativas} tentativas!!! O número sorteado era o ${numeroSorteado}`
//   );
// }

// ! ======================================= Exercício 07 ============================================
// const prompt = require('prompt-sync')();

// let aluguelCarroPopular = 90;
// let aluguelCarroLuxo = 150;
// let opcaoCarro = 0;

// let precoPopBaixoCem = 0.2;
// let precoPopCimaCem = 0.1;
// let precoPopBaixoDuzentos = 0.3;
// let precoPopCimaDuzentos = 0.25;

// let diasAlugados = 0;
// let kmPercorrido = 0;

// let custoCarro = 0;
// let custoPorKm = 0;
// let custoTotal = 0;

// console.log('Aluguel de Carros ');
// console.log(`1 - Carro Popular R$${aluguelCarroPopular.toFixed(2)}`);
// console.log(`2 - Carro Luxo R$${aluguelCarroLuxo.toFixed(2)}`);

// while (opcaoCarro !== 1 && opcaoCarro !== 2) {
//   opcaoCarro = Number(prompt('Digite o número da opção de carro alugado: '));
// }

// while (diasAlugados < 1 || isNaN(diasAlugados)) {
//   diasAlugados = Number(prompt('Digite o número de dias alugados: '));
// }

// while (kmPercorrido < 1 || isNaN(kmPercorrido)) {
//   kmPercorrido = Number(
//     prompt('Digite quantos quilômetros foram percorridos: ')
//   );
// }

// if (opcaoCarro === 1) {
//   custoCarro = aluguelCarroPopular * diasAlugados;
//   if (kmPercorrido <= 100) {
//     custoPorKm = precoPopBaixoCem * kmPercorrido;
//   } else {
//     custoPorKm = precoPopCimaCem * kmPercorrido;
//   }
// } else if (opcaoCarro === 2) {
//   custoCarro = aluguelCarroLuxo * diasAlugados;
//   if (kmPercorrido <= 200) {
//     custoPorKm = precoPopBaixoDuzentos * kmPercorrido;
//   } else {
//     custoPorKm = precoPopCimaDuzentos * kmPercorrido;
//   }
// }

// custoTotal = custoPorKm + custoCarro;

// console.log(`R$${custoTotal.toFixed(2)}`);

// ! ======================================= Exercício 08 ============================================
// const prompt = require('prompt-sync')();

// let horasAtividade = parseFloat(
//   prompt('Quantas horas de atividade você teve por mês? ')
// );

// let horaMinima = 10;
// let horaMaxima = 20;

// let pontosMinimos = 2;
// let pontosMedios = 5;
// let pontosMaximo = 10;

// let somaPontos;
// let faturaPontos = 0.05;
// let totalReceber = 0;

// if (horasAtividade < horaMinima) {
//   somaPontos = horasAtividade * pontosMinimos;
// } else if (horasAtividade <= horaMaxima) {
//   somaPontos = (horasAtividade - 10) * pontosMedios;
//   somaPontos += 20;
// } else if (horasAtividade > horaMaxima) {
//   somaPontos = (horasAtividade - 20) * pontosMaximo;
//   somaPontos += 20 + 50;
// }

// totalReceber = somaPontos * faturaPontos;

// console.log(
//   `Você fez ${somaPontos} pontos e ganhou R$${totalReceber.toFixed(2)}`
// );

// ! ======================================= Exercício 09 ============================================
// const prompt = require('prompt-sync')();

// let sair = false;
// let salario = 0;
// let salarioHomens = 0;
// let salarioMulheres = 0;

// while (!sair) {
//   salario = Number(prompt('Salário: '));
//   let sexo = prompt('Sexo M/F: ').toUpperCase();

//   if (sexo == 'M') {
//     salarioHomens += salario;
//   } else if (sexo == 'F') {
//     salarioMulheres += salario;
//   } else {
//     console.log(
//       'Opção de sexo inválida. Insira M para masculino ou F para feminino.'
//     );
//     continue;
//   }

//   let opcaoSair = prompt('Sair do programa? s/n: ').toUpperCase();
//   if (opcaoSair === 'S') {
//     sair = true;
//   } else {
//     console;
//     console.clear();
//   }
// }

// console.log(`Soma do salário dos homens: R$${salarioHomens}`);
// console.log(`Soma do salário das mulheres: R$${salarioMulheres}`);

// ! ======================================= Exercício 10 ============================================
// const prompt = require('prompt-sync')();

// let numero;
// let i = 0;
// let soma = 0;
// let menor = 10000;
// let par = 0;
// let media = 0;

// do {
//   numero = parseInt(prompt('Digite um número: '));

//   soma += numero;
//   i++;

//   if (numero < menor) {
//     menor = numero;
//   }

//   if (numero % 2 === 0) {
//     par++;
//   }

//   sair = prompt('Deseja sair? S/N: ').toUpperCase();
// } while (sair === 'N');

// media = soma / i++;

// console.log(`A soma entre todos os valores é: ${soma}`);
// console.log(`O menor valor digitado é o: ${menor}`);
// console.log(`A média dos valores digitados é: ${media}`);
// console.log(`Quantidade de valores pares: ${par}`);

// ! ======================================= Exercício 11 ============================================
// const prompt = require('prompt-sync')();

// let primeiroTermo = parseInt(prompt('Digite o primeiro termo: '));
// let razao = parseInt(prompt('Digite a razão: '));

// let soma = 0;

// for (let i = 1; i <= 10; i++) {
//   let calculo = primeiroTermo + (i - 1) * razao;
//   console.log(`Termo ${i}: ${calculo}`);
//   soma += calculo;
// }

// console.log(`A soma dos termos é: ${soma}`);

// ! ======================================= Exercício 12 ============================================
// const prompt = require('prompt-sync')();

// let valor1 = 0;
// let valor2 = 1;

// for (let i = 0; i <= 10; i++) {
//   console.log(`${valor2}`);
//   let valor3 = valor1 + valor2;
//   valor1 = valor2;
//   valor2 = valor3;
// }

// ! ======================================= Exercício 13 ============================================
// const prompt = require('prompt-sync')();

// const fibonnaci = [];

// fibonnaci[0] = 0;
// fibonnaci[1] = 1;

// for (let i = 2; i < 15; i++) {
//   fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
// }

// console.log(`Primeiros 15 elementos da sequencia de Fibonacci:`);
// for (let i = 1; i < fibonnaci.length; i++) {
//   console.log(`${fibonnaci[i]}`);
// }

// ! ======================================= Exercício 14 ============================================
// const prompt = require('prompt-sync')();

// let nomes = [];

// for (let i = 0; i < 7; i++) {
//   nomes[i] = prompt(`Digite o ${i + 1}º nome: `);
// }

// for (let i = nomes.length - 1; i >= 0; i--) {
//   console.log(`${i + 1}º nome: ${nomes[i]}`);
// }

// ! ======================================= Exercício 15 ============================================
// const prompt = require('prompt-sync')();

// let numero = [];

// for (let i = 0; i < 10; i++) {
//   numero[i] = parseInt(prompt(`Digite o ${i + 1}º número: `));
// }

// for (let i = 0; i < numero.length; i++) {
//   if (numero[i] % 2 === 0) {
//     console.log(
//       `O número na ${i + 1}º posição do vetor é o ${numero[i]} e ele é par`
//     );
//   }
// }

// ! ======================================= Exercício 16 ============================================
// const prompt = require('prompt-sync')();

// let numero = [];

// function geraNumeroAleatorio(minimo, maximo) {
//   return Math.floor(Math.random() * (maximo - minimo)) + minimo;
// }

// for (let i = 0; i < 20; i++) {
//   numero[i] = geraNumeroAleatorio(0, 100);
// }

// console.log(`Numeros gerados: ${numero}`);

// numero.sort((a, b) => a - b);

// console.log(`Números em ordem crescente: ${numero}`);

// ! ======================================= Exercício 17 ============================================
// const prompt = require('prompt-sync')();

// let nomes = [];
// let idades = [];

// for (let i = 0; i < 9; i++) {
//   nomes[i] = prompt('Digite o nome da pessoa: ');
//   idades[i] = parseInt(prompt('Digite a idade da pessoa: '));
// }

// for (let i = 0; i < idades.length; i++) {
//   if (idades[i] < 18) {
//     console.log(`${nomes[i]} tem ${idades[i]} anos de idade.`);
//   }
// }

// ! ======================================= Exercício 18 ============================================
// const prompt = require('prompt-sync')();

// const funcionario = {
//   nome: '',
//   cargo: '',
//   salario: 0,
// };

// const campos = ['nome', 'cargo', 'salario'];
// const dadosFuncionario = ['nome', 'cargo', 'salario'];

// for (let i = 0; i < campos.length; i++) {
//   funcionario[dadosFuncionario[i]] = prompt(
//     `Digite ${campos[i]} do(a) funcionário(a): `
//   );
// }

// console.clear();

// console.log('Registro do(a) funcionário(a): ');
// for (let campo in funcionario) {
//   console.log(
//     `${campo.charAt(0).toUpperCase() + campo.slice(1)}: ${funcionario[campo]}`
//   );
// }

// ! ======================================= Exercício 19 ============================================
// const prompt = require('prompt-sync')();

// function validarHorario(horario) {
//   const horarioSeparado = horario.split(':');

//   if (horarioSeparado.length !== 3) {
//     return false;
//   }

//   const horas = parseInt(horarioSeparado[0]);
//   const minutos = parseInt(horarioSeparado[1]);
//   const segundos = parseInt(horarioSeparado[2]);

//   if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
//     return false;
//   }

//   const verificacaoHoras = horas < 0 || horas > 23;
//   const verificaMinutos = minutos < 0 || minutos > 59;
//   const verificaSegundos = segundos < 0 || segundos > 59;
//   const verificaHorarioGeral =
//     verificacaoHoras || verificaMinutos || verificaSegundos;

//   if (verificaHorarioGeral) {
//     return false;
//   }

//   return true;
// }

// let horarios = [];

// for (let i = 0; i < 5; i++) {
//   let horario;

//   do {
//     horario = prompt(`Digite o ${i + 1}º horário no formato (HH:MM:SS): `);
//     if (!validarHorario(horario)) {
//       console.log(
//         'O formato do horário está errado! Digite o horário no formato (HH:MM:SS)!'
//       );
//     }
//   } while (!validarHorario(horario));
//   horarios.push(horario);
// }

// console.clear();

// for (let horario of horarios) {
//   console.log(`Horário digitado: ${horario}`);
// }

// ! ======================================= Exercício 20 ============================================
// const prompt = require('prompt-sync')();

// const dadosFuncionarios = [];
// let matricula;
// let nome;
// let salarioBruto;
// let deducaoINSS;
// let salarioLiquido;

// function calcularDeduçãoINSS(salarioBruto) {
//   const taxaINSS = 0.12;
//   return salarioBruto * taxaINSS;
// }

// for (let i = 0; i < 80; i++) {
//   matricula = prompt(`Matrícula do ${i + 1}º funcionário: `);
//   nome = prompt(`Nome do ${i + 1}º funcionário: `);
//   salarioBruto = parseFloat(
//     prompt(`Salário bruto do ${i + 1}º funcionário: R$`)
//   );

//   console.clear();

//   deducaoINSS = calcularDeduçãoINSS(salarioBruto);
//   salarioLiquido = salarioBruto - deducaoINSS;

//   dadosFuncionarios[i] = {
//     matricula: matricula,
//     nome: nome,
//     salarioBruto: salarioBruto,
//     deducaoINSS: deducaoINSS,
//     salarioLiquido: salarioLiquido,
//   };
// }

// console.clear();
// for (let funcionario of dadosFuncionarios) {
//   console.log(`Contracheque funcionario: `);
//   console.log(`Matrícula: ${funcionario.matricula}`);
//   console.log(`Nome: ${funcionario.nome}`);
//   console.log(`Salário Bruto: R$${funcionario.salarioBruto.toFixed(2)}`);
//   console.log(`Dedução INSS: R$${funcionario.deducaoINSS.toFixed(2)}`);
//   console.log(`Salário Líquido: R$${funcionario.salarioLiquido.toFixed(2)}`);
//   console.log('');
// }

// ! ======================================= Exercício 21 ============================================
// const prompt = require('prompt-sync')();

// function calcularPesoIdeal(altura, sexo) {
//   if (sexo === 'M') {
//     calculoPeso = (72.7 * altura - 58).toFixed(1);
//   } else if (sexo === 'F') {
//     calculoPeso = (62.1 * altura - 44.7).toFixed(1);
//   } else {
//     calculoPeso = `Sexo inválido! Digite 'M' para masculino ou 'F' para feminino`;
//   }

//   return calculoPeso;
// }

// let altura = parseFloat(prompt('Digite sua altura: '));
// let sexo = prompt('Digite o sexo M/F: ').toUpperCase();

// console.log(`Seu peso ideal é ${calcularPesoIdeal(altura, sexo)}Kg`);

// ! ======================================= Exercício 22 ============================================
// const prompt = require('prompt-sync')();

// let somaSalario = 0.0;
// let somaFilhos = 0;
// let maiorSalario = -Infinity;
// let contaSalarioMaximo = 0;
// let totalHabitantes = 0;
// let sair;
// let mediaSalario = 0.0;
// let mediaFilhos = 0.0;
// let poncentagemSalarioMaximo = 0;

// function coletarDadosHabitantes() {
//   do {
//     let salario = parseFloat(prompt('Digite o salário do habitante: R$'));
//     let numeroFilhos = parseInt(prompt('Digite o número de filhos: '));

//     somaSalario += salario;
//     somaFilhos += numeroFilhos;
//     if (salario > maiorSalario) {
//       maiorSalario = salario;
//     }

//     if (salario <= 350) {
//       contaSalarioMaximo++;
//     }

//     totalHabitantes++;

//     sair = prompt('Deseja sair? S/N: ').toUpperCase();
//     console.clear();
//   } while (sair === 'N');

//   mediaSalario = somaSalario / totalHabitantes;
//   mediaFilhos = somaFilhos / totalHabitantes;
//   poncentagemSalarioMaximo = (contaSalarioMaximo / totalHabitantes) * 100;

//   return {
//     mediaSalario: mediaSalario,
//     mediaFilhos: mediaFilhos,
//     maiorSalario: maiorSalario,
//     poncentagemSalarioMaximo: poncentagemSalarioMaximo,
//   };
// }

// let resultadoRelatorio = coletarDadosHabitantes();

// console.log(
//   `A média salarial dos habitantes é de R$${resultadoRelatorio.maiorSalario.toFixed(
//     2
//   )}`
// );
// console.log(
//   `A média do número de filhos é: ${resultadoRelatorio.mediaFilhos.toFixed(2)}`
// );
// console.log(
//   `O maior salário é: R$${resultadoRelatorio.maiorSalario.toFixed(2)}`
// );
// console.log(
//   `A porcentagem de pessoa com salário de até R$350,00 é de: ${resultadoRelatorio.poncentagemSalarioMaximo.toFixed(
//     2
//   )}%`
// );

// ! ======================================= Exercício 23 ============================================
// const prompt = require('prompt-sync')();

// const linhas = 7;
// const colunas = 7;

// let MI = [];

// for (let i = 1; i <= linhas; i++) {
//   MI[i] = [];
//   for (let j = 1; j <= colunas; j++) {
//     if (i === j) {
//       MI[i][j] = 1;
//     } else {
//       MI[i][j] = 0;
//     }
//   }
// }

// for (let i = 1; i <= linhas; i++) {
//   let linha = '';
//   for (let j = 1; j <= colunas; j++) {
//     linha += MI[i][j] + ' ';
//   }
//   console.log(linha);
// }

// ! ======================================= Exercício 24 ============================================
// const prompt = require('prompt-sync')();

// let M = [
//   [1, -2, 3, -4, 5, -6, 7, -8],
//   [-1, 2, -3, 4, -5, 6, -7, 8],
//   [1, 2, 3, -4, -5, -6, 7, 8],
//   [-1, -2, -3, -4, -5, -6, -7, -8],
//   [1, 2, 3, 4, 5, 6, 7, 8],
//   [-1, -2, -3, 4, 5, -6, -7, 8],
// ];

// let C = Array(M.length).fill(0);

// for (let i = 0; i < M.length; i++) {
//   for (let j = 0; j < M[i].length; j++) {
//     if (M[i][j] < 0) {
//       C[i]++;
//     }
//   }
// }

// console.log(`Vetor C: ${C}`);

// ! ======================================= Exercício 25 ============================================
// const prompt = require('prompt-sync')();

// let matriz = [];

// for (let i = 0; i < 15; i++) {
//   matriz[i] = [];
//   for (let j = 0; j < 20; j++) {
//     matriz[i][j] = Math.floor(Math.random() * 100) + 1;
//   }
// }

// let somaColunas = Array(20).fill(0);

// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     somaColunas[j] += matriz[i][j];
//   }
// }

// for (let i = 0; i < somaColunas.length; i++) {
//   console.log(`Coluna ${i + 1}: ${somaColunas[i]}`);
// }

// ! ======================================= Exercício 26 ============================================
// const prompt = require('prompt-sync')();

// let matrizNumericaA = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

// let matrizNumericaB = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

// let matrizProdutoP = [];

// for (let i = 0; i < 3; i++) {
//   matrizProdutoP[i] = [];
//   for (let j = 0; j < 5; j++) {
//     matrizProdutoP[i][j] = 0;
//   }
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 5; j++) {
//     matrizProdutoP[i][j] = matrizNumericaA[i][j] * matrizNumericaB[i][j];
//   }
// }

// console.log(`O resultado do cálculo da matriz produto P é: ${matrizProdutoP}`);

// ! ======================================= Exercício 27 ============================================
// const prompt = require('prompt-sync')();

// let A = parseInt(prompt('Digite o valor A: '));

// let matrizM = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 10, 11, 12],
//   [13, 14, 15, 16, 17, 18],
//   [19, 20, 21, 22, 23, 24],
//   [25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36],
// ];

// let vetorV = [];

// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < 6; j++) {
//     vetorV.push(matrizM[i][j] * A);
//   }
// }

// console.log(vetorV);

// ! ======================================= Exercício 28 ============================================
// const prompt = require('prompt-sync')();

// let matriz = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
//   [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//   [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//   [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//   [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
//   [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//   [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
// ];

// let somaAcimaDiagonal = 0;
// let somaAbaixoDiagonal = 0;

// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     if (i < j) {
//       somaAcimaDiagonal += matriz[i][j];
//     } else if (i > j) {
//       somaAbaixoDiagonal += matriz[i][j];
//     }
//   }
// }

// console.log(
//   `Soma dos elementos acima da diagonal principal: ${somaAcimaDiagonal}`
// );
// console.log(
//   `Soma dos elementos abaixo da diagonal principal: ${somaAbaixoDiagonal}`
// );

// ! ======================================= Exercício 29 ============================================
// const prompt = require('prompt-sync')();

// let matrizM = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];

// function calculoLinha4(matrizM) {
//   let soma = 0;
//   for (let i = 0; i < matrizM[3].length; i++) {
//     soma += matrizM[3][i];
//   }

//   return soma;
// }

// function calculoColuna2(matrizM) {
//   let soma = 0;
//   for (let i = 0; i < matrizM.length; i++) {
//     soma += matrizM[i][1];
//   }

//   return soma;
// }

// function calculoDiagonalPrincipal() {
//   let soma = 0;
//   for (let i = 0; i < matrizM.length; i++) {
//     soma += matrizM[i][i];
//   }

//   return soma;
// }

// function somaTotal(matrizM) {
//   let soma = 0;
//   for (let i = 0; i < matrizM.length; i++) {
//     for (let j = 0; j < matrizM[i].length; j++) {
//       soma += matrizM[i][j];
//     }
//   }

//   return soma;
// }

// console.log(`O resultado da soma da linha 4 é: ${calculoLinha4(matrizM)}`);
// console.log(`O resultado da soma da coluna 2 é: ${calculoColuna2(matrizM)}`);
// console.log(
//   `O resultado da soma da diagonal principal é: ${calculoDiagonalPrincipal(
//     matrizM
//   )}`
// );
// console.log(`Todos os elementos da matriz M são: ${matrizM}`);

// ! ======================================= Exercício 30 ============================================
// const prompt = require('prompt-sync')();

// let matrizM = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];

// function calcularMatriz(matrizM) {
//   let vetorSL = [];
//   let vetorSC = [];

//   for (let i = 0; i < matrizM.length; i++) {
//     vetorSL[i] = 0;
//     for (let j = 0; j < matrizM[i].length; j++) {
//       vetorSL[i] += matrizM[i][j];
//       vetorSC[j] = vetorSC[j] || 0;
//       vetorSC[j] += matrizM[i][j];
//     }
//   }

//   return { vetorSL, vetorSC };
// }

// function exibirMatrizVetores(matrizM, vetorSL, vetorSC) {
//   for (let i = 0; i < matrizM.length; i++) {
//     console.log(matrizM[i].join('\t'));
//   }
//   console.log(`Soma das linhas do vetor SL: ${vetorSL.join(', ')}`);
//   console.log(`Soma das colunas do vetor SC: ${vetorSC.join(', ')}`);
// }

// let { vetorSL, vetorSC } = calcularMatriz(matrizM);
// exibirMatrizVetores(matrizM, vetorSL, vetorSC);

// ! ======================================= Exercício 31 ============================================
// const prompt = require('prompt-sync')();

// let matrizV = [];
// let A;
// let contaA = 0;
// let contaDiferenteA = 0;

// for (let i = 0; i < 30; i++) {
//   matrizV[i] = [];
//   for (let j = 0; j < 30; j++) {
//     matrizV[i][j] = Math.floor(Math.random() * 900) + 1;
//   }
// }

// A = parseInt(prompt('Digite um valor numérico: '));

// for (let i = 0; i < 30; i++) {
//   for (let j = 0; j < 30; j++) {
//     if (matrizV[i][j] === A) {
//       contaA++;
//     }
//   }
// }

// console.clear();

// if (contaA === 1) {
//   console.log(
//     `\x1b[0;31;36mFoi encontrado ${contaA} valor de número ${A} na matriz V\x1b[m`
//   );
// } else {
//   console.log(
//     `\x1b[0;31;36mForam encontrados ${contaA} valores de número ${A} na matriz V\x1b[m`
//   );
// }

// let matrizX = [];

// for (let i = 0; i < 30; i++) {
//   matrizX[i] = [];
//   for (let j = 0; j < 30; j++) {
//     if (matrizV[i][j] !== A) {
//       matrizX[i].push(matrizV[i][j]);
//       contaDiferenteA++;
//     } else {
//       matrizX.push(null);
//     }
//   }
// }

// console.log(
//   `\x1b[0;31;31mForam identificados ${contaDiferenteA} valores diferentes de ${A}\x1b[m`
// );

// console.log(`\x1b[0;31;32mOs valores da matriz X são:\x1b[m`);
// console.log(matrizX);

// ! ======================================= Exercício 32 ============================================
// const prompt = require('prompt-sync')();

// let matrizM = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
//   [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
//   [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
//   [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
//   [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
//   [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78],
//   [79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91],
//   [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104],
//   [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117],
//   [118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130],
//   [131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143],
//   [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156],
// ];

// function encontrarMaiorElemento(linha) {
//   return Math.max(...linha.map(Math.abs));
// }

// function dividirMaiorElemento(matrizM) {
//   let matrizNova = [];
//   matrizM.forEach((linha) => {
//     let maiorElementoAbs = encontrarMaiorElemento(linha);
//     let linhaModificada = linha.map((elemento) => elemento / maiorElementoAbs);
//     matrizNova.push(linhaModificada);
//   });

//   return matrizNova;
// }

// function imprimirMatriz(matrizM) {
//   matrizM.forEach((linha) => {
//     let linhaFormatada = linha.map((elemento) => elemento.toFixed(3));
//     console.log(linhaFormatada.join(', '));
//   });
// }

// let matrizNova = dividirMaiorElemento(matrizM);

// console.log(`\x1b[0;31;31mMatriz M:\x1b[m`);
// imprimirMatriz(matrizM);

// console.log(`\x1b[0;31;36mMatriz nova:\x1b[m`);
// imprimirMatriz(matrizNova);

// ! ======================================= Exercício 33 ============================================
// const prompt = require('prompt-sync')();

// let matriz = [];
// let multiDiagonalPrincipal = 1;

// function calcularMediaDiagonalSecundaria(matriz) {
//   let soma = 0;
//   for (let i = 0; i < matriz.length; i++) {
//     soma += matriz[i][matriz.length - 1 - i];
//   }

//   return soma / matriz.length;
// }

// function multiplicarDiagonalPrincipal(matriz, mediaDiagonalSecundaria) {
//   for (let i = 0; i < 3; i++) {
//     multiDiagonalPrincipal *= matriz[i][i] * mediaDiagonalSecundaria;
//   }

//   return multiDiagonalPrincipal;
// }

// for (let i = 0; i < 3; i++) {
//   matriz[i] = [];

//   for (let j = 0; j < 3; j++) {
//     matriz[i].push(
//       parseFloat(
//         prompt(`Digite o ${j + 1}º valor numérico da ${i + 1}ª coluna: `)
//       )
//     );
//   }
// }

// console.log();

// let mediaDiagSec = calcularMediaDiagonalSecundaria(matriz);
// console.log(`\x1b[0;31;31mMédia da diagonal secundária: \x1b[m${mediaDiagSec}`);

// let multiDiagPrincipal = multiplicarDiagonalPrincipal(matriz, mediaDiagSec);
// console.log(
//   `\x1b[0;31;36mResultado da diagonal principal multiplicada: \x1b[m${multiDiagPrincipal}`
// );

// console.log(`\x1b[0;31;32mMatriz: \x1b[m`);
// console.log(matriz);
// console.log();

// ! ======================================= Exercício 34 ============================================
// const prompt = require('prompt-sync')();

// let matriz = [];

// for (let i = 0; i < 50; i++) {
//   matriz[i] = [];
//   for (j = 0; j < 50; j++) {
//     matriz[i][j] = parseFloat((Math.random() * 50 + 1).toFixed(2));
//   }
// }

// function multiDiagonalPrincipal(matriz) {
//   for (let i = 0; i < matriz.length; i++) {
//     let diagonalPrincipal = matriz[i][i];
//     for (let j = 0; j < matriz[i].length; j++) {
//       matriz[i][j] *= diagonalPrincipal;
//       matriz[i][j] = parseFloat(matriz[i][j].toFixed(2));
//     }
//   }

//   return matriz;
// }

// console.log('\x1b[0;31;31mMatriz: \x1b[m');
// console.log(multiDiagonalPrincipal(matriz));

// ! ======================================= Exercício 35 ============================================
// const prompt = require('prompt-sync')();

// let vetorPar = [];
// let vetorImpar = [];
// let valor = null;

// function exibirValoresVetores(vetor, tipo) {
//   if (vetor.length === 0) {
//     console.log(`Valores ${tipo}: Vazio`);
//   } else {
//     const valores = vetor.filter((elemento) => elemento !== '');
//     console.log(`\x1b[0;31;36mValores ${tipo}:\x1b[m ${valores.join(', ')} `);
//   }
// }

// for (let i = 0; i < 30; i++) {
//   valor = parseInt(prompt(`Digite o ${i + 1}º valor: `));

//   if (valor % 2 === 0) {
//     vetorPar.push(valor);
//     if (vetorPar.length === 5) {
//       exibirValoresVetores(vetorPar, 'pares');
//       vetorPar = [];
//     }
//   } else {
//     vetorImpar.push(valor);
//     if (vetorImpar.length === 5) {
//       exibirValoresVetores(vetorImpar, 'ímpares');
//       vetorImpar = [];
//     }
//   }
// }
// ! ======================================= Exercício 36 ============================================
// const prompt = require('prompt-sync')();

// function lerVetor(tamanho) {
//   let vetorElementosInteiros = [];

//   for (let i = 0; i < tamanho; i++) {
//     vetorElementosInteiros.push(
//       parseInt(prompt(`Digite o ${i + 1}º valor do vetor: `))
//     );
//   }

//   return vetorElementosInteiros;
// }

// function contarAcertos(gabarito, respostas) {
//   let acertos = 0;

//   for (let i = 0; i < gabarito.length; i++) {
//     if (gabarito.includes(respostas[i])) {
//       acertos++;
//     }
//   }

//   return acertos;
// }

// const gabarito = lerVetor(13);

// let apostadores = [];
// let numeroCartao;
// let respostas;
// let acertos;

// console.log();

// for (let i = 0; i < 100; i++) {
//   numeroCartao = prompt(`Digite o número do cartão do apostador ${i + 1}: `);

//   respostas = lerVetor(13);
//   acertos = contarAcertos(gabarito, respostas);

//   apostadores.push({ numeroCartao, acertos });
// }

// console.log();

// apostadores.forEach((apostador) => {
//   console.log(
//     `O apostador do cartão ${apostador.numeroCartao} teve ${apostador.acertos} acertos`
//   );

//   if (apostador.acertos === 13) {
//     console.log(
//       `Apostador do cartão ${apostador.numeroCartao}: Parabéns, tu foi o GANHADOR`
//     );
//   }
// });

// ! ======================================= Exercício 37 ============================================
// const prompt = require('prompt-sync')();

// function lerVetorG(tamanho) {
//   let vetorG = [];

//   for (let i = 0; i < tamanho; i++) {
//     let elemento;

//     do {
//       elemento = prompt(
//         `Digite a ${i + 1}ª alternativa correta do gabarito da prova: `
//       ).toLowerCase();

//       if (elemento.length !== 1) {
//         console.log('Digite apenas um único caracter!');
//       }
//     } while (elemento.length !== 1);

//     vetorG.push(elemento);
//   }

//   return vetorG;
// }

// function contarAcertos(gabarito, respostas) {
//   let acertos = 0;

//   for (let i = 0; i < gabarito.length; i++) {
//     if (gabarito[i] === respostas[i]) {
//       acertos++;
//     }
//   }

//   return acertos;
// }

// const gabarito = lerVetorG(20);
// const numeroAlunos = 2;
// const acertosAlunos = [];
// const mediaAcertos = 12;

// for (let i = 0; i < numeroAlunos; i++) {
//   console.log(`Aluno ${i + 1}: `);
//   const respostas = lerVetorG(20);
//   const acertos = contarAcertos(gabarito, respostas);
//   acertosAlunos.push(acertos);
// }

// console.log();
// for (let i = 0; i < numeroAlunos; i++) {
//   console.log(`Aluno ${i + 1} teve ${acertosAlunos[i]} acertos`);
// }

// console.log();

// for (let i = 0; i < numeroAlunos; i++) {
//   if (acertosAlunos[i] >= mediaAcertos) {
//     console.log(`Aluno ${i + 1}: APROVADO`);
//   } else {
//     console.log(`Aluno ${i + 1}: 'REPROVADO'`);
//   }
// }

// ! ======================================= Exercício 37 ============================================

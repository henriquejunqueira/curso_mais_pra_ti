const prompt = require('prompt-sync')();

let numero;

do {
  numero = parseInt(prompt('Digite um número: '));
  if (numero % 2 == 0) {
    console.log(`${numero} é par`);
  } else if (numero % 2 == 1) {
    console.log(`${numero} é ímpar`);
  }
} while (numero === null || numero >= 0);
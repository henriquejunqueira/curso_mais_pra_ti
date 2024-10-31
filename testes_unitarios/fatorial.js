function fat(fatorial) {
  let resultado = fatorial;

  for (let i = fatorial - 1; i > 0; i--) {
    resultado *= i;
  }

  return resultado;
}

module.exports = fat;

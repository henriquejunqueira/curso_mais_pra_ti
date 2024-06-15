// function* myGenerator() {
//   let i = 0;
//   while (true) {
//     yield i++; // ! yield retorna o valor e pausa a função
//   }
// }

// let generator = myGenerator();

// let generatorValue = generator.next();

// console.log(generator);
// console.log(generatorValue);

// function* myGenerator() {
//   yield 5;
//   console.log('Voltamos para a função');
//   yield 10;
// }

// let generator = myGenerator();

// let generatorValue1 = generator.next();
// let generatorValue2 = generator.next();
// let generatorValue3 = generator.next();

// // console.log(generator);
// console.log(generatorValue1);
// console.log(generatorValue2);
// console.log(generatorValue3);

// function* myGenerator() {
//   yield [1, 2, 3, 4, 5];
// }

// function* myGenerator2() {
//   yield* [1, 2, 3, 4, 5];
// }

// let obj = myGenerator();
// let obj2 = myGenerator2();
// let obj3 = myGenerator3();

// let valorObj = obj.next();
// let valorObj2 = obj2.next();
// let valorObj3 = obj3.next();

// console.log(valorObj);
// console.log(valorObj2);
// console.log(valorObj3);

// function* fibonacci() {
//   let n1 = 1;
//   let n2 = 1;

//   while (true) {
//     let current = n2;
//     n2 = n1;
//     n1 += current;
//     yield current;
//   }
// }

// let fibo = fibonacci();
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());
// console.log(fibo.next());

function* chat() {
  let textoPagina = document.getElementById('textoPagina');

  let opcao = yield 'Olá, tudo bem?';

  if (opcao === 'Sim') {
    yield 'Ótimo';

    opcao = yield 'Como eu posso te ajudar? Quer uma piada?';

    if (opcao === 'Sim') {
      let piada;
      fetch('./piadas.json')
        .then((resposta) => resposta.json())
        .then((piadas) => {
          piada = piadas[Math.floor(Math.random() * 10)];
          console.log(piada.piada);
          textoPagina.innerHTML = `${piada.piada}`;
        });

      setTimeout(() => {
        console.log(piada.resposta);
        textoPagina.innerHTML = `${piada.resposta}`;
        console.log('Muito boa a piada! Ri muito mesmo, acredite.');
        textoPagina.innerHTML = `Muito boa a piada! Ri muito mesmo, acredite.`;
      }, 2000);
    }
  }
}

let chat1 = chat();

function iniciarChat() {
  let resposta = document.getElementById('resposta').value;
  let iteracao = chat1.next(resposta);
  console.log(iteracao);
}

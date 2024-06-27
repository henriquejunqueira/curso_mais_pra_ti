let promessa = new Promise((resolve, reject) => {
  //   try {
  //     setTimeout(() => {
  //       let resposta = {};

  //       if (false) {

  //       }
  //     }, 4000);
  //   } catch {
  //     setTimeout(() => {
  //       reject(e);
  //     }, 3000);
  //   }

  setTimeout(() => {
    let resposta = {};

    if (false) {
      resposta = {
        codigo: 404,
        erro: 'Objeto não encontrado',
      };

      reject(resposta);
    }

    resposta = {
      1: { id: 1, nome: 'Caio' },
      2: { id: 2, nome: 'Leonan' },
      3: { id: 3, nome: 'Rogério' },
    };

    resolve(resposta);
  }, 4000);
})
  .then(() => {
    let promessa2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let resposta = {};

        if (false) {
          resposta = {
            codigo: 1000,
            erro: 'Assistir One Piece',
          };

          reject(resposta);
        }

        resposta = {
          1: { id: 1, nome: 'Vanessa' },
          2: { id: 2, nome: 'Fernanda' },
          3: { id: 3, nome: 'Guilherme' },
        };

        resolve(resposta);
      }, 4000);
    })
      .then((dados) => {})
      .catch((erro) => {
        console.log(erro);
      });
  })
  .then(() => {
    console.log('then 2');
    return 'then 3';
  })
  .then((param) => {
    console.log(param);
  })
  .catch((erro) => {
    console.log(erro);
  });

console.log(promessa);

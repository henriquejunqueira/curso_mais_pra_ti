// function getMovies() {
//   const xmlHttp = new XMLHttpRequest();

//   xmlHttp.open('GET', 'filmes.json');

//   xmlHttp.onreadystatechange = () => {
//     if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
//       const JSONMovies = xmlHttp.responseText;

//       const objJSON = JSON.parse(JSONMovies);

//       for (let i in JSONMovies['filmes']['filme']) {
//         let item = objJSON['filmes']['filme'][i];

//         let divRow = document.createElement('div');
//         divRow.className = 'row';

//         let divCol = document.createElement('div');
//         divCol.className = 'col';

//         let p1 = document.createElement('p');
//         p1.innerHTML = '<strong>Título: </strong>' + item.titulo;

//         let p2 = document.createElement('p');
//         p2.innerHTML = '<strong>Resumo: </strong>' + item.resumo;

//         divRow.appendChild(divCol);
//         divCol.appendChild(p1);
//         divCol.appendChild(p2);

//         document.getElementById('list').appendChild(divRow);
//       }
//     }

//     if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
//       console.log('Ferrou, cham o dev');
//     }
//   };

//   xmlHttp.send();
// }

function getMovies() {
  const xmlHttp = new XMLHttpRequest();

  xmlHttp.open('GET', 'filmes.json');

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      const JSONMovies = xmlHttp.responseText;

      const objJSONMovies = JSON.parse(JSONMovies);

      for (let i in objJSONMovies.filmes) {
        let item = objJSONMovies.filmes[i];

        let divRow = document.createElement('div');
        divRow.className = 'row';
        let divCol = document.createElement('div');
        divCol.className = 'col';

        let p1 = document.createElement('p');
        p1.innerHTML = '<strong>Título: </strong>' + item.titulo;

        divRow.appendChild(divCol);
        divCol.appendChild(p1);

        document.getElementById('list').appendChild(divRow);
      }
    }

    if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
      console.log('Ferrou, chama o dev');
    }
  };

  xmlHttp.send();
}

function getMovies() {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', 'filmes.xml');

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      const XMLMovies = xmlHttp.responseText;

      const parser = new DOMParser();

      const DOMMovies = parser.parseFromString(XMLMovies, 'text/xml');

      const JSONMovies = xmlToJson(DOMMovies);

      for (let i in JSONMovies['filmes']['filme']) {
        let item = JSONMovies['filmes']['filme'][i];

        let divRow = document.createElement('div');
        divRow.className = 'row';

        let divCol = document.createElement('div');
        divCol.className = 'col';

        let p1 = document.createElement('p');
        p1.innerHTML = '<strong>Título: </strong>' + item['titulo']['#text'];

        let p2 = document.createElement('p');
        p2.innerHTML = '<strong>Resumo: </strong>' + item['resumo']['#text'];

        // let p3 = document.getElementById('p');
        // for (let j in JSONMovies['filmes']['filme']) {
        //   let itemArray = JSONMovies['genero'][i];
        //   p3.innerHTML =
        //     '<strong>Resumo: </strong>' + itemArray['genero']['#text'];
        // }

        // let p4 = document.getElementById('p');
        // p4.innerHTML = '<strong>Gênero: </strong>' + item['genero']['#text'];

        // let p5 = document.getElementById('p');
        // p5.innerHTML = '<strong>Elenco: </strong>' + item['elenco']['#text'];

        divRow.appendChild(divCol);
        divCol.appendChild(p1);
        divCol.appendChild(p2);
        // divCol.appendChild(p3);
        // divCol.appendChild(p4);
        // divCol.appendChild(p5);

        document.getElementById('list').appendChild(divRow);
      }
    }

    if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
      console.log('Ferrou, cham o dev');
    }
  };

  xmlHttp.send();
}

function mudaPagina(url) {
  document.getElementById('content').innerHTML = '';

  let pagina = new XMLHttpRequest();

  pagina.open('GET', url);

  pagina.onreadystatechange = () => {
    if (pagina.readyState == 4 && pagina.status == 200) {
      document.getElementById('content').innerHTML = pagina.responseText;
    }

    if (pagina.readyState == 4 && pagina.status == 404) {
      document.getElementById('content').innerHTML =
        'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.';
    }
  };

  // setTimeout(() => {
  //   pagina.send();
  // }, 3000);
  pagina.send();
}

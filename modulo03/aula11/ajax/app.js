function requisitar(url) {
  document.getElementById('content').innerHTML = '';

  if (!document.getElementById('loading')) {
    const imgLoading = document.createElement('img');
    imgLoading.id = 'loading';
    imgLoading.src = 'loading.gif';
    imgLoading.className = 'rounded mx-auto d-block';
    document.getElementById('content').appendChild(imgLoading);
  }

  let ajax = new XMLHttpRequest();

  ajax.open('GET', url);

  //   console.log(ajax.responseText);
  console.log(ajax.readyState);

  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4 && ajax.status == 200) {
      document.getElementById('content').innerHTML = ajax.responseText;
    }

    if (ajax.readyState == 4 && ajax.status == 404) {
      document.getElementById('content').innerHTML =
        'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.';
    }
  };
  setTimeout(() => {
    ajax.send();
  }, 3000);
}

function getAddress(cep) {
  let url = 'http://viacep.com.br/ws/' + cep + '/json/';

  const xmlHttp = new XMLHttpRequest();

  xmlHttp.open('GET', url);

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      let data = JSON.parse(xmlHttp.responseText);
      console.log(data);

      document.getElementById('endereco').value = data.logradouro;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('cidade').value = data.localidade;
      document.getElementById('uf').value = data.uf;
    }
  };

  xmlHttp.send();
}

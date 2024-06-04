class Task {
  constructor(nomeProduto, precoProduto, qtdEstoque) {
    this.nomeProduto = nomeProduto;
    this.precoProduto = precoProduto;
    this.qtdEstoque = qtdEstoque;
  }

  validateData() {
    for (let i in this) {
      if (this[i] === undefined || this[i] === '') {
        return false;
      }

      return true;
    }
  }
}

function registerTask() {
  const nomeProduto = document.getElementById('nomeProduto').value;
  const precoProduto = document.getElementById('precoProduto').value;
  const qtdEstoque = document.getElementById('qtdEstoque').value;

  const task = new Task(nomeProduto, precoProduto, qtdEstoque);

  if (task.validateData()) {
    Database.createTask(task);
  }
}

class Database {
  createTask(task) {
    localStorage.setItem(id, JSON.stringify(task));
  }
}

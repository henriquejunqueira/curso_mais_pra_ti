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
class Database {
  constructor() {
    const id = localStorage.getItem('id');

    if (id === null) {
      localStorage.setItem('id', 0);
    }
  }

  loadTasks() {
    const tasks = Array();

    const id = localStorage.getItem('id');

    for (let i = 1; i <= id; i++) {
      const task = JSON.parse(localStorage.getItem(i));

      if (task === null) {
        continue;
      }

      task.id = i;
      tasks.push(task);
    }

    return tasks;
  }

  createTask(task) {
    const id = getNextId();
    localStorage.setItem(id, JSON.stringify(task));
    localStorage.setItem('id', id);
  }

  removeTask(id) {
    localStorage.removeItem(id);
  }

  searchTasks(task) {
    let filteredTasks = Array();

    filteredTasks = this.loadTasks();

    if (task.nomeProduto !== '') {
      filteredTasks = filteredTasks.filter(
        (t) => t.nomeProduto === task.nomeProduto
      );
    }

    if (task.precoProduto !== '') {
      filteredTasks = filteredTasks.filter(
        (t) => t.precoProduto === task.precoProduto
      );
    }

    if (task.qtdEstoque !== '') {
      filteredTasks = filteredTasks.filter(
        (t) => t.qtdEstoque === task.qtdEstoque
      );
    }

    return filteredTasks;
  }
}

const database = new Database();

function getNextId() {
  const nextId = localStorage.getItem('id');
  return parseInt(nextId) + 1;
}

function registerTask() {
  const nomeProduto = document.getElementById('nomeProduto').value;
  const precoProduto = document.getElementById('precoProduto').value;
  const qtdEstoque = document.getElementById('qtdEstoque').value;

  const task = new Task(nomeProduto, precoProduto, qtdEstoque);

  if (task.validateData()) {
    database.createTask(task);
  }
}

function loadTasks(tasks) {
  if (tasks === undefined) {
    return tasks;
  }

  const listTasks = document.getElementById('listTasks');
  listTasks.innerHTML = '';

  tasks.forEach((t) => {
    const row = listTasks.insertRow();

    row.insertCell(0).innerHTML = `${t.nomeProduto}`;
    row.insertCell(1).innerHTML = `${t.precoProduto}`;
    row.insertCell(2).innerHTML = `${t.qtdEstoque}`;

    const btn = document.createElement('button');

    btn.className = 'btn btn-danger';
    btn.id = t.id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
      const id = t.id;
      database.removeTask(id);

      window.location.reload();
    };

    row.insertCell(3).append(btn);
  });
}

function searchTasks() {
  const nomeProduto = document.getElementById('nomeProduto').value;
  const precoProduto = document.getElementById('precoProduto').value;
  const qtdEstoque = document.getElementById('qtdEstoque').value;

  const task = new Task(nomeProduto, precoProduto, qtdEstoque);

  const tasks = database.searchTasks(task);

  loadTasks(tasks);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.contains(document.getElementById('listTasks'))) {
    loadTasks();
  }
});

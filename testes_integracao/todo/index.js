const express = require('express');
const router = express.Router();

// Dados em memória para simular o banco de dados
let tasks = [];
let currentId = 1;

// Listar todas as tarefas - GET /tasks
router.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// Criar uma nova tarefa - POST /tasks
router.post('/tasks', (req, res) => {
  const { title, completed = false } = req.body;
  const newTask = { id: currentId++, title, completed };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Atualizar uma tarefa - PUT /tasks/:id
router.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });

  task.title = title ?? task.title;
  task.completed = completed ?? task.completed;

  res.status(200).json(task);
});

// Deletar uma tarefa - DELETE /tasks/:id
router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id !== parseInt(id));
  res.status(204).end();
});

module.exports = router;

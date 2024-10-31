const express = require('express');
const taskRoutes = require('./index'); // Importa as rotas

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para parsing do JSON
app.use('/', taskRoutes); // Usa as rotas definidas no index.js

const server = app.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);

module.exports = { app, server }; // Exporte o servidor para os testes

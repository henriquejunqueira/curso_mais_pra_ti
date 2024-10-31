const express = require('express'); // Importa o módulo Express para criar o servidor
const app = express(); // Cria uma instância do aplicativo Express
const PORT = 3000; // Define a porta na qual o servidor irá rodar

// Middleware para permitir JSON no corpo das requisições
app.use(express.json());

// Simulação de um banco de dados na memória
let usuarios = [
  { id: 1, nome: 'Henrique', email: 'henrique@email.com' },
  { id: 2, nome: 'Maria', email: 'maria@email.com' },
];

// Rota GET para listar todos os usuários
app.get('/usuarios', (req, res) => {
  res.status(200).json(usuarios); // Retorna a lista completa de usuários com status 200 (OK)
});

// Rota GET para obter um usuário pelo ID
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id); // Extrai o ID do parâmetro da URL e converte para número
  const usuario = usuarios.find((u) => u.id === id); // Procura o usuário correspondente ao ID

  // Se o usuário não for encontrado, retorna status 404 (Não encontrado)
  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  res.status(200).json(usuario); // Se encontrado, retorna o usuário com status 200 (OK)
});

// Rota POST para criar um novo usuário
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body; // Extrai nome e email do corpo da requisição

  // Verifica se nome e email foram fornecidos, senão retorna erro 400 (Requisição inválida)
  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  // Cria um novo usuário com ID incrementado
  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
  };

  usuarios.push(novoUsuario); // Adiciona o novo usuário à lista
  res.status(201).json(novoUsuario); // Retorna o usuário criado com status 201 (Criado)
});

// Rota PUT para atualizar um usuário existente
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id); // Extrai o ID do parâmetro da URL e converte para número
  const { nome, email } = req.body; // Extrai nome e email do corpo da requisição
  const usuario = usuarios.find((u) => u.id === id); // Procura o usuário correspondente ao ID

  // Se o usuário não for encontrado, retorna status 404 (Não encontrado)
  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  // Atualiza os campos nome e email se fornecidos
  usuario.nome = nome || usuario.nome;
  usuario.email = email || usuario.email;

  res.status(200).json(usuario); // Retorna o usuário atualizado com status 200 (OK)
});

// Rota DELETE para remover um usuário pelo ID
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id); // Extrai o ID do parâmetro da URL e converte para número
  const index = usuarios.findIndex((u) => u.id === id); // Encontra o índice do usuário na lista

  // Se o usuário não for encontrado, retorna status 404 (Não encontrado)
  if (index === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  usuarios.splice(index, 1); // Remove o usuário da lista usando o índice encontrado
  res.status(204).send(); // Retorna status 204 (Sem conteúdo) para indicar que a remoção foi bem-sucedida
});

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});

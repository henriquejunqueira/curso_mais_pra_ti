const request = require('supertest');
const { app, server } = require('./server'); // Importa app e servidor

describe('API To-Do List', () => {
  let taskId;

  afterAll((done) => {
    server.close(done); // Garante que o servidor será fechado
  });

  it('Deve retornar todas as tarefas existentes', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Deve criar uma nova tarefa corretamente', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Nova tarefa', completed: false });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Nova tarefa');
    expect(res.body.completed).toBe(false);

    taskId = res.body.id;
  });

  it('Deve atualizar uma tarefa existente', async () => {
    const res = await request(app)
      .put(`/tasks/${taskId}`)
      .send({ title: 'Tarefa atualizada', completed: true });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Tarefa atualizada');
    expect(res.body.completed).toBe(true);
  });

  it('Deve remover uma tarefa específica', async () => {
    const res = await request(app).delete(`/tasks/${taskId}`);
    expect(res.statusCode).toBe(204);

    const checkRes = await request(app).get('/tasks');
    expect(checkRes.body.find((t) => t.id === taskId)).toBeUndefined();
  });
});

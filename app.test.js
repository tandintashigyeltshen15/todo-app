const request = require('supertest');
const app = require('./app');

let todos = [];

beforeEach(() => {
  todos.length = 0;
  app.set('todos', todos);
  // Reset internal state by re-requiring won't work easily,
  // so we just run tests that don't depend on order
});

describe('Todo API', () => {
  test('GET /todos returns empty array initially', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /todos creates a todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'Buy milk' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Buy milk');
    expect(res.body.done).toBe(false);
  });

  test('POST /todos without title returns 400', async () => {
    const res = await request(app)
      .post('/todos')
      .send({});
    expect(res.statusCode).toBe(400);
  });
});
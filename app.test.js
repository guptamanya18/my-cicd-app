// app.test.js
const request = require('supertest');
const app = require('./app');
 
describe('Application Routes', () => {
  test('GET / returns hello message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from my CI/CD pipeline!');
  });
 
  test('GET /health returns healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});

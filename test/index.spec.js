// Desc: Test for the serverless routes

const request = require('supertest');

const app = require('../src/routes/routes.prb');

describe('Serverless Routes', () => {
  it('should return a list of users in spanish', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);

  })
  it('should return a list of starships in spanish', async () => {
    const response = await request(app).get('/starship/9/');
    expect(response.status).toBe(200);

  })

  it('should return a list of suppliers in spanish', async () => {
    const response = await request(app).get('/get-supplier');
    expect(response.status).toBe(200);

  })

  it('should return a list of suppliers in spanish', async () => {
    const response = await request(app).post('/create-supplier').send({
      name: "test",
      lastname: "test",
      mail: "test",
      password: "test"
    });
    expect(response.status).toBe(200);

  })


})



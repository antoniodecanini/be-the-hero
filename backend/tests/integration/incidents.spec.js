const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incidents', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterEach(async () => {
    await connection.destroy();
  });

  it('should be able to create a new Incident', async () => {
    const response = await request(app)
    .post('/incidents')
    .set('Authorization', 'a94fe9bd')
    .send({
      title: "Cadelesa",
      description: "Cadelecas Atropelex",
      value: "300",
    });

    expect(response.body).toHaveProperty('id');
  })
});
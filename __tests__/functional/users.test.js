const supertest = require('supertest')
const app = require('../../src/app');

const request = supertest(app)

describe('User Functional', () => {
  it('should return all users', async () => {
    const response = await request.get('/users')
    expect(response.body).toEqual(expect.objectContaining([{
      email: expect.any(String),
      name: expect.any(String)
    }]))
  })
})
const request = require('supertest')

jest.mock('../../server/db/greeting', () => ({
  getGreetings: () => Promise.resolve([
    {id: 1, text: 'test text 1'},
    {id: 2, text: 'test text 2'}
  ])
}))

const server = require('../../server/server')

test('GET /', () => {
  return request(server)
    .get('/api/greetings')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

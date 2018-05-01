import {getGreetings, receiveGreetings} from '../../client/actions/greetings'
import nock from 'nock'

test('Receive Greetings action creator', () => {
  const fakeGreetings = [
    'Hello',
    'Howdy'
  ]

  const expected = {
    type: 'RECEIVE_GREETINGS',
    greetings: fakeGreetings
  }

  const actual = receiveGreetings(fakeGreetings)

  expect(actual).toEqual(expected)
})

test('getGreetings will dispatch an action on success', () => {
  const fakeGreetings = [
    'Hello',
    'Greetings'
  ]
  const scope = nock('http://localhost:80')
    .get('/api/greetings')
    .reply(200, fakeGreetings);

  const expectedAction = {
    type: 'RECEIVE_GREETINGS',
    greetings: fakeGreetings
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getGreetings()(dispatch)

})

test('getGreetings error', () => {
  const scope = nock('http://localhost:80')
    .get('/api/greetings')
    .reply(404);

  const actual = getGreetings()()
  expect(actual).toBe(undefined)
})

import {getGreetings} from '../../client/actions/greetings'
import nock from 'nock'

test('getGreetings will dispatch an action', () => {
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
    })

  getGreetings()(dispatch)

})

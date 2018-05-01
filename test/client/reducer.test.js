import greetingsReducer from '../../client/reducers/greetings'

test('Reducer Initial State', () => {
  const expected = []

  const actual = greetingsReducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_GREETINGS', () => {
  const fakeGreetings = [
    'Hello',
    'Howdy'
  ]
  const expected = [...fakeGreetings]

  const action = {
    type: 'RECEIVE_GREETINGS',
    greetings: fakeGreetings
  }

  const actual = greetingsReducer(undefined, action)

  expect(actual).toEqual(expected)
})

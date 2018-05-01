import React from 'react'
import { shallow, mount } from 'enzyme'

import {Greetings} from '../../client/components/Greetings'
import './setup-dom'

import configureStore from  'redux-mock-store'

const mockStore = configureStore([])

jest.mock('../../client/actions/greetings.js', () => ({
  getGreetings: () => ({
    type: 'FAKE_ACTION'
  })
}))

test('Greetings.jsx with no greetings', () => {
  const store = mockStore()

  const wrapper = shallow(<Greetings
    greetings={[]}
    dispatch={store.dispatch}
  />)

  expect(wrapper.find('button').text()).toBe('Show Greetings')

  wrapper.find('button').simulate('click')
  expect(store.getActions()).toHaveLength(1)
  expect(store.getActions()[0]).toEqual({
    type: 'FAKE_ACTION'
  })
  // expect(wrapper.find('h1').text()).toBe('Hello World')
})

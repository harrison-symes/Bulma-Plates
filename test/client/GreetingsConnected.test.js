import React from 'react'
import { shallow, mount } from 'enzyme'

import Greetings from '../../client/components/Greetings'
import './setup-dom'

import {Provider} from 'react-redux'

import configureStore from  'redux-mock-store'

const mockStore = configureStore([])

jest.mock('../../client/actions/greetings.js', () => ({
  getGreetings: () => ({
    type: 'FAKE_ACTION'
  })
}))

test('Greetings.jsx with no greetings', () => {
  const store = mockStore({
    greetings: [{text: 'Hello'}]
  })

  const wrapper = mount(
    <Provider store={store}>
      <Greetings />
    </Provider>
  )

  expect(wrapper.find('button').text()).toBe('Show Greetings')

  expect(wrapper.find('h1').first().text()).toBe('Hello')

  wrapper.find('button').simulate('click')
  expect(store.getActions()).toHaveLength(1)
  expect(store.getActions()[0]).toEqual({
    type: 'FAKE_ACTION'
  })
})

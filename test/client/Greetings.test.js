import React from 'react'
import { shallow, mount } from 'enzyme'

import {Greetings} from '../../client/components/Greetings'
import './setup-dom'

import configureStore from  'redux-mock-store'

const mockStore = configureStore([])

test('Greetings.jsx with no greetings', () => {
  const store = mockStore()

  const wrapper = shallow(<Greetings
    greetings={[]}
    dispatch={store.dispatch}
  />)

  expect(wrapper.find('button').text()).toBe('Show Greetings')

  // expect(wrapper.find('h1').text()).toBe('Hello World')
})

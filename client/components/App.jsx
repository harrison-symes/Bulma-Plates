import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Cats from './Cats'
import AddCatButton from './AddCatButton'
import DeleteCatButton from './DeleteCatButton'

const App = () => (
  <Router>
    <div className='app-container section'>
      <h1>Hello World</h1>
      <AddCatButton />
      <Cats />
    </div>
  </Router>
)

export default App

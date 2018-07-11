import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <Router>
    <div className='app-container section'>
      <h1>Hello World</h1>
      {/* <Route exact path="/" component={ComponentToRender} /> */}
    </div>
  </Router>
)

export default App

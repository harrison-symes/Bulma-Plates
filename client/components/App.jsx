import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import {connect} from 'react-redux'
import {getBirds} from '../actions/birds'

import Birds from './Birds'

class App extends React.Component {
  componentWillMount() {
    this.props.getAnimals()
  }
  render() {
    return (
      <Router>
        <div className='app-container section has-text-centered'>
          <h1 className="title is-1 has-text-info">Hello World</h1>
          <Birds />
        </div>
      </Router>
    )
  }
}

const dispatchToProps = (dispatch) => ({
  getAnimals: () => {
    dispatch(getBirds())
  }
})

export default connect(undefined, dispatchToProps)(App)

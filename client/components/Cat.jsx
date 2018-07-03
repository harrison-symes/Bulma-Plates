import React from 'react'
import {connect} from 'react-redux'

import {deleteCatAction, HarrisonifyAction} from '../actions/cats'

function Cat ({cat, dispatch}) {
  return <div>
    <h1>{cat.name}</h1>
    <button onClick={() => dispatch(deleteCatAction(cat.name))}>Delete Me! :)</button>
    {/* <button onClick={() => dispatch(HarrisonifyAction(cat))}>Harrisonify</button> */}
  </div>
}

export default connect()(Cat)

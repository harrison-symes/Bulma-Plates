import React from 'react'
import {connect} from 'react-redux'

import {deleteCatAction} from '../actions/cats'

function DeleteCatButton ({dispatch}) {
  return <button onClick={() => dispatch(deleteCatAction('Kelly'))}>Delete Cat</button>
}

export default connect()(DeleteCatButton)

import React from 'react'
import {connect} from 'react-redux'
import {addCatAction, deleteCatAction} from '../actions/cats'

class AddCatButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  submit(e) {
    e.preventDefault()
    this.props.dispatch(addCatAction({
      name: this.state.name
    }))
  }
  updateDetails(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return <div>
      <form onSubmit={this.submit.bind(this)}>
        <input onChange={this.updateDetails.bind(this)} type="text" name="name" />
        <input type="submit" value="Make ME a KITTY" />
      </form>
      <button onClick={() => this.props.dispatch(deleteCatAction(this.state.name))}>Delete Cat</button>
    </div>
  }
}

export default connect()(AddCatButton)

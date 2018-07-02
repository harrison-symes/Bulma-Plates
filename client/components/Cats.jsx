import React from 'react'
import {connect} from 'react-redux'

import Cat from './Cat'

function Cats (props) {
  return <div>
    {props.cats.map(cat => <Cat cat={cat} />)}
  </div>
}

//React above this line


//Redux below this line
const mapStateToProps = (state) => {
  return {
    cats: state.cats
  }
}

export default connect(mapStateToProps)(Cats)


// const connectedProps = connect()
// const connectedComponent = connectedProps(Cats)
// export default connectedComponent

import React from 'react'

import {connect} from 'react-redux'

import {deleteBird} from '../actions/birds'

const Birds = ({birds, del}) => (
  <div className="columns">
    {birds.map(({id, name, image_url}) => <div className="box column is-4 has-text-centered" key={id}>
      <h1 className="subtitle is-2">{name}</h1>
      <img className="image" src={image_url} />
      <button className="delete" onClick={() => del(id)}>Del</button>
    </div>)}
  </div>
)

const mapStateToProps = ({birds}) => ({birds})

const mapDispatchToProps = (dispatch) => ({
  del: id => dispatch(deleteBird(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Birds)

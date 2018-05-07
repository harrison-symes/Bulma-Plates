import request from 'superagent'

export function receiveBirds (birds) {
  return {
    type: 'RECEIVE_BIRDS',
    birds
  }
}

export function getBirds () {
  return dispatch => {
    request
      .get('/api/birds')
      .then(res => {
        dispatch(receiveBirds(res.body))
      })
  }
}

export function removeBird (id) {
  return {
    type: 'REMOVE_BIRD',
    id
  }
}

export function deleteBird(id) {
  return dispatch => {
    request
      .delete('/api/birds/' + id)
      .then(res => {
        dispatch(removeBird(id))
      })
  }
}

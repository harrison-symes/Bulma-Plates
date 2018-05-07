import request from 'superagent'

//Below are an example of both an action creator and an async request


//action:

// export const actionCreator = (props) => {
//   return {
//     type: 'REDUCER_CASE',
//     variable: props
//   }
// }


//Request:

// export function asyncRequest () {
//   return (dispatch) => {
//     request
//       .get(`/api/path`)
//       .then(res => {
//          res.body will be the data response
//          dispatch(actionCreator(res.body))
//       })
//       .catch(err => {
//          err is an error
//       })
//   }
// }

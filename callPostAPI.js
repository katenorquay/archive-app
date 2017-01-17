import request from 'superagent'

function callPostAPI(dispatch, userInput, state) {
  dispatch({type: 'REQUEST_INIT'})
  dispatch({type: 'CHANGE_PAGE', payload: '/loading'})
  request
    .post(`http://localhost:3000/api/v1/designs/`)
    .send(userInput)
    .end((err, res) => {
      if (err) {
        dispatch({type: 'REQUEST_UNSUCCESSFUL'})
      } else {
        dispatch({type: 'REQUEST_SUCCESSFUL', payload: res.body})
        dispatch({type: 'CHANGE_PAGE', payload: '/designs'})
      }
    })
}

module.exports = callPostAPI

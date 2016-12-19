import request from 'superagent'

function callAPI(dispatch, userInput, state) {
  dispatch(type: 'REQUEST_INIT')
  request
    .post(`the route tbc`)
    .send(userInput)
    .end((err, res) => {
      if (err) {
        dispatch(type: 'REQUEST_UNSUCCESSFUL')
      } else {
        dispatch({type: 'REQUEST_SUCCESSFUL', payload: res.body})
        dispatch({type: 'CHANGE_PAGE', payload: '/results'})
      }
    })
}

module.exports = callAPI

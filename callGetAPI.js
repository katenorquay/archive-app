import request from 'superagent'

function callGetAPI(dispatch, userInput, state) {
  request
    .get(`http://localhost:3000/api/v1/designs/${userInput.year}`)
    .end((err, res) => {
      if (err) console.log(err)
      dispatch({type: 'REQUEST_SUCCESSFUL', payload: res.body})
      dispatch({type: 'CHANGE_PAGE', payload: '/results'})
    })
}

module.exports = callGetAPI
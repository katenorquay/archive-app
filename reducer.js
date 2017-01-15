
module.exports = (state, action) => {
  const newState = require('clone')(state)
  const {type, payload} = action
  switch (type) {
    case 'CHANGE_PAGE':
      newState.currentPage = payload
      return newState
    case 'REQUEST_INIT':
      newState.requestInProgress = true
      return newState
    case 'REQUEST_SUCCESSFUL':
      newState.requestInProgress = false
      newState.requestUnsuccessful = false
      newState.screenshots = payload
    return newState
      case 'REQUEST_UNSUCCESSFUL':
      newState.requestInProgress = false
      newState.requestUnsuccessful = true
    return newState
    default:
      return newState
  }
}

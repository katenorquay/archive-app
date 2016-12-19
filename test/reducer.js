var test = require('tape')
var reducer = require('../reducer')
var freeze = require('deep-freeze')

test('base test', function (t) {
  t.ok(true)
  t.end()
})

test('tests CHANGE_PAGE case', function (t) {
  var initialState = {
    currentPage: '/',
  }
  freeze(initialState)
  var expected = {
    currentPage: '/results',
  }
  var actual = reducer(initialState, {type: 'CHANGE_PAGE', payload: '/results'})
  t.deepEqual(actual, expected, 'CHANGE_PAGE changes page correctly')
  t.end()
})

test('REQUEST_INIT', function (t) {
  var initialState = {
    requestInProgress: false
  }
  // arrange
  const expectedRequestInProgress = true
  freeze(initialState)
  const action = {type: 'REQUEST_INIT'}
  // act
  const newState = reducer(initialState, action)
  // assert
  t.equal(newState.requestInProgress, expectedRequestInProgress, 'changes request in progress to true')
  t.end()
})

test('REQUEST_SUCCESSFUL', function (t) {
  var initialState = {
    requestInProgress: true,
    requestUnsuccessful: true
  }
  // arrange
  const expectedRequestInProgress = false
  const expectedRequestUnsuccessful = false
  freeze(initialState)
  const userData = {
    userId: 1,
    name: 'lord master',
    profilePic: 'http://abdindia.com/wp-content/uploads/2014/01/lord.jpg',
    bio: 'Im good at things!'
  }
  const action = {type: 'REQUEST_SUCCESSFUL', payload: userData}
  // act
  const newState = reducer(initialState, action)
  // assert
  t.equal(newState.requestInProgress, expectedRequestInProgress, 'Request succesful changes state to requestInProgress to false')
  t.equal(newState.requestUnsuccessful, expectedRequestUnsuccessful, 'Request succesful changes state to RequestUnsuccessful to false')
  t.deepEqual(newState.currentUser, userData, 'Request successful adds the data from payload to the screenshots array')
  t.end()
})

test('REQUEST_UNSUCCESSFUL', function (t) {
  var initialState = {
    requestInProgress: true,
    requestUnsuccessful: false
  }
  // arrange
  const expectedRequestInProgress = false
  const expectedRequestUnsuccessful = true
  freeze(initialState)
  const action = {type: 'REQUEST_UNSUCCESSFUL'}
  // act
  const newState = reducer(initialState, action)
  // assert
  t.equal(newState.requestInProgress, expectedRequestInProgress, 'Request unsuccesful changes state to requestInProgress to false')
  t.equal(newState.requestUnsuccessful, expectedRequestUnsuccessful, 'Request unsuccesful changes state to loginUnsuccessful to true')
  t.end()
})

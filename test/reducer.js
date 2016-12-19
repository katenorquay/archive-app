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
    lifestyles: [],
    currentUser: {}
  }
  var actual = reducer(initialState, {type: 'CHANGE_PAGE', payload: '/results'})
  t.deepEqual(actual, expected, 'CHANGE_PAGE changes page correctly')
  t.end()
})

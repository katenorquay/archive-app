import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducer'
import sheetRouter from 'sheet-router'

import Search from './components/Search'
import Results from './components/Results'

const main = document.querySelector('main')

var initialState = {
  currentPage: '/',
  requestInProgress: false,
  requestUnsuccessful: false,
  screenshots: []
}


const {dispatch, getState, subscribe} = createStore(reducer, initialState)

const route = sheetRouter({default: '/404'}, [
  ['/', (params) => Search],
  ['/designs', (params) => Results],
  ['/designs/:id', (params) => singleDesign]
])

subscribe(() => {
  const currentPage = getState().currentPage
  var Component = route(currentPage)
  render(<Component state={getState()} dispatch={dispatch} />, main)
})

dispatch({type: 'INIT'})

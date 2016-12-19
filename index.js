import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducer'
import sheetRouter from 'sheet-router'

import HomePage from './components/HomePage'

const main = document.querySelector('main')

var initialState = {
  currentPage: '/'
}


const {dispatch, getState, subscribe} = createStore(reducer, initialState)

const route = sheetRouter({default: '/404'}, [
  ['/', params => HomePage]
])

subscribe(() => {
  const currentPage = getState().currentPage
  var Component = route(currentPage)
  render(<Component name='Hello World' state={getState()} dispatch={dispatch} />, main)
})

dispatch({type: 'INIT'})

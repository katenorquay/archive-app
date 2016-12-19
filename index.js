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
  screenshots: [
    {
    title: 'Trademe',
    year: 2000,
    image: 'http://static.tumblr.com/uhg4bc4/50wm2srxg/the-design-nerd_smallest.jpg'
    },{
    title: 'Trademe',
    year: 2001,
    image: 'http://static.tumblr.com/uhg4bc4/50wm2srxg/the-design-nerd_smallest.jpg'
    },{
    title: 'Trademe',
    year: 2002,
    image: 'http://static.tumblr.com/uhg4bc4/50wm2srxg/the-design-nerd_smallest.jpg'
    },{
    title: 'Trademe',
    year: 2003,
    image: 'http://static.tumblr.com/uhg4bc4/50wm2srxg/the-design-nerd_smallest.jpg'
    },{
    title: 'Trademe',
    year: 2004,
    image: 'http://static.tumblr.com/uhg4bc4/50wm2srxg/the-design-nerd_smallest.jpg'
    },{
    title: 'Trademe',
    year: 2005,
    image: 'http://static.tumblr.com/uhg4bc4/50wm2srxg/the-design-nerd_smallest.jpg'
    }
  ]
}


const {dispatch, getState, subscribe} = createStore(reducer, initialState)

const route = sheetRouter({default: '/404'}, [
  ['/', (params) => Search],
  ['/results', (params) => Results]
])

subscribe(() => {
  const currentPage = getState().currentPage
  var Component = route(currentPage)
  render(<Component state={getState()} dispatch={dispatch} />, main)
})

dispatch({type: 'INIT'})

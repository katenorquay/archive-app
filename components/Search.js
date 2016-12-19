import React from 'react'
import Header from './Header'
import callAPI from '../callAPI'

function Search({state, dispatch}) {
  function urlSearch(e) {
    e.preventDefault()
    var userInput = {
      url: document.getElementById('url').value
    }
    callAPI(dispatch, userInput, state)
  }

  function yearSearch(e) {
    e.preventDefault()
    var userInput = {
      year: document.getElementById('year').value
    }
    callAPI(dispatch, userInput, state)
  }

  return (
  <div>
    <Header />
    <div className='info'>
      <h3>How It Works:</h3>
      <p>Enter a url that you are interested in seeing throughout time, or a time period that you want to see. This app will use the wayback machine to show archived screenshots of your desired site/time period</p>
    </div>
    <form>
     <input placeholder='Enter Url' type='text' id='url'></input>
     <input type='submit' value='submit' onClick={urlSearch}/>
    </form>
    <form>
     <input placeholder='Enter Year' type='text' id='year'></input>
     <input type='submit' value='submit' onClick={yearSearch}/>
    </form>
  </div>
)}

module.exports = Search

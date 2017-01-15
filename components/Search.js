import React from 'react'
import Loader from 'halogen/PulseLoader'

import Header from './Header'
import callPostAPI from '../callPostAPI'
import callGetAPI from '../callGetAPI'

function Search({state, dispatch}) {

  const inProgressClass = state.requestInProgress ? 'loadingPulse' : 'hidden'
  const successClass = state.requestUnsuccessful ? '' : 'hidden'

  function urlSearch(e) {
    e.preventDefault()
    var userInput = {
      url: document.getElementById('url').value
    }
    console.log(url)
    callPostAPI(dispatch, userInput, state)
  }

  function yearSearch(e) {
    e.preventDefault()
    var userInput = {
      year: document.getElementById('year').value
    }
    callGetAPI(dispatch, userInput, state)
  }

  return (
  <div>
    <Header />
    <div className='info'>
      <h3>How It Works:</h3>
      <p>Enter a url that you are interested in seeing throughout time, or a time period that you want to see. This app will use the wayback machine to show archived screenshots of your desired site/time period</p>
    </div>
    <form>
     <input placeholder='Enter Url' type='text' id='url'/>
     <input type='submit' value='submit' onClick={urlSearch}/>
    </form>
    <form>
     <input placeholder='Enter Year' type='text' id='year'/>
     <input type='submit' value='submit' onClick={yearSearch}/>
     <Loader className={inProgressClass}/>
     <p className={successClass}>Something went wrong</p>
    </form>
  </div>
)}

module.exports = Search

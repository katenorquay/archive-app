import React from 'react'
import Header from './Header'
import callAPI from '../callAPI'

function Search({state, dispatch}) {
  function BeginSearch(e) {
    e.preventDefault()
    var userInput = {
      url: document.getElementById('url').value
    }
    callAPI(dispatch, userInput, state)
  }

  return (
  <div>
    <Header />
    <div className='info'>
      <h3>How It Works:</h3>
      <p>Enter a url, the years you are interested in seeing that site. This app will find screenshots archived on the wayback machine to show you a quick picture of your site through out time</p>
    </div>
    <form>
     <input placeholder='Enter Url' type='text' id='url'></input>
     <input type='submit' value='submit' onClick={BeginSearch}/>
    </form>
  </div>
)}

module.exports = Search

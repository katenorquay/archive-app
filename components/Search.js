import React from 'react'
import Header from './Header'

function Search(props) {
  function BeginSearch(e) {
    e.preventDefault()
    props.dispatch({type: 'CHANGE_PAGE', payload: '/results'})
  }
  return (
  <div>
    <Header />
    <div className='info'>
      <h3>How It Works:</h3>
      <p>Enter a url, the years you are interested in seeing that site, and how often you want to see it. This app will find screenshots archived on the wayback machine to show you a quick picture of your site through out time</p>
    </div>
    <form>
     <input placeholder='Enter Url' type='text'></input>
     <input type='submit' value='submit' onClick={BeginSearch}/>
    </form>
  </div>
)}

module.exports = Search

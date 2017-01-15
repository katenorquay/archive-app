import React from 'react'
import Header from './Header'

function Results({state, dispatch}) {
  console.log(state)
  return (
    <div>
    <Header/>
    {state.screenshots.designs.map(function (shot) {
      console.log(shot)
      return (
        <a href={shot.wayback_url}>
        <div className='screenshot-container'>
          <img className='screenshot-image' src={shot.image_url}></img>
          <div className='screenshot-info'>
            <h2>{shot.page_url}</h2>
            <h3>{shot.year}</h3>
          </div>
        </div>
        </a>
      )
    })}
    </div>
  )
}


module.exports = Results

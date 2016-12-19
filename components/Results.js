import React from 'react'
import Header from './Header'

function Results(props) {
  return (
    <div>
    <Header/>
    {props.state.screenshots.map(function (shot) {
      return (
        <div className='screenshot-container'>
          <img className='screenshot-image' src={shot.image}></img>
          <div className='screenshot-info'>
            <h3>{shot.title}</h3>
            <h3>{shot.year}</h3>
          </div>
        </div>
      )
    })}
    </div>
  )
}


module.exports = Results

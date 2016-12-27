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
        <div className='screenshot-container' onClick={ () => {
          dispatch({type:'CHANGE_PAGE', payload: `designs/${shot.id}`})
          dispatch({type:'VIEW_SINGLE_DESIGN', payload: shot.id})}}>
          <img className='screenshot-image' src={shot.image_url}></img>
          <div className='screenshot-info'>
            <h2>{shot.page_url}</h2>
            <h3>{shot.year}</h3>
          </div>
        </div>
      )
    })}
    </div>
  )
}


module.exports = Results

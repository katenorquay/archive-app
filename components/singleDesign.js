import React from 'react'
import Header from './Header'

function singleDesign({state, dispatch}) {
  console.log('hello')
  return state.screenshots.designs
    .filter(design => design.id === state.singleDesignId)
    .map(shot => {
      return (
        <div>
          <Header/>
          <div className='large-screenshot'>
            <img className='screenshot-image' src={shot.image_url}></img>
            <div className='screenshot-info'>
              <h2>{shot.page_url}</h2>
              <h3>{shot.year}</h3>
            </div>
          </div>
        </div>
      )
    })
}

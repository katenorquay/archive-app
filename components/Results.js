import React from 'react'
import Header from './Header'

function Results({state, dispatch}) {
  var {screenshots} = state
  const noResultsClass = screenshots.designs.length === 0 ? 'no-results' : 'hidden'
  console.log(screenshots.designs)
  return (
    <div>
      <Header/>
      <h2 className={noResultsClass}>Sorry, there are no designs for this year yet.</h2>
      {screenshots.designs
        .filter(design => screenshots.designs[0] || design.year !== screenshots.designs[0].year)
        .map((design) => {
          return (
            <a href={design.wayback_url}>
              <div className='screenshot-container'>
                <img className='screenshot-image' src={design.image_url}></img>
                <div className='screenshot-info'>
                  <h2>{design.page_url}</h2>
                  <h3>{design.year}</h3>
                </div>
              </div>
            </a>
          )
        })
      }
    </div>
  )
}


module.exports = Results

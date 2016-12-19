import React from 'react'

module.exports = ({state, dispatch}) =>
<div>
  return state.screenshots.map(function (shot) {
      <div>
      <img src ={shot.screenshot}></img>
      <h3>{shot.title}</h3>
      <h4>{shot.year}</h4>
      </div>
  })
</div>

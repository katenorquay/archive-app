import React from 'react'
import Loader from 'halogen/PulseLoader'

import Header from './Header'

function Loading({state, dispatch}) {
  const successClass = state.requestUnsuccessful ? '' : 'hidden'
  return (
    <div>
      <Header/>
      <Loader className='loadingPulse'/>
      <p className={successClass}>Something went wrong</p>
    </div>
  )
}

module.exports = Loading

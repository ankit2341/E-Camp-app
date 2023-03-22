import React from 'react'
import { useParams } from 'react-router-dom'

const ExploreStates = () => {
    const {state}=useParams();

  return (
    <div style={{color:"#fff"}}>{state}</div>
  )
}

export default ExploreStates
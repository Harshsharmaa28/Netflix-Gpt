import React from 'react'
//react use camel casing we can store trailer into store by dispatching actions
const VideoTitle = ({title,overview}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  )
}

export default VideoTitle

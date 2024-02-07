import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { useSelector } from 'react-redux'

const MovieCard = ({poster_path,title}) => {
  
  return (
    <div className=' z-50'>
      <img className='min-w-[80px] lg:min-w-[150px]' src={IMG_CDN + poster_path} alt={title} />
    </div>
  )
}

export default MovieCard

import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { useSelector } from 'react-redux'
import ShimmerWrapper from './ShimmerWrapper';

const MovieCard = ({ poster_path, title }) => {
  const handleHover = ()=>{
    <div>
      
    </div>
  }
  const movies = useSelector((store) => store.movies);
  return (
    <div className='z-50'>
      <img onMouseOver={handleHover} className='min-w-[80px] lg:min-w-[150px]' src={IMG_CDN + poster_path} alt={title} />
    </div>
  )
}

export default MovieCard

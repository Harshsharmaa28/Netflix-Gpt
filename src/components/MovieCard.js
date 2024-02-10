import React, { useState } from 'react'
import { IMG_CDN } from '../utils/constants'
import { useSelector } from 'react-redux'
import ShimmerWrapper from './ShimmerWrapper';

const MovieCard = ({ poster_path, title }) => {
  const [hover, setHover] = useState(false);

  const movies = useSelector((store) => store.movies);
  return (
    <div className=' z-10 bg-red-500'>
      <img onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className=' min-w-[80px] lg:min-w-[150px]' src={IMG_CDN + poster_path} alt={title} />
      {/* {hover && (
        <div className=' z-50 -mt-[20%] absolute  w-[100px] h-[300px] bg-white'>
        </div>
      )} */}
    </div>
  )
}

export default MovieCard

import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className=' mx-1 flex flex-col gap-4 my-2 lg:mx-16'>
      <h1 className=' ml-3 text-white font-semibold text-xl'>{title}</h1>
      <div className=''>
        <div className=' flex overflow-x-scroll gap-10 mx-4'>
          {movies?.slice().reverse().map((movie) => (
            movie.poster_path && <MovieCard key={movie.id} poster_path={movie.poster_path} title={movie.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList

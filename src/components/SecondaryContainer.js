import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
import Footer from './Footer';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  return (
    <div className=' bg-gray-950'>
      <div className=' lg:-mt-72 flex flex-col gap-2'>
      <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Trending This Month"} movies={movies?.TrendingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies?.TopratedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.PopularMovies}/>
      </div>
      <Footer/>
    </div>
  )
}

export default SecondaryContainer

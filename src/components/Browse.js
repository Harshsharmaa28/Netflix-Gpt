import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useUpcomingMovies } from "../hooks/useUpcomingMovies"
import { useTopratedMovies } from '../hooks/useTopratedMovies';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Loading from './Loading';

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovies();
  useTrendingMovies();
  const result = useSelector((store) => store.movies);
  
  return (
    <div>
      <Header />
      <>
          {showGptSearch ? <GptSearch /> : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
    </div>
  )
}

export default Browse

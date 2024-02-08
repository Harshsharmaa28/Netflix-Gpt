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
import { Shimmer } from 'react-shimmer';
import ShimmerWrapper from './ShimmerWrapper';

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovies();
  useTrendingMovies();
  const result = useSelector((store) => store.movies.TrendingMovies);
  
  return (
    <div>
      <Header />
      {result ? (
        // Render content when result is loaded
        <>
          {showGptSearch ? <GptSearch /> : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
      ) : (
        // Render a loading indicator while result is being fetched
        <ShimmerWrapper width={'100vw'} height={'100vh'}></ShimmerWrapper>
      )}
    </div>
  )
}

export default Browse

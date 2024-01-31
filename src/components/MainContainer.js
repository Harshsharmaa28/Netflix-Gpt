import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { connect, useSelector } from 'react-redux'

const MainContainer = () => {
    //data comes from redux store by using useSelector
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    
    if(!movies) return;
    const mainMovie = movies[0];
    // console.log(mainMovie)
    
    const {original_title ,overview, id} = mainMovie;
    
  return (
    <div className=' bg-red-500'>
      <VideoTitle overview={overview} title={original_title} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer

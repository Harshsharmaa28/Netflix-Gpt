import React from 'react'
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div className=''>
      <div className=''>
        <img className=' fixed h-screen w-screen object-cover' src="./assests/bg.jpg" alt="Loading" />
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </div>
  )
}

export default GptSearch

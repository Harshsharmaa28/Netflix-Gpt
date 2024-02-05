import React from 'react'
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img src="./assests/bg.jpg" alt="" />
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </div>
  )
}

export default GptSearch

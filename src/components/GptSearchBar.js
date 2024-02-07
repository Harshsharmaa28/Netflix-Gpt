import React from 'react'
import { useRef } from 'react';
const GptSearchBar = () => {
  const searchText = useRef(null);

  const handleGptSearchClick = () =>{

  }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" z-10 w-[90vw] md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" outline-0 p-4 m-4 col-span-9"
          // placeholder={lang[langKey].gptSearchPlaceholder}
          placeholder='Search Movies Show & More'
        />
        <button
          className="col-span-3 m-4 py-2 md:px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
          {/* {lang[langKey].search} */}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar

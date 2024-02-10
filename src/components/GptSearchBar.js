import React, { useState } from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { openai } from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from "../utils/gptSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [error,seterror] = useState(false);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  }
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value)
    if(!searchText.current.value) return null;

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      let gptResults;
      try {
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-3.5-turbo",
        });
      
        // Handle successful response
        console.log("GPT results:", gptResults);
      } catch (error) {
        // Handle error
        seterror(true)
      toast.warning("Gpt API limit Exceeded Please try after some time");
      }

    if (!gptResults?.choices) {
      //Error handling
      return null;
    }

    const gptMovies = gptResults.choices?.messages?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      {error && (
        <div className=' z-40'>
          <ToastContainer/>
        </div>
      )}
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

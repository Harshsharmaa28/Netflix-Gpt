import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { useSelector } from 'react-redux'

const Loading = () => {
  
  const movies = useSelector((store) => store.movies);


  return (
    <div className=' backdrop-blur-md -mt-64 absolute z-100 h-screen w-screen flex justify-center items-center flex-col'>
      <HashLoader/>
      <span className=' text-5xl py-4'>Loading Your Favourite Movies....</span>
    </div>
  )
}

export default Loading

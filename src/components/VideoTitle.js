import React from 'react'
//react use camel casing we can store trailer into store by dispatching actions
const VideoTitle = ({title,overview}) => {
  return (
    <div className=' bg-gradient-to-r from-black absolute w-screen aspect-video overflow-hidden'>
      <h1 className=' mx-5 text-2xl mt-[25%] md:mt-[15%] lg:mx-16 w-72 text-white font-bold md:text-5xl'>{title}</h1>
      <p className='hidden md:inline-block mt-4 mx-16 text-white text-lg w-[50%]'>{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" mx-5 lg:mt-4 lg:ml-16 bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-4  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle

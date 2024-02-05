import React from 'react'

const Footer = () => {
    return (
        <div className=' mt-10 flex flex-col gap-10 text-gray-200 bg-gray-950'>
            {/* <div className=' flex justify-around'>
                <h1 className=' hover:cursor-pointer font-bold'>NetflixGpt</h1>
                <div className=' flex gap-10'>
                    <div className=' hover:cursor-pointer'>About</div>
                    <div className=' hover:cursor-pointer'>Policy</div>
                    <div className=' hover:cursor-pointer'>contact</div>
                </div>
            </div> */}
            <div className=' bg-gray-500 w-[95vw] h-[.5px] ml-[2%]'></div>
            <div className=' text-gray-200 font-semibold my-5 flex justify-center'>
                Created & Managed By Harsh Sharma
            </div>
        </div>
    )
}

export default Footer

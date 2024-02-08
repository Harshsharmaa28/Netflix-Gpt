import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/about");
    }
    const handlePolicy = () =>{
        navigate("/policy");
    }
    const handleContact = () =>{
        navigate("/contact")
    }
    return (
        <div className=' mt-10 flex flex-col gap-10 text-gray-200 bg-gray-950'>
            <div className=' flex justify-around'>
                <h1 className=' hover:cursor-pointer font-bold'>NetflixGpt</h1>
                <div className=' gap-2 flex md:gap-10'>
                    <div onClick={handleClick} className=' hover:cursor-pointer'>About</div>
                    <div onClick={handlePolicy} className=' hover:cursor-pointer'>Policy</div>
                    <div onClick={handleContact} className=' hover:cursor-pointer'>contact</div>
                </div>
            </div>
            <div className=' bg-gray-500 w-[95vw] h-[.5px] ml-[2%]'></div>
            <div className=' text-gray-200 font-semibold my-5 flex justify-center'>
                Created & Managed By Harsh Sharma
            </div>
        </div>
    )
}

export default Footer

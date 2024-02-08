import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import NotFound from './NotFound'
const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>

        },
        {
            path : "/Browse",
            element : <Browse/>
        },
        {
            path : "/about",
            element : <NotFound/>
        },
        {
            path : "/contact",
            element : <NotFound/>
        },
        {
            path : "/policy",
            element : <NotFound/>
        },
    ]);

    useEffect(() =>{
        // if(){
        //     //sign in logic
        // }
        // else{
        //     //sign out logic
        // }
    },[])

    return (
        <div className='w-screen'>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body

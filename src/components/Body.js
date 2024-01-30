import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
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
        }
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
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
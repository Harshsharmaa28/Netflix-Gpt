import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser,removeUser } from '../utils/userSlice';
import {auth} from "../utils/Firebase"
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{})
        .catch((error)=>{
            navigate("/error")
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid,email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid : uid,
                        email : email,
                        displayName : displayName,
                        photoURL : photoURL,
                    })
                );
                navigate("/Browse")
            }
            else{
                dispatch(removeUser());
                navigate("/");
            }
        })

        return () => unsubscribe();
    }, [])
    return (
        <div className=' flex justify-between absolute w-screen h-20 z-10 bg-gradient-to-b from-black '>
            <img className=' mx-24 z-10 left-[10%] w-[13%]' src="./assests/logo.png" alt="" />
            {user && <button onClick={handleSignOut} className=" mx-24 font-bold text-white ">
                Sign Out
            </button>}
        </div>
    )
}

export default Header

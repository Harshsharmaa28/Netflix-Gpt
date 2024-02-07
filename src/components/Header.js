import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from "../utils/Firebase"
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                navigate("/error")
            })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                // console.log(user)
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/Browse")
            }
            else {
                dispatch(removeUser());
                navigate("/");
            }
        })

        return () => unsubscribe();
    }, [])

    const handleGptSearchClick = () =>{
        dispatch(toggleGptSearchView());
    }
    return (
        <div className='flex justify-between absolute w-screen h-20 z-10 bg-gradient-to-b from-black '>
            <img className=' object-cover lg:mx-24 z-10 lg:left-[10%] lg:w-[13%]' src="./assests/logo.png" alt="" />
            <div className=' flex flex-col lg:flex-row mx-2 gap-1 lg:mx-24 lg:gap-10 '>
                {user && <button
                    className="lg:py-2 py-1.5 px-2 lg:px-4 mt-5 lg:my-5 bg-purple-800 text-white rounded-lg"
                onClick={handleGptSearchClick}
                >
                    {showGptSearch ? "Homepage" : "GPT Search"}
                </button>}
                {user && <button onClick={handleSignOut} className="text-sm lg:text-lg font-semibold text-white ">
                    Sign Out
                </button>}
            </div>
        </div>
    )
}

export default Header

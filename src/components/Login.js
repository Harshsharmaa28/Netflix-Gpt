import React, { useState } from 'react'
import Header from './Header'
import { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../utils/Firebase"
import { checkValidData } from '../utils/Validate'
import addUser from "../utils/userSlice"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const Login = () => {

  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(false);
  const [isInputEmpty, setisInputEmpty] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("clicked")
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
    // if (email.current.value == "" || password.current.value == "") {
    //   setisInputEmpty(true);
    //   return isEmpty();
    // }
    if (message) {
      email.current.value = null;
      password.current.value = null;
    };
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: ""
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error.message);
            })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // seterrorMessage(errorCode);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode);
        });
    }
  }

  const toggleSignInForm = () => {
    seterrorMessage(false)
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className=' '>
      <Header></Header>
      <div className=' absolute'>
        <img className='h-screen w-screen object-cover' src="./assests/bg.jpg" alt="" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className=" absolute w-[90%] sm:w-[60%] md:w-[52%] lg:w-[45%] xl:w-[35%] 2xl:w-[25%] p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Name"
          className=" outline-none p-4 my-4 w-full bg-gray-700"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className=" outline-none relative p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" outline-none p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg ">{errorMessage}</p>
        {/* {isInputEmpty && isEmpty

        } */}

        <button onClick={handleSubmit} className=' hover:bg-red-600 p-4 my-6 bg-red-700 w-full rounded-lg'>{"Sign In"}</button>
        <p className=" cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? <p className=''>"New to Netflix? Sign Up Now"</p>
            : <p>"Already registered? Sign In Now."</p>}
        </p>
      </form>
    </div>
  )
}

export default Login


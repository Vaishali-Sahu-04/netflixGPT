import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {

    const [isSignin , setIsSignin] = useState(true)
    const [msg,setMsg] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignin = () => {
        setIsSignin(!isSignin)
    }
    const handleSignBtn = () => {
       const msg = checkValidation(email.current.value,password.current.value);
       setMsg(msg);
       if(msg) return;
       
       if(!isSignin){
          //Sign up logic
          createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName:name.current.value , photoURL: "https://avatars.githubusercontent.com/u/148002088?s=400&u=76c3c0bd995e1df66138103122d8c30f2eb438a1&v=4"
            }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL,  
              }));
              navigate('/browse');
            }).catch((error) => {
              setMsg(error);
            });
            console.log(user);
            navigate('/browse')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMsg(errorCode +"-"+ errorMessage);
          });
       }
       else{
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsg(errorCode+"-"+errorMessage);
        });
       }
    }
  return (
    <div>
      <Header/>
      <div className='absolute w-full'>
        <img className='w-full'
        src='https://miro.medium.com/v2/resize:fit:1200/1*5lyavS59mazOFnb55Z6znQ.png'
        alt='bg-img'
        />
      </div>
      <form className='bg-black absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80'
        onSubmit={(e)=>e.preventDefault()}>

        <h1 className=' mb-3 text-3xl'>
            {isSignin ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignin && (<input 
        ref={name}
        name='name'
        placeholder='Full Name'
        className='p-3 my-4 w-full bg-gray-800'
        />)}

        <input 
        ref={email}
        type='text'
        placeholder='Enter Email Address'
        className='p-3 my-4 w-full bg-gray-800'
        />

        <input 
        ref={password}
        type='password'
        placeholder='Enter Password'
        className='p-3 my-4 w-full bg-gray-800'
        />

        <p className=' font-bold text-red-700 text-lg'>{msg}</p>

        <button className=' p-3 my-4 bg-red-800 w-full rounded-lg'
            onClick={handleSignBtn}>
        {isSignin ? "Sign In" : "Sign Up"}
        </button>

        <p className=' mt-2 font-semibold cursor-pointer'
            onClick={toggleSignin}>
            {isSignin ? "New to Netflix? Sign Up Now" : "Already have an account! Sign In"}</p>
      </form>
    </div>
  )
}

export default Login

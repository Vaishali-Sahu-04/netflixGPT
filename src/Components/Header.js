import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import {onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constant';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {});
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,  
        }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  },[])
  return (
    <div className='absolute z-10 flex items-center justify-between w-full'>
     <img className=' w-44 '
     src={LOGO}
     alt='logo'
     />
     {user && (
     <div className='flex mx-4 gap-4'>


      <img className=' w-10 h-10'
      alt='user-logo'
      src={user?.photoURL}
      />

     <button className=' font-bold bg-gray-500 p-2 text-white rounded-md'
     onClick={handleSignOut}
     >Sign Out</button>
     </div>
      )
     }
    </div>

  )
}

export default Header

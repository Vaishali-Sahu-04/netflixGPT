import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import {onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className='absolute z-10 flex items-center justify-between w-full'>
     <img className=' w-44 '
     src={LOGO}
     alt='logo'
     />
     {user && (
     <div className='flex mx-4 gap-4'>

      {showGptSearch && 
      <select className=' bg-black text-white rounded-lg font-semibold'
      onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}

      <button className=' text-white p-2 bg-slate-800 rounded-md font-semibold'
       onClick={handleGptSearchClick}>
       {showGptSearch ? 'Home' : 'Search GPT'}</button>

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

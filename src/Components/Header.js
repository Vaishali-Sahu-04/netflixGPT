import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {});
  }
  return (
    <div className='absolute z-10 flex items-center justify-between w-full'>
     <img className=' w-44 '
     src='https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png'
     alt='logo'
     />
     {user && (<div className='flex mx-4 gap-4'>
      <img className=' w-10 h-10'
      alt='user-logo'
      src={user?.photoURL}
      />
     <button className=' font-bold bg-gray-500 p-2 text-white rounded-md'
     onClick={handleSignOut}
     >Sign Out</button>
     </div> )
     }
    </div>

  )
}

export default Header

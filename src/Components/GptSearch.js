import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constant'
const GptSearch = () => {
  return (
    <div>
        <div className='absolute w-full -z-10'>
        <img className='w-full'
        src={BG_IMG} alt='bg-img' />
        </div>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch

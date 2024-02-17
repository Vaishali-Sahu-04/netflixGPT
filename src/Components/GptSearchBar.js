import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/Language'

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className=' pt-[11%] flex justify-center'>
      <form className=' bg-black p-4 grid grid-cols-12 w-1/2 gap-4'>
        <input className=' col-span-9 p-2 rounded-lg '
        type='text'
        placeholder={lang[langKey].gptPlaceholder}
        />
        <button className='p-2 bg-red-700 text-white col-span-3 rounded-lg'
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar

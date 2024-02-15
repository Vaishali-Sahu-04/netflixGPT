import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className=' font-bold text-4xl'>{title}</h1>
      <p className=' w-1/4 text-lg my-3'>{overview}</p>
      <div className=' mt-2'>
        <button className=' bg-slate-600 text-white p-2 font-bold rounded-lg w-20 hover:bg-opacity-70'>
            ▶️Play
        </button>
        <button className=' bg-white text-black bg-opacity-25  p-2 font-bold rounded-lg mx-2 '>
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle

import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBg = ({movieId}) => {

  const trialerVideo = useSelector(store => store.movies?.trialerVideo);
  useMovieTrailer(movieId);

  return (
    <div >
      <iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/7u3zBVAxx_w?si="+trialerVideo?.key+"?&autoplay=1&mute=1"}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
      </iframe>
    </div>
  )
}

export default VideoBg

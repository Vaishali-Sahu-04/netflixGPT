import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondContainer = () => {
  const movies = useSelector(store => store.movies);
  
  return (
    movies.nowPlayingMovies && movies.popularVideo &&
    <div className=' bg-black'>
    <div className=' -mt-52 relative z-20 pl-12'>
      <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRated}/>
      <MovieList title={"Popular"} movies={movies.popularVideo}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcoming}/>
    </div>
    </div>
    
  )
}

export default SecondContainer

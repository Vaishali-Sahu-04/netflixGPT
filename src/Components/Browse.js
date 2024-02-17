import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularVideo from '../hooks/usePopularVideo';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
   
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularVideo();
  useTopRated();
  useUpcoming();

  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearch/> :
      <>
      <MainContainer/>
      <SecondContainer/>
      </>
      }
    </div>
  )
}

export default Browse

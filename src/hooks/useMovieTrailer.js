import {API_OPTIONS} from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();
    const getVideo = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
      
        const filteredVideos = json.results.filter((video)=>video.type==="Trailer");
        const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0] ; 
        //multiple trailers may be possible so select first one or no trailer so select first video
        dispatch(addTrailerVideo(trailer));
        //console.log(trailer);
      }
      useEffect(()=>{
        getVideo();
      },[])
}
export default useMovieTrailer;
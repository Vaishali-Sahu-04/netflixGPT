import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularVideo:null,
        topRated:null,
        upcoming:null,
    },
    reducers:{
        addnowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularVideo:(state,action)=>{
            state.popularVideo = action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated = action.payload;
        },
        addUpcoming:(state,action)=>{
            state.upcoming = action.payload;
        },
    }
})
export const {addnowPlayingMovie , addTrailerVideo, addPopularVideo, 
    addTopRated, addUpcoming} = moviesSlice.actions;
export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const movieslice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        trailervideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null
    },
    reducers: {
        nowplayingmovie: (state, action) => {
           state.nowPlayingMovies = action.payload
        },

        addTrailerVideo: (state, action) => {
            state.trailervideo =  action.payload
        },

        popularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        topRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        upComingMovies: (state, action) => {
            state.upComingMovies = action.payload
        }
    }
})

export const {nowplayingmovie, addTrailerVideo, popularMovies, topRatedMovies, upComingMovies} = movieslice.actions;
export default movieslice.reducer;

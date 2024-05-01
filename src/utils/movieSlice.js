import { createSlice } from "@reduxjs/toolkit";


const movieslice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        trailervideo: null,
        popularMovies: null
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
        }
    }
})

export const {nowplayingmovie, addTrailerVideo, popularMovies} = movieslice.actions;
export default movieslice.reducer;

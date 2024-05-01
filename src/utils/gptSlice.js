import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    initialState:{
        showGptSearch: false
    },
    name:'gpt',
    reducers:{
        toggleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export default gptSlice.reducer;
export const {toggleGptSearchView} = gptSlice.actions;
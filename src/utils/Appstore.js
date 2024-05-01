import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userslice";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
 const Appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer
  },
})

export default Appstore;
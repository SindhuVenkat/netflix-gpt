import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userslice";

 const Appstore = configureStore({
  reducer: {
    user: userReducer
  },
})

export default Appstore;
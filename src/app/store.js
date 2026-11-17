import { configureStore } from '@reduxjs/toolkit'

//import manually
import userSlice from '../features/counter/userSlice'


export const store = configureStore({
  reducer: {
    activeuser: userSlice
  }
})



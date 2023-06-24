import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./UserSlice/userSlice"
import ImageReducer from "./ImageSlice/imageSlice"
export default configureStore({
  reducer: {
    users: UserReducer,
    images: ImageReducer,
  },
})
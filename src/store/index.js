import { configureStore } from '@reduxjs/toolkit'
import users from './slice/usersSlide'

export default configureStore({
  reducer: {
    users,
  },
})

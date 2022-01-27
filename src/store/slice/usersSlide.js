import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [],
  },
  reducers: {
    setUsersList: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { setUsersList } = userSlice.actions

export default userSlice.reducer

export const fetchUsers = () => (dispatch) => {
  axios
    .get('https://reqres.in/api/users?per_page=12')
    .then(({ data }) => {
      dispatch(setUsersList(data.data))
    })
    .catch((err) => console.log(err))
}

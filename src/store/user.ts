import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

type User = {
  user: any
}

const initialState: User = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export const selectUser = (state: RootState) => 
  state.userReducer.user
  
export default userSlice.reducer
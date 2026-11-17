import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

  name: 'activeuser',
  initialState: {
    value: 0
  },

  reducers: {
    userinfo: (state, action) => {
      console.log(state.value);
      console.log(action.payload);
    },
    
  }

})

export const { userinfo } = userSlice.actions

export default userSlice.reducer


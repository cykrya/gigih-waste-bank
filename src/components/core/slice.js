import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice(
  {
    name: 'profiledata',
    initialState: {
      email:'',
      password:'',
      nama:'',
      umur:'',
      alamat:'',
      jeniskel:''
    },
    reducers: {
      email: (state, action) => {
        state.email = action.payload
      },
      password: (state, action) => {
        state.password = action.payload
      },
      nama: (state, action) => {
        state.nama = action.payload
      },
      umur: (state, action) => {
          state.umur = action.payload
      },
      alamat: (state, action) => {
          state.alamat = action.payload
      },
      jeniskel: (state, action) => {
          state.jeniskel = action.payload
      },
    },
  }
)

// Action creators are generated for each case reducer function
export const { email, password, nama, umur,alamat,jeniskel } = profileSlice.actions

export default profileSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice(
  {
   
    name: 'profiledata',
    initialState: {
      email:'johndoe@gmail.com',
      password:'john12345',
      nama:'John Doe',
      umur:'21',
      alamat:'totally Sus St, Block C no. 3',
      jeniskel:'Pria',
      hadLogin:false,
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
      hadLogin: (state, action) => {
        state.hadLogin = action.payload
    },
    },
  }
)

// Action creators are generated for each case reducer function
export const { emailLog, passwordLog,email, password, nama, umur,alamat,jeniskel, hadLogin } = profileSlice.actions

export default profileSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import profileReducer  from "./slice";

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
})
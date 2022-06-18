import { configureStore } from "@reduxjs/toolkit";

import profileReducer  from "./slice";
// import { accessTokenReducer } from "./reducer.js";
// import AccountReducer from "./account-slice";

// export default configureStore ({
//   reducer: {
//     profiledata: accessTokenReducer
//   },
//   devTools: true
// });


  export default configureStore({
    reducer: {
      profile: profileReducer,
    },
  })
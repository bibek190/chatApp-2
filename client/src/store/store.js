import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user/user.slice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;

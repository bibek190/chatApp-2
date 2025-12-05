import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "./store/slice/user/user.thunk";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUserThunk());
  }, []);

  return <></>;
};

export default App;

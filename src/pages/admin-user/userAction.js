import {
  registrationSuccess,
  resPending,
  resFail,
  emailVerificationSuccess,
  logInSuccess,
  autoLogin,
  logOutUserSuccess,
} from "./userSlice";
import {
  createNewUser,
  verifyNewUserEmail,
  loginAdmin,
} from "../../apis/userApi";

import { newAccessJWT } from "../../apis/tokenApi";
export const createUser = (userInfo) => async (dispatch) => {
  dispatch(resPending());
  //call api function
  const result = await createNewUser(userInfo);

  result.status === "success"
    ? dispatch(registrationSuccess(result))
    : dispatch(resFail(result));
};
export const verifyEmail = (userInfo) => async (dispatch) => {
  dispatch(resPending());
  //call api function
  const result = await verifyNewUserEmail(userInfo);
  dispatch(emailVerificationSuccess(result));
};

export const adminLogin = (loginInfo) => async (dispatch) => {
  dispatch(resPending());
  // call api
  const result = await loginAdmin(loginInfo);
  console.log(result);
  if (result.status === "success") {
    window.sessionStorage.setItem("accessJWT", result.tokens?.accessJWT);
    window.localStorage.setItem("refreshJWT", result.tokens?.refreshJWT);
    return dispatch(logInSuccess(result.user));
  }

  dispatch(resFail(result));
};
//1. autologin when we have both refreshajwt & accessjwt
export const autoLoginAction = () => async (dispatch) => {
  const accessJWT = window.sessionStorage.getItem("accessJWT");
  const refreshJWT = window.localStorage.getItem("refreshJWT");

  if (accessJWT && refreshJWT) {
    return dispatch(autoLogin());
  }

  //2. when we have refreshtoken & not accesstoken
  if (!accessJWT && refreshJWT) {
    const data = await newAccessJWT();
    if (data?.accessJWT) {
      window.sessionStorage.setItem("accessJWT", data.accessJWT);
      dispatch(autoLogin());
    }
  }
  //3. logout use
  dispatch(userLogOut);
};
export const userLogOut = () => (dispatch) => {
  window.sessionStorage.removeItem("accessJWT");
  window.localStorage.removeItem("refreshJWT");
  //logout from server by removing tokens from database

  dispatch(logOutUserSuccess());
};

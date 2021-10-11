import {
  registrationSuccess,
  resPending,
  resFail,
  emailVerificationSuccess,
  logInSuccess,
  autoLogin,
  logOutUserSuccess,
  getAdminProfile,
  updateAdminProfile,
  updateAdminPassword,
  requestOTPSuccess,
} from "./userSlice";
import {
  createNewUser,
  verifyNewUserEmail,
  loginAdmin,
  fetchUserProfile,
  updateUserProfile,
  updateUserPassword,
  resetUserPassword,
} from "../../apis/userApi";
import { getCategories } from "../categories/categoryAction";
import { newAccessJWT, requestpasswordResetOTP } from "../../apis/tokenApi";
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
    if (data) {
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

export const getUserProfile = () => async (dispatch) => {
  dispatch(resPending());
  //call api to get user profile
  const result = await fetchUserProfile();
  if (result.message === "jwt expired") {
    const token = await newAccessJWT();
    console.log("time to request new jwt");
    //re auth
    if (token) {
      dispatch(getUserProfile());
    } else {
      dispatch(userLogOut());
    }
  }

  if (result.status === "success") {
    return result.user && dispatch(getAdminProfile(result.user));
  }
  dispatch(resFail(result));
};

export const updateUserProfileAction = (obj) => async (dispatch) => {
  dispatch(resPending());
  //call api to get user profile
  const result = await updateUserProfile(obj);
  if (result.message === "jwt expired") {
    const token = await newAccessJWT();
    console.log("time to request new jwt");
    //re auth
    if (token) {
      dispatch(updateUserProfileAction(obj));
    } else {
      dispatch(userLogOut());
    }
  }

  if (result.status === "success") {
    result.user && dispatch(updateAdminProfile(result));
    dispatch(getUserProfile());
    return;
  }
  dispatch(resFail(result));
};
export const updateUserPasswordAction = (obj) => async (dispatch) => {
  dispatch(resPending());
  //call api to get user profile
  const result = await updateUserPassword(obj);
  if (result.message === "jwt expired") {
    const token = await newAccessJWT();
    console.log("time to request new jwt");
    //re auth
    if (token) {
      dispatch(updateUserPasswordAction(obj));
    } else {
      dispatch(userLogOut());
    }
  }

  if (result.status === "success") {
    result.user && dispatch(updateAdminPassword(result));
    return;
  }
  dispatch(resFail(result));
};

export const requestOTPAction = (email) => async (dispatch) => {
  dispatch(resPending());
  const data = await requestpasswordResetOTP({ email });
  data.status === "success"
    ? dispatch(requestOTPSuccess({ data, email }))
    : dispatch(resFail(data));
};
export const resetPasswordAction = (obj) => async (dispatch) => {
  dispatch(resPending());
  const data = await resetUserPassword(obj);
  data.status === "success"
    ? dispatch(updateAdminPassword(data))
    : dispatch(resFail(data));
};

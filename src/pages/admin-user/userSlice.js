import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  userResp: {},
  emailVerificationResponse: {},
  isLoggedIn: false,
  user: {},
  showResetPassForm: false,
  passResetEmail: "",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    resPending: (state) => {
      state.isPending = true;
    },
    registrationSuccess: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },
    emailVerificationSuccess: (state, { payload }) => {
      state.isPending = false;
      state.emailVerificationResponse = payload;
    },
    resFail: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },
    autoLogin: (state) => {
      state.isLoggedIn = true;
    },
    logInSuccess: (state, { payload }) => {
      state.isPending = false;
      state.userResp = {};
      state.isLoggedIn = true;
      state.user = payload;
    },
    logOutUserSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
    updateAdminProfile: (state, { payload } = {}) => {
      state.isLoggedIn = false;
      state.userResp = payload;
    },
    requestOTPSuccess: (state, { payload } = {}) => {
      state.isPending = false;
      state.userResp = payload;
      state.showResetPassForm = true;
      state.passResetEmail = payload.email;
    },
    updateAdminPassword: (state, { payload } = {}) => {
      state.isPending = false;
      state.userResp = payload;
    },
    togglePasswordResetForm: (state) => {
      state.showResetPassForm = !state.showResetPassForm;
    },
    getAdminProfile: (state, { payload = {} }) => {
      state.isPending = false;
      state.user = payload;
    },
  },
});
//reducer has default state and gets updated with new states
const { reducer, actions } = userSlice;

export const {
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
  togglePasswordResetForm,
  requestOTPSuccess,
} = actions;
export default reducer;

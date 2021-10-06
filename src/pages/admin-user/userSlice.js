import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  userResp: {},
  emailVerificationResponse: {},
  isLoggedIn: false,
  user: {},
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
    getAdminProfile: (state, { payload = {} }) => {
      console.log(payload);
      if (payload) {
        state.user = payload;
      }
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
} = actions;
export default reducer;

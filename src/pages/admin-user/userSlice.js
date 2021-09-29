import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  userResp: {},
  emailVerificationResponse: {},
  isLoggedIn: false,
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
    logInSuccess: (state) => {
      state.isLoggedIn = true;
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
} = actions;
export default reducer;

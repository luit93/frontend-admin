import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  userResp: {},
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
    resFail: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },
  },
});
//reducer has default state and gets updated with new states
const { reducer, actions } = userSlice;

export const { registrationSuccess, resPending, resFail } = actions;
export default reducer;

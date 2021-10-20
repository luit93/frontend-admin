import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  paymentOptResp: {},
  payOptList: [],
};

const paymentOptionSlice = createSlice({
  name: "paymentOptionSlice",
  initialState,
  reducers: {
    resPending: (state) => {
      state.isPending = true;
    },
    addPayOptSuccess: (state, { payload = {} }) => {
      state.isPending = false;
      state.paymentOptResp = payload;
    },
    getPayOptSuccess: (state, { payload = [] }) => {
      state.isPending = false;
      state.payOptList = payload;
    },
    deletePayOptSuccess: (state, { payload = {} }) => {
      state.isPending = false;
      state.paymentOptResp = payload;
    },

    resFail: (state, { payload }) => {
      state.isPending = false;
      state.productResp = payload;
    },
  },
});
const { reducer, actions } = paymentOptionSlice;

export const {
  getPayOptSuccess,
  resPending,
  addPayOptSuccess,
  deletePayOptSuccess,
  resFail,
} = actions;

export default reducer;

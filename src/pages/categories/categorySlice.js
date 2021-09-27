import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPending: false,
  categoryResponse: {},
};
const catSlice = createSlice({
  name: "catSlice",
  initialState,
  reducers: {
    reqPending: (state) => {
      state.isPending = true;
    },
    reqFails: (state, { payload }) => {
      state.isPending = false;
      state.categoryResponse = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const { reqPending, reqFails } = actions;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPending: false,
  categoryResponse: {},
  catList: [],
};
const catSlice = createSlice({
  name: "catSlice",
  initialState,
  reducers: {
    reqPending: (state) => {
      state.isPending = true;
    },
    fetchCategoriesSuccess: (state, { payload = [] }) => {
      state.isPending = false;
      state.catList = payload;
    },
    addCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryResponse = payload;
    },
    deleteCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryResponse = payload;
    },
    reqFails: (state, { payload }) => {
      state.isPending = false;
      state.categoryResponse = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const {
  deleteCatSuccess,
  addCatSuccess,
  reqPending,
  reqFails,
  fetchCategoriesSuccess,
} = actions;
export default reducer;

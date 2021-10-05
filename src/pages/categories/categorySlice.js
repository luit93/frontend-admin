import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPending: false,
  categoryResponse: {},
  catList: [],
  selectedCat: {},
};
const catSlice = createSlice({
  name: "catSlice",
  initialState,
  reducers: {
    reqPending: (state) => {
      state.isPending = true;
    },
    fetchCategoriesSuccess: (state, { payload }) => {
      state.isPending = false;
      state.catList = payload.categories;
      // state.categoryResponse.status = payload.status;
      // state.categoryResponse.message = payload?.message;
    },
    addCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryResponse = payload;
    },
    deleteCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryResponse = payload;
    },
    updateCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryResponse = payload;
    },
    onCategorySelect: (state, { payload }) => {
      state.isPending = false;
      state.selectedCat = payload;
    },
    onDeSelectCategory: (state) => {
      state.selectedCat = {};
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
  onCategorySelect,
  onDeSelectCategory,
  updateCatSuccess,
} = actions;
export default reducer;

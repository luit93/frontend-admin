import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isPending: false,
  productResp: {},
  productList: [],
  selectedProduct: {},
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    resPending: (state) => {
      state.isPending = true;
    },
    resFail: (state, { payload = [] }) => {
      state.isPending = false;
      state.productResp = payload;
    },
    getProducts: (state, { payload }) => {
      state.isPending = false;
      state.productList = payload;
    },
    deleteProdSuccess: (state, { payload = {} }) => {
      state.isPending = false;
      state.productResp = payload;
    },
    addProdSuccess: (state, { payload = {} }) => {
      state.isPending = false;
      state.productResp = payload;
    },
    updateProdSuccess: (state, { payload = {} }) => {
      state.isPending = false;
      state.productResp = payload;
    },
    getSingleProduct: (state, { payload = {} }) => {
      state.isPending = false;
      state.selectedProduct = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export const {
  deleteProdSuccess,
  resPending,
  resFail,
  getProducts,
  getSingleProduct,
  addProdSuccess,
  updateProdSuccess,
} = actions;
export default reducer;

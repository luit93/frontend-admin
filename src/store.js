import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "./pages/admin-user/userSlice";
import categoryReducer from "./pages/categories/categorySlice";
import productReducer from "./pages/products/productSlice";
import paymentReducer from "./pages/payments/paymentOptionSlice";
const store = configureStore({
  reducer: {
    user: adminUserReducer,
    category: categoryReducer,
    product: productReducer,
    paymentOption: paymentReducer,
  },
});

export default store;

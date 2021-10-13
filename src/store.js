import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "./pages/admin-user/userSlice";
import categoryReducer from "./pages/categories/categorySlice";
import productReducer from "./pages/products/productSlice";
const store = configureStore({
  reducer: {
    user: adminUserReducer,
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;

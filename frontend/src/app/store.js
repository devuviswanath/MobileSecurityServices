import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
import serviceReducer from "../features/services/servicesSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    service: serviceReducer,
  },
});

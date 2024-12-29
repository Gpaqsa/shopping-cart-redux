import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

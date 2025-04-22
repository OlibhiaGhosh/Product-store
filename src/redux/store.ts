import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import shippingSlice from "./shippingSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    shipping_details: shippingSlice,
    wishlist: wishlistSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: true,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

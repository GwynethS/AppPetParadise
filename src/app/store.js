import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import { shopApi } from "../services/shop";
import { authApi } from "../services/auth";
import { orderApi } from "../services/order";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware, orderApi.middleware),
});

setupListeners(store.dispatch);

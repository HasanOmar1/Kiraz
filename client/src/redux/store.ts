import { configureStore } from "@reduxjs/toolkit";
import clothesApi from "../api/clothesApi";

export const store = configureStore({
  reducer: {
    [clothesApi.reducerPath]: clothesApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(clothesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../DataSlice/dataSlice";
import { apiSlice } from "../features/apiSlice/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    data: dataSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

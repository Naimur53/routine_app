import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../DataSlice/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

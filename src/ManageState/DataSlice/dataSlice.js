import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  user: {},
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setLoading } = dataSlice.actions;
export const allData = (state) => state.data;
export default dataSlice.reducer;

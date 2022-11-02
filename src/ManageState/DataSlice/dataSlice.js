import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: true,
  user: {},
};
export const getUserFromDB = createAsyncThunk(
  'data/getFromDB',
  async (info) => {
    const response = await axios.get(`https://shielded-dusk-65695.herokuapp.com/user?email=${info.email}`)
    return response.data
  }
)
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const data = action.payload;
      if (data.set) {
        delete data.set;
        state.user = action.payload;
      } else {
        state.user = { ...action.payload };
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserFromDB.fulfilled, (state, action) => {
        if (action.payload?._id) {
          state.user = action.payload;
        }
        state.loading = false;
      })
      .addCase(getUserFromDB.rejected, (state, action) => {

        state.loading = false;
      })
  }
});

// Action creators are generated for each case reducer function
export const { setUser, setLoading } = dataSlice.actions;
export const allData = (state) => state.data;
export default dataSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllRoutinesFromLocalDb } from "../../utilities/dataValidation";
import { findSelectIndex, saveSelectIndex } from "../../utilities/localDb";
const initialState = {
  loading: true,
  getMessageLoading: true,
  user: {},
  messages: [],
  allRoutineData: [],
  selectIndex: findSelectIndex(),
};
export const getUserFromDB = createAsyncThunk(
  "data/getFromDB",
  async (info) => {
    const response = await axios.get(`https://routineappserver-production-5617.up.railway.app/user?email=${info.email}`)
    return response.data
  }
);
export const getMessageFromDb = createAsyncThunk(
  "data/getMessage",
  async (info) => {
    const response = await axios.get(`https://routineappserver-production-5617.up.railway.app/message?routineId=${info}`)
    return response.data
  }
);
export const postMessageToDb = createAsyncThunk(
  "data/postToDb",
  async (info) => {
    const response = await axios.post(`https://routineappserver-production-5617.up.railway.app/message`, info)
    return response.data
  }
);
export const accessAllRoutineInLocal = createAsyncThunk("data/accessFromLocal", async (info) => {
  const response = await getAllRoutinesFromLocalDb()
  return response
})
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
        if (action.payload._id) {

          state.user = { ...state.user, ...action.payload };
        }
      }
    },
    addMessage: (state, action) => {
      state.messages = [...state.messages, ...action.payload]
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSelectIndex: (state, action) => {
      saveSelectIndex(action.payload)

      state.selectIndex = action.payload;
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
      .addCase(accessAllRoutineInLocal.fulfilled, (state, action) => {
        state.allRoutineData = action.payload
      })
      .addCase(getMessageFromDb.pending, (state, action) => {
        state.getMessageLoading = true;
      })
      .addCase(getMessageFromDb.rejected, (state, action) => {
        state.getMessageLoading = false;
      })
      .addCase(getMessageFromDb.fulfilled, (state, action) => {
        state.messages = [...state.messages, ...action.payload]
        state.getMessageLoading = false;
      })
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setLoading, addMessage, setSelectIndex } = dataSlice.actions;
export const allData = (state) => state.data;
export default dataSlice.reducer;

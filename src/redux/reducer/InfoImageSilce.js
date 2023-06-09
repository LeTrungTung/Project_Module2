import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InfoImageAPI from "../../api/InfoImage";

export const handleCallImageAPI = createAsyncThunk(
  "image/handleCallImageAPI",
  async (action) => {
    //thay vì call ở component thì mình call trực tiêps tại redux
    const response = await InfoImageAPI.getAllImage();
    // trả về 1 payload
    return response;
  }
);

export const handleAddImageAPI = createAsyncThunk(
  "image/handleAddImageAPI",
  async (action) => {
    //thay vì call ở component thì mình call trực tiêps tại redux
    const response = await InfoImageAPI.addImage(action);
    // trả về 1 payload
    return response;
  }
);

const InfoImageSlice = createSlice({
  name: "infoimage",
  initialState: localStorage.getItem("images") || [],
  extraReducers: {
    [handleCallImageAPI.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
    [handleAddImageAPI.fulfilled]: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { actions, reducer } = InfoImageSlice;
export default reducer;

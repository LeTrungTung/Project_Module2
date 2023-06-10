import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/User";

export const handleGetUsersAPI = createAsyncThunk(
  "user/handleGetUsersAPI",
  async () => {
    //thay vì call ở component thì mình call trực tiêps tại redux
    const response = await UserAPI.getUsers();
    // trả về 1 payload
    return response;
  }
);

const listUserSlice = createSlice({
  name: "users",
  initialState: [],
  extraReducers: {
    [handleGetUsersAPI.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
const { actions, reducer } = listUserSlice;
export default reducer;

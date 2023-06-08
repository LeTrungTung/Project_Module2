import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InfoImageAPI from "../../api/InfoImage";
import CommentAPI from "../../api/Comment";

export const handleCallCommentAPI = createAsyncThunk(
  "comment/handleCallCommentAPI",
  async (action) => {
    //thay vì call ở component thì mình call trực tiêps tại redux
    const response = await CommentAPI.getAllComment();
    // trả về 1 payload
    return response;
  }
);

const CommentSlice = createSlice({
  name: "comments",
  initialState: localStorage.getItem("comments") || [],
  extraReducers: {
    [handleCallCommentAPI.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { actions, reducer } = CommentSlice;
export default reducer;

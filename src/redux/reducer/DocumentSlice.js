import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InfoImageAPI from "../../api/InfoImage";
import DocumentAPI from "../../api/Document";

export const handleCallDocumentAPI = createAsyncThunk(
  "document/handleCallDocumentAPI",
  async (action) => {
    console.log("55", action);
    //thay vì call ở component thì mình call trực tiêps tại redux
    const response = await DocumentAPI.postDocument(action);
    // trả về 1 payload
    return response;
  }
);
export const handleGetDocumentAPI = createAsyncThunk(
  "document/handleGetDocumentAPI",
  async (action) => {
    //thay vì call ở component thì mình call trực tiêps tại redux
    const response = await DocumentAPI.getAllDocument();
    // trả về 1 payload
    return response;
  }
);

const DocumentSlice = createSlice({
  name: "documents",
  initialState: [],
  extraReducers: {
    [handleCallDocumentAPI.fulfilled]: (state, action) => {
      return (state = [...state, action.payload]);
    },
    [handleGetDocumentAPI.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { actions, reducer } = DocumentSlice;
export default reducer;

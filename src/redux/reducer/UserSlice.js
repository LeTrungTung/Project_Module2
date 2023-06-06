import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/User";

export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    const response = await UserAPI.register(payload);
    console.log("payload", response);
    //luu User
    // localStorage.setItem("user", JSON.stringify(response.user));
    // //luu accessTOken
    // localStorage.setItem(
    //   "access_token",
    //   JSON.stringify(response.accessToken)
    // );
    return response; //tra ve state cho  reducer
  }
);

export const login = createAsyncThunk(
  "login/fetchAuth",
  async (payload) => {
    try {
      const response = await UserAPI.login(payload);
      response &&
        localStorage.setItem("user", JSON.stringify(response.user));
      response &&
        localStorage.setItem(
          "access_token",
          JSON.stringify(response.accessToken)
        );
      return response;
    } catch (error) {
      console.log("new error", error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      if (action.payload == undefined) return;
      state = action.payload.user;
      return state;
    },
    [login.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
  },
});
const { actions, reducer } = userSlice;
export default reducer;

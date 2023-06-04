import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../utils/config";
import { successtost,errortost } from "../../App";

const initialState = {
  loading: false,
  error: null,
  user: [],
  isloggedin: false,
};

export const loginUser = createAsyncThunk(
  "/post/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(url + "login", {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const resendVerification = createAsyncThunk(
  "/post/resendverification",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(url + "resendverifymail", {
        email: data.email,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.isloggedin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.user = "";
        state.isloggedin = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isloggedin = true;
        successtost("Login Successfull");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Server error";
        state.user = "";
        state.isloggedin = false;
        errortost(action.payload || "Server error");
      });
    builder
      .addCase(resendVerification.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.user = "";
      })
      .addCase(resendVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        successtost("Verification mail sent");
      })
      .addCase(resendVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Server error";
        state.user = "";
        errortost(action.payload || "Server error");
      });
  },
});

export default loginSlice.reducer;
export const { logout } = loginSlice.actions;

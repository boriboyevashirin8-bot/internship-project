import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../types";

export const STATIC_USERS = [
  {
    id: "1",
    name: "Nurbek Yo'ldashev",
    phone: "+998901234567",
    password: "12345678",
    token: "static-token-1",
  },
  {
    id: "2",
    name: "Malika Yusupova",
    phone: "+998907654321",
    password: "87654321",
    token: "static-token-2",
  },
];

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerSuccess,
} = authSlice.actions;

export default authSlice.reducer;

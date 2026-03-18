import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/auth/slices/authSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isAuthenticated", "isRegistering"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;

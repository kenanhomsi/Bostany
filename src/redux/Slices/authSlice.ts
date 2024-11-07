import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetProfile } from "../../Types/api";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  phone_code: string;
  birthdate: null | string;
  bio: null | string;
  gender: null | string;
  type: string; //customer or consultant
  avatar: string;
  localed_type: string;
  country?: {
    id: number;
    name: string;
    code: string;
    key: string;
    is_default: boolean;
    currency: string;
    flag: string;
  };
  city?: {
    id: number;
    name: string;
  };
  rating?: {
    avg: number;
    count: number;
    professionalism: null | string;
  };
  counts?: {
    cancelled_projects: number;
    waiting_projects: number;
    completed_projects: number;
  };
  unread_notifications_count: number;
  completed_profile: boolean;
  enable_2fa: boolean;
  created_at: string;
  created_at_formatted: string;
}
interface AuthState {
  user: IGetProfile | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{ user: IGetProfile; token?: string }>
    ) {
      state.user = action.payload.user;
      if (action.payload.token) state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

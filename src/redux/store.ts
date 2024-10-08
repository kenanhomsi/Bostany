import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./Slices/UserSlice";
import HomeCardReducer from "./Slices/HomeCardSlice";
import RegisterReducer from "./Slices/RegisterSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    homeCard: HomeCardReducer,
    register: RegisterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

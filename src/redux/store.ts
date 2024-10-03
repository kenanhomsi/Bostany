import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./Slices/UserSlice";
import HomeCardReducer from "./Slices/HomeCardSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    homeCard: HomeCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

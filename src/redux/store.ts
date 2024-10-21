import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./Slices/UserSlice";
import HomeCardReducer from "./Slices/HomeCardSlice";
import RegisterReducer from "./Slices/RegisterSlice";
import PopUpReducer from "./Slices/PopUpSlice";
import QualificationDataReducer from "./Slices/QualificationData";
import BookingReducer from "./Slices/BookingSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    homeCard: HomeCardReducer,
    register: RegisterReducer,
    popUpState: PopUpReducer,
    qualificationData: QualificationDataReducer,
    booking: BookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

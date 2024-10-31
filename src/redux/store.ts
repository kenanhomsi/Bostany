import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./Slices/authSlice";
import HomeCardReducer from "./Slices/HomeCardSlice";
import RegisterReducer from "./Slices/RegisterSlice";
import PopUpReducer from "./Slices/PopUpSlice";
import QualificationDataReducer from "./Slices/QualificationData";
import BookingReducer from "./Slices/BookingSlice";
import ChatMessagesReducer from "./Slices/chatMessageSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  auth: authReducer,
  homeCard: HomeCardReducer,
  register: RegisterReducer,
  popUpState: PopUpReducer,
  qualificationData: QualificationDataReducer,
  booking: BookingReducer,
  chatMessage: ChatMessagesReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

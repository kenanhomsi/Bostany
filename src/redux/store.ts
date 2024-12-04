import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import authReducer from "./Slices/authSlice";
import HomeCardReducer from "./Slices/HomeCardSlice";
import RegisterReducer from "./Slices/RegisterSlice";
import PopUpReducer from "./Slices/PopUpSlice";
import QualificationDataReducer from "./Slices/QualificationData";
import BookingReducer from "./Slices/BookingSlice";
import ChatMessagesReducer from "./Slices/chatMessageSlice";
import ExperiencesReduces from "./Slices/experienceSlice";
// import Bst10Reduces from "./Slices/Bst10Slice";
// import Bst10SubReduces from "./Slices/Bst10SubSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  auth: authReducer,
  // BstSub10: Bst10SubReduces,
  // Bst10: Bst10Reduces,
  homeCard: HomeCardReducer,
  register: RegisterReducer,
  popUpState: PopUpReducer,
  qualificationData: QualificationDataReducer,
  booking: BookingReducer,
  experiences: ExperiencesReduces,
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

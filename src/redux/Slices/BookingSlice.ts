import { createSlice } from "@reduxjs/toolkit";

interface intitstate {
  BostanyId: number;
  BookingData: {
    SelectedDay: string;
    SelectTime: string;
    SelectedStartTime: string;
    SelectedDuration: string;
    Title: string;
  };
  BookingDayFromTimeBar: string;
}

const initialState: intitstate = {
  BostanyId: 0,
  BookingData: {
    SelectedDay: "",
    SelectTime: "",
    SelectedStartTime: "",
    SelectedDuration: "",
    Title: "",
  },
  BookingDayFromTimeBar: "",
};

const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {
    PutBookingData(state, action) {
      state.BookingData = action.payload;
    },
    PutBookingDayFromTimeBar(state, action) {
      state.BookingDayFromTimeBar = action.payload;
    },
    PutBookingBostanyId(state, action) {
      state.BostanyId = action.payload;
    },
  },
});

export const { PutBookingBostanyId, PutBookingData, PutBookingDayFromTimeBar } =
  BookingSlice.actions;
export default BookingSlice.reducer;

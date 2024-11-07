import { createSlice } from "@reduxjs/toolkit";
interface PopUpModalState {
  BuyingCoinsPop: boolean;
  Buycredit: boolean;
  BookingTimePop: boolean;
  BookingConfirmPop: boolean;
  BookingSuccessPop: boolean;
  SwitchToBaser: boolean;
  Bst10Time: boolean;
  Bst10Table: boolean;
}

const initialState: PopUpModalState = {
  BuyingCoinsPop: false,
  Buycredit: false,
  BookingTimePop: false,
  BookingConfirmPop: false,
  BookingSuccessPop: false,
  SwitchToBaser: false,
  Bst10Time: false,
  Bst10Table: false,
};

const PopUpModalSlice = createSlice({
  name: "PopUpModal",
  initialState,
  reducers: {
    OpenBst10Table(state) {
      state.Bst10Table = true;
    },
    CloseBst10Table(state) {
      state.Bst10Table = false;
    },
    OpenBst10Time(state) {
      state.Bst10Time = true;
    },
    CloseBst10Time(state) {
      state.Bst10Time = false;
    },
    OpenSwitchToBaser(state) {
      state.SwitchToBaser = true;
    },
    CloseSwitchToBaser(state) {
      state.SwitchToBaser = false;
    },
    OpenBuyingCoinsPop(state) {
      state.BuyingCoinsPop = true;
    },
    CloseBuyingCoinsPop(state) {
      state.BuyingCoinsPop = false;
    },
    OpenBookingSuccessPop(state) {
      state.BookingSuccessPop = true;
    },
    CloseBookingSuccessPop(state) {
      state.BookingSuccessPop = false;
    },
    OpenBookingConfirmPop(state) {
      state.BookingConfirmPop = true;
    },
    CloseBookingConfirmPop(state) {
      state.BookingConfirmPop = false;
    },
    OpenBookingTimePop(state) {
      state.BookingTimePop = true;
    },
    CloseBookingTimePop(state) {
      state.BookingTimePop = false;
    },
    OpenBuycredit(state) {
      state.Buycredit = true;
    },
    CloseBuycredit(state) {
      state.Buycredit = false;
    },
  },
});
export const {
  OpenSwitchToBaser,
  CloseSwitchToBaser,
  OpenBuyingCoinsPop,
  CloseBuyingCoinsPop,
  OpenBuycredit,
  CloseBuycredit,
  OpenBookingSuccessPop,
  CloseBookingSuccessPop,
  OpenBookingConfirmPop,
  CloseBookingConfirmPop,
  OpenBookingTimePop,
  OpenBst10Table,
  CloseBst10Table,
  OpenBst10Time,
  CloseBst10Time,
  CloseBookingTimePop,
} = PopUpModalSlice.actions;
export default PopUpModalSlice.reducer;

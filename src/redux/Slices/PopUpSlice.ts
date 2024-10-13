import { createSlice } from "@reduxjs/toolkit";
interface PopUpModalState {
  BuyingCoinsPop: boolean;
  Buycredit: boolean;
}

const initialState: PopUpModalState = {
  BuyingCoinsPop: false,
  Buycredit: false,
};

const PopUpModalSlice = createSlice({
  name: "PopUpModal",
  initialState,
  reducers: {
    OpenBuyingCoinsPop(state) {
      state.BuyingCoinsPop = true;
    },
    CloseBuyingCoinsPop(state) {
      state.BuyingCoinsPop = false;
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
  OpenBuyingCoinsPop,
  CloseBuyingCoinsPop,
  OpenBuycredit,
  CloseBuycredit,
} = PopUpModalSlice.actions;
export default PopUpModalSlice.reducer;

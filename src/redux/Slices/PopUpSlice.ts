import { createSlice } from "@reduxjs/toolkit";
interface PopUpModalState {
  BuyingCoinsPop: boolean;
}

const initialState: PopUpModalState = {
  BuyingCoinsPop: false,
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
  },
});
export const { OpenBuyingCoinsPop, CloseBuyingCoinsPop } =
  PopUpModalSlice.actions;
export default PopUpModalSlice.reducer;

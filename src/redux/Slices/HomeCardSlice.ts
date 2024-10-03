import { createSlice } from "@reduxjs/toolkit";

interface intitstate {
  CardShap: "col" | "row";
}

const initialState: intitstate = {
  CardShap: "col",
};

const HomeCardSlice = createSlice({
  name: "HomeCard",
  initialState,
  reducers: {
    changeCardShapState(state, action) {
      state.CardShap = action.payload;
    },
  },
});

export const { changeCardShapState } = HomeCardSlice.actions;
export default HomeCardSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
export interface SelectedTimeType {
  id: string;
  from_time: string;
  to_time: string;
  date: string;
  day_name: string;
  repeat: boolean;
  color?: 2;
}
interface intitstate {
  SelectedTime: SelectedTimeType[];
}

const initialState: intitstate = {
  SelectedTime: [],
};

const Bst10Slice = createSlice({
  name: "Bst10",
  initialState,
  reducers: {
    SetSelectedTimeFromApi(state, action) {
      state.SelectedTime = action.payload;
    },
    addNewSelectedTime(state, action) {
      state.SelectedTime.push(action.payload);
    },
    DeleteSelectedTime(state, action) {
      const array = state.SelectedTime.filter(
        (ele) => ele.id != action.payload
      );
      state.SelectedTime = array;
    },
    EmptyAllSelectedTime(state) {
      state.SelectedTime = [];
    },
  },
});

export const {
  addNewSelectedTime,
  SetSelectedTimeFromApi,
  EmptyAllSelectedTime,
  DeleteSelectedTime,
} = Bst10Slice.actions;
export default Bst10Slice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// interface intitstate {
//   SubNewSelectedTime: {
//     id: string;
//     from_time: string;
//     to_time: string;
//   }[];
// }
// const initialState: intitstate = {
//   SubNewSelectedTime: [],
// };
// const Bst10SubSlice = createSlice({
//   name: "Bst10Sub",
//   initialState,
//   reducers: {
//     DeleteSubNewSelectedTime(state, action) {
//       const array = state.SubNewSelectedTime.filter(
//         (ele) => ele.id != action.payload
//       );
//       state.SubNewSelectedTime = array;
//     },
//     addSubNewSelectedTime(state, action) {
//       state.SubNewSelectedTime.push(action.payload);
//     },
//     EmptyAllSubNewSelectedTime(state) {
//       state.SubNewSelectedTime = [];
//     },
//   },
// });
// export const {
//   EmptyAllSubNewSelectedTime,
//   addSubNewSelectedTime,
//   DeleteSubNewSelectedTime,
// } = Bst10SubSlice.actions;
// export default Bst10SubSlice.reducer;

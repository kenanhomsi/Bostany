import { createSlice } from "@reduxjs/toolkit";
import { qualificationType } from "../../Types";

interface intitstate {
  QualificationDataArray: qualificationType[];
}

const initialState: intitstate = {
  QualificationDataArray: [
    {
      id: 1,
      issuer: "",
      // Academic_degree: "البكالوريوس",
      cartificate: "",
      year: "",
    },
  ],
};

const QualificationSlice = createSlice({
  name: "Qualification",
  initialState,
  reducers: {
    AddNewQualificationData(state) {
      state.QualificationDataArray.push({
        id: state.QualificationDataArray.length,
        issuer: "",
        // Academic_degree: "",
        cartificate: "",
        year: "",
      });
    },
    changeQualificationData(state, action) {
      state.QualificationDataArray = state.QualificationDataArray.map((ele) => {
        if (ele.id == action.payload.id) {
          return action.payload;
        } else {
          return ele;
        }
      });
    },
    SetQualificationData(state, action) {
      state.QualificationDataArray = action.payload;
    },
    EmptyQualificationData(state) {
      state.QualificationDataArray = [
        {
          id: 0,
          issuer: "",
          // Academic_degree: "البكالوريوس",
          cartificate: "",
          year: "",
        },
      ];
    },
  },
});

export const {
  AddNewQualificationData,
  changeQualificationData,
  EmptyQualificationData,
  SetQualificationData,
} = QualificationSlice.actions;
export default QualificationSlice.reducer;

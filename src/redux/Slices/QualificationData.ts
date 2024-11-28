import { createSlice } from "@reduxjs/toolkit";
import { qualificationType } from "../../Types";

interface intitstate {
  QualificationDataArray: qualificationType[];
}

const initialState: intitstate = {
  QualificationDataArray: [
    {
      id: "0",
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
        id: Math.random().toString(16).slice(2),
        issuer: "",
        // Academic_degree: "",
        cartificate: "",
        year: "",
      });
    },
    DeleteQualificationData(state, action) {
      const newArray = state.QualificationDataArray.filter(
        (ele) => ele.id != action.payload
      );
      state.QualificationDataArray = newArray;
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
          id: "0",
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
  DeleteQualificationData,
  EmptyQualificationData,
  SetQualificationData,
} = QualificationSlice.actions;
export default QualificationSlice.reducer;

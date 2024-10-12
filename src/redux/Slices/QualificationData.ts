import { createSlice } from "@reduxjs/toolkit";
import { qualificationType } from "../../Types";

interface intitstate {
  QualificationDataArray: qualificationType[];
}

const initialState: intitstate = {
  QualificationDataArray: [
    {
      id: 0,
      educational_institution: "",
      Academic_degree: "",
      Specialization: "",
      Graduation_date: "",
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
        educational_institution: "",
        Academic_degree: "",
        Specialization: "",
        Graduation_date: "",
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
  },
});

export const { AddNewQualificationData, changeQualificationData } =
  QualificationSlice.actions;
export default QualificationSlice.reducer;

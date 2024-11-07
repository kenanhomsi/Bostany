import { createSlice } from "@reduxjs/toolkit";
import { ExperiencesType } from "../../Types";

interface intitstate {
  ExperiencesData: ExperiencesType[];
}

const initialState: intitstate = {
  ExperiencesData: [
    {
      id: 0,
      issuer: "",
      job_title: "",
      year: "",
    },
  ],
};

const ExperiencesSlice = createSlice({
  name: "Experiences",
  initialState,
  reducers: {
    AddNewExperiencesData(state) {
      state.ExperiencesData.push({
        id: state.ExperiencesData.length,
        issuer: "",
        job_title: "",
        year: "",
      });
    },
    changeExperiencesData(state, action) {
      state.ExperiencesData = state.ExperiencesData.map((ele) => {
        if (ele.id == action.payload.id) {
          return action.payload;
        } else {
          return ele;
        }
      });
    },
    setExperiencesData(state, action) {
      state.ExperiencesData = action.payload;
    },
    EmptyExperiencesData(state) {
      state.ExperiencesData = [
        {
          id: 0,
          issuer: "",
          job_title: "",
          year: "",
        },
      ];
    },
  },
});

export const {
  AddNewExperiencesData,
  changeExperiencesData,
  EmptyExperiencesData,
  setExperiencesData,
} = ExperiencesSlice.actions;
export default ExperiencesSlice.reducer;

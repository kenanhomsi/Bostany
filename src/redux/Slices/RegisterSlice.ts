import { createSlice } from "@reduxjs/toolkit";

interface intitstate {
  RegisterAs: "Baser" | "Bostany";
}

const initialState: intitstate = {
  RegisterAs: "Baser",
};

const RegisterSlice = createSlice({
  name: "Register",
  initialState,
  reducers: {
    changeRegisterAsState(state, action) {
      state.RegisterAs = action.payload;
    },
  },
});

export const { changeRegisterAsState } = RegisterSlice.actions;
export default RegisterSlice.reducer;

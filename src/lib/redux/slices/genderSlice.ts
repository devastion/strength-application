import type { RootState } from "@lib/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GenderState {
  gender: string;
}

const initialState: GenderState = {
  gender: "male",
};

export const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    setGenderState: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
});

export const { setGenderState } = genderSlice.actions;

export const selectGenderState = (state: RootState) => state.gender.gender;

export default genderSlice.reducer;

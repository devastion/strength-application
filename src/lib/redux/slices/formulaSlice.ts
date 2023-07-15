import type { RootState } from "@lib/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormulaState {
  formula: string;
}

const initialState: FormulaState = {
  formula: "weight * (36 / (37 - reps))",
};

export const formulaSlice = createSlice({
  name: "formulas",
  initialState,
  reducers: {
    setFormulaState: (state, action: PayloadAction<string>) => {
      state.formula = action.payload;
    },
  },
});

export const { setFormulaState } = formulaSlice.actions;

export const selectFormulaState = (state: RootState) => state.formulas.formula;

export default formulaSlice.reducer;

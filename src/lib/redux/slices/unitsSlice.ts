import type { RootState } from "@lib/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UnitsState {
  unit: "kilograms" | "pounds";
}

const initialState: UnitsState = {
  unit: "kilograms",
};

export const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    setUnitState: (state, action: PayloadAction<"kilograms" | "pounds">) => {
      state.unit = action.payload;
    },
  },
});

export const { setUnitState } = unitsSlice.actions;

export const selectUnitsState = (state: RootState) => state.units.unit;

export default unitsSlice.reducer;

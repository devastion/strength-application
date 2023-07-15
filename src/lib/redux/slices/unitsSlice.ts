import type { RootState } from "@lib/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface UnitsState {
  unit: "kilograms" | "pounds";
}

const initialState: UnitsState = {
  unit: "kilograms",
};

export const settingsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    setUnitKilograms: (state) => {
      state.unit = "kilograms";
    },
    setUnitPounds: (state) => {
      state.unit = "pounds";
    },
  },
});

export const { setUnitKilograms, setUnitPounds } = settingsSlice.actions;

export const selectUnitsState = (state: RootState) => state.units.unit;

export default settingsSlice.reducer;

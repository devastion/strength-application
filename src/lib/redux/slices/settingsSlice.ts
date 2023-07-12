import type { RootState } from "@lib/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
  isOpen: boolean;
}

const initialState: SettingsState = {
  isOpen: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpen } = settingsSlice.actions;

export const selectSettingsState = (state: RootState) => state.settings.isOpen;

export default settingsSlice.reducer;

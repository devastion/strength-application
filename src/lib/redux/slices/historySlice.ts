import type { RootState } from "@lib/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Entry } from "@root/modules/History/components/HistoryEntry/HistoryEntries";

interface HistoryState {
  rm: Entry[];
  wilks: Entry[];
}

export interface HistoryPayload {
  page: "rm" | "wilks";
  value: Entry;
}

const initialState: HistoryState = {
  rm: [],
  wilks: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    pushToHistory: (state, action: PayloadAction<HistoryPayload>) => {
      state[action.payload.page].push(action.payload.value);
    },
    clearHistory: (state, action: PayloadAction<HistoryPayload>) => {
      state[action.payload.page] = [];
    },
  },
});

export const { pushToHistory, clearHistory } = historySlice.actions;

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
export const selectHistoryStateRM = (state: RootState) => state.history.rm;
export const selectHistoryStateWilks = (state: RootState) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  state.history.wilks;

export default historySlice.reducer;

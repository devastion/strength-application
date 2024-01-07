import type { RootState } from "@lib/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Entry } from "@root/modules/History/components/HistoryEntry/HistoryEntries";

interface HistoryState {
  rm: Entry[];
  wilks: Entry[];
}

interface PagePayload {
  page: "rm" | "wilks";
}

interface ValuePayload {
  value: Entry;
}

interface RemovePayload {
  id: number;
}

const initialState: HistoryState = {
  rm: [],
  wilks: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    pushToHistory: (
      state,
      action: PayloadAction<PagePayload & ValuePayload>
    ) => {
      state[action.payload.page].push(action.payload.value);
    },
    clearHistory: (state, action: PayloadAction<PagePayload>) => {
      state[action.payload.page] = [];
    },
    removeHistoryItem: (
      state,
      action: PayloadAction<PagePayload & RemovePayload>
    ) => {
      state[action.payload.page].splice(action.payload.id, 1);
    },
  },
});

export const { pushToHistory, clearHistory, removeHistoryItem } =
  historySlice.actions;

export const selectHistoryStateRM = (state: RootState) => state.history.rm;
export const selectHistoryStateWilks = (state: RootState) =>
  state.history.wilks;

export default historySlice.reducer;

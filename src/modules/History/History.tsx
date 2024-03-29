import { Button } from "@components/ui/button";
import { useAppDispatch, useAppSelector } from "@root/hooks";
import {
  clearHistory,
  pushToHistory,
  selectHistoryStateRM,
  selectHistoryStateWilks,
} from "@root/lib/redux/slices/historySlice";

import { HistoryEntries } from "./components/HistoryEntry";
import { Entry } from "./components/HistoryEntry/HistoryEntries";

interface IHistory {
  page: "rm" | "wilks";
  value: Entry;
  saveIsActive: boolean;
}

export const History = ({ page, value, saveIsActive }: IHistory) => {
  const dispatch = useAppDispatch();
  const entries = useAppSelector(
    page === "rm" ? selectHistoryStateRM : selectHistoryStateWilks
  );
  return (
    <>
      <div className="mt-5 flex w-3/4 flex-row items-center">
        {entries.length > 0 && (
          <Button
            variant="outline"
            onClick={() => dispatch(clearHistory({ page: page }))}
          >
            Clear History
          </Button>
        )}
        {saveIsActive && (
          <Button
            className="ml-auto"
            variant="outline"
            onClick={() =>
              saveIsActive &&
              dispatch(pushToHistory({ page: page, value: value }))
            }
          >
            Save to History
          </Button>
        )}
      </div>
      {entries.map((entry, i) => {
        return (
          <HistoryEntries
            key={i}
            id={i}
            entries={entry}
            page={page}
          />
        );
      })}
    </>
  );
};

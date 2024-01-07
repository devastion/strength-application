import { Button } from "@components/ui/button";

import { HistoryEntries } from "./components/HistoryEntry";
import { Entry } from "./components/HistoryEntry/HistoryEntries";

// TODO: Fix typings in History feature

interface IHistory {
  saveButtonFn: any;
  clearHistoryFn: any;
  entries: Entry[];
}

export const History = ({
  saveButtonFn,
  entries,
  clearHistoryFn,
}: IHistory) => {
  return (
    <>
      <Button
        variant="outline"
        className="mt-5 w-3/4"
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment
        onClick={saveButtonFn}
      >
        Save to History
      </Button>
      {entries.map((entry, i) => {
        return (
          <div
            key={i}
            className="flex w-3/4 flex-col items-center gap-5 pt-5"
          >
            <HistoryEntries entries={entry} />
          </div>
        );
      })}
      {entries.length > 0 && (
        <Button
          variant="outline"
          className="mt-5"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment
          onClick={clearHistoryFn}
        >
          Clear History
        </Button>
      )}
    </>
  );
};

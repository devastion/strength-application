import { useAppDispatch } from "@root/hooks";
import { removeHistoryItem } from "@root/lib/redux/slices/historySlice";

export interface Entry {
  [key: string]: number | string;
}
interface IHistoryEntries {
  id: number;
  entries: Entry;
  page: "rm" | "wilks";
}

export const HistoryEntries = ({ id, entries, page }: IHistoryEntries) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex w-full flex-row justify-between rounded-md border border-slate-700 bg-slate-900 p-3">
      <div className="flex flex-col gap-1 text-sm font-medium uppercase text-slate-300">
        {Object.keys(entries).map((entry) => {
          return (
            <div key={id}>
              {entry} - {entries[entry]}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => dispatch(removeHistoryItem({ page: page, id: id }))}
        className="flex h-0 w-0 items-center justify-center rounded-full bg-slate-600 p-2.5 text-xs font-bold text-slate-900 hover:bg-slate-800"
      >
        X
      </button>
    </div>
  );
};

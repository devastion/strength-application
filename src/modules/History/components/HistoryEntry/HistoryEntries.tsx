export interface Entry {
  [key: string]: number | string;
}
interface IHistoryEntries {
  entries: Entry;
}

export const HistoryEntries = ({ entries }: IHistoryEntries) => {
  return (
    <div className="flex w-full flex-row justify-between rounded-sm bg-slate-900 p-3">
      <div className="flex flex-col gap-1 uppercase text-slate-300">
        {Object.keys(entries).map((entry, i) => {
          return (
            <div key={i}>
              {entry} - {entries[entry]}
            </div>
          );
        })}
      </div>
      {/* <div className="flex h-0 w-0 items-center justify-center rounded-full bg-red-700 p-2.5 text-xs">
        X
      </div> */}
    </div>
  );
};

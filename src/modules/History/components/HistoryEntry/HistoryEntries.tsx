import { Button } from "@root/components/ui/button";
import { Card, CardContent } from "@root/components/ui/card";
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

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const HistoryEntries = ({ id, entries, page }: IHistoryEntries) => {
  const dispatch = useAppDispatch();
  return (
    <Card className="mt-5 w-3/4">
      <CardContent className="flex w-full flex-row justify-between !p-3">
        <div className="flex flex-col gap-1 text-sm font-medium">
          {Object.keys(entries).map((entry, i) => {
            return (
              <div key={i}>
                {capitalizeFirstLetter(entry)} - {entries[entry]}
              </div>
            );
          })}
        </div>
        <Button
          onClick={() => dispatch(removeHistoryItem({ page: page, id: id }))}
          variant="outline"
          className="!h-0 !px-2 !py-3 text-xs font-bold uppercase"
        >
          x
        </Button>
      </CardContent>
    </Card>
  );
};

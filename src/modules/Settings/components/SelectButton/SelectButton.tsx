import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

interface SelectItem {
  name: string;
  value: string;
}

interface SelectButtonProps {
  placeholder: string;
  label: string;
  items: SelectItem[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  heading: string;
}

export const SelectButton = ({
  placeholder,
  label,
  items,
  value,
  setValue,
  heading,
}: SelectButtonProps) => {
  const selectItems = items.map((item, key) => {
    return (
      <SelectItem
        key={key}
        value={item.value}
      >
        {item.name}
      </SelectItem>
    );
  });

  return (
    <>
      <span className="text-sm text-slate-800 dark:text-slate-300">
        {heading}
      </span>
      <Select
        value={value}
        onValueChange={setValue}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {selectItems}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

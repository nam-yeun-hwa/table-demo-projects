import { ChangeEvent, useState } from "react";

type Props = {
  filterId: string;
  onFilterHandler: (filterValue: string, filterId: string) => void;
};

export default function FilterBox({ onFilterHandler, filterId }: Props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => {
        onFilterHandler(e.target.value, filterId);
        setInputValue(e.target.value);
      }}
      required
    />
  );
}

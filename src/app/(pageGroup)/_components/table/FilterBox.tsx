import { User } from "app/(pageGroup)/page";
import { ChangeEvent, useState } from "react";

type Props = {
  filterId: string;
  onFilterHandler: (key: keyof User, value: string) => void;
};

export default function FilterBox({ onFilterHandler, filterId }: Props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => {
        onFilterHandler(filterId as keyof User, e.target.value);
        setInputValue(e.target.value);
      }}
      required
    />
  );
}

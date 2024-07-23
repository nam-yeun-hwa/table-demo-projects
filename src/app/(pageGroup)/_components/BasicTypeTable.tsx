import { useEffect } from "react";

type headerType = {
  accessorKey: string;
  header: string;
};

// export interface IGrideCell<T> {
//   position: IGridPosition;
//   data: Array<T>;
//   change: (position: IGridPosition, value?: T) => void;
// }

type TableProps<T> = {
  columns: Array<headerType>;
  data: Array<T>;
};

// props: IGridProps<T>;

export default function BasicTypeTable<T>({ columns, data }: TableProps<T>) {
  useEffect(() => {
    console.log(columns, data);
  }, [columns, data]);
  return <></>;
}

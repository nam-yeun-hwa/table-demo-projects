"use client";

import { useEffect } from "react";
import HeaderAction from "./HeaderAction";
import style from "app/(pageGroup)/_components/table/BasicTypeTable.module.css";

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

export default function BasicTypeTable<T extends { [key: string]: any }>({
  columns,
  data,
}: TableProps<T>) {
  useEffect(() => {
    console.log(columns, data);
  }, [columns, data]);
  return (
    <>
      <table>
        <thead>
          <tr className={style.tr}>
            {columns.map((v) => {
              return (
                <th className={style.th} key={v.accessorKey}>
                  {<HeaderAction text={v.header} />}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((v, key) => {
            return (
              <tr key={key} className={style.td}>
                {Object.entries(v).map(([key, value]) => (
                  <td key={key}>{value}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

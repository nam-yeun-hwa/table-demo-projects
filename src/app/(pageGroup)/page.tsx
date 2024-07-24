"use client";

import { useEffect, useState } from "react";
import BasicTypeTable from "./_components/table/BasicTypeTable";
import {
  sortNumbersAscending,
  sortNumbersDescending,
  sortStringAscending,
} from "./utility/utility";

type User = {
  id: number;
  email: string;
  fullname: string;
  role: string;
};

type headerType = {
  accessorKey: string;
  header: string;
};

const columns: Array<headerType> = [
  {
    accessorKey: "id",
    header: "번호",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "fullname",
    header: "이름",
  },
  {
    accessorKey: "role",
    header: "권한",
  },
];

const userData: Array<User> = [
  {
    id: 1,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 2,
    email: "johndoe@example.com",
    fullname: "John Doe",
    role: "employee",
  },
  {
    id: 3,
    email: "janedoe@example.com",
    fullname: "Jane Doe",
    role: "employee",
  },
  {
    id: 4,
    email: "michael.smith@example.com",
    fullname: "Michael Smith",
    role: "manager",
  },
  {
    id: 5,
    email: "emily.jones@example.com",
    fullname: "Emily Jones",
    role: "employee",
  },
  {
    id: 6,
    email: "chris.lee@example.com",
    fullname: "Chris Lee",
    role: "supervisor",
  },
  {
    id: 7,
    email: "sarah.williams@example.com",
    fullname: "Sarah Williams",
    role: "employee",
  },
  {
    id: 8,
    email: "david.brown@example.com",
    fullname: "David Brown",
    role: "manager",
  },
  {
    id: 9,
    email: "lisa.miller@example.com",
    fullname: "Lisa Miller",
    role: "supervisor",
  },
  {
    id: 10,
    email: "kevin.moore@example.com",
    fullname: "Kevin Moore",
    role: "employee",
  },
];

export default function page() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const [userArray, setUserArray] = useState<Array<User>>([...userData]);

  /**
   * @function onClickHeaderClick
   * @param id
   * @description 테이블 헤더 아이템 클릭시 SORT
   */
  const onClickHeaderClick = (accessorKey: string) => {
    if (typeof accessorKey === "number") {
      setUserArray(sortNumbersDescending(userArray, accessorKey));
    } else if (typeof accessorKey === "string") {
      setUserArray(sortStringAscending(userArray, accessorKey));
    }
  };

  return (
    <BasicTypeTable
      columns={columns}
      data={userArray}
      headerSortFunc={onClickHeaderClick}
    />
  );
}

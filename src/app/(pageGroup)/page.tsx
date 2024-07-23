"use client";

import { useState } from "react";
import BasicTypeTable from "./_components/BasicTypeTable";

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
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 3,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 4,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 5,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 6,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 7,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 8,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 9,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 10,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
];

export default function page() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5, //customize the default page size
  });

  return <BasicTypeTable columns={columns} data={userData} />;
}

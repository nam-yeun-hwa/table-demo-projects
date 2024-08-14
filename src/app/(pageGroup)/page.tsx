"use client";

import { useEffect, useState } from "react";
import BasicTypeTable from "./_components/table/BasicTypeTable";
import {
  sortNumbersAscending,
  sortNumbersDescending,
  sortStringAscending,
  sortStringDescending,
} from "./utility/utility";
import TogglePanel from "./_components/table/TogglePanel";
import style from "app/(pageGroup)/page.module.css";

export type User = {
  id: number | undefined;
  email: string | undefined;
  fullname: string | undefined;
  role: string | undefined;
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
    email: "aaa@hanmail.net",
    fullname: "nam yeun hwa",
    role: "a-manager",
  },
  {
    id: 2,
    email: "aaa@hanmail.net",
    fullname: "John Doe",
    role: "a-manager",
  },
  {
    id: 3,
    email: "aaa@hanmail.net",
    fullname: "Jane Doe",
    role: "a-manager",
  },
  {
    id: 4,
    email: "ccc.smith@example.com",
    fullname: "Michael Smith",
    role: "a-manager",
  },
  {
    id: 5,
    email: "abcde.jones@example.com",
    fullname: "Emily Jones",
    role: "e-employee",
  },
  {
    id: 6,
    email: "chris.lee@example.com",
    fullname: "Chris Lee",
    role: "f-supervisor",
  },
  {
    id: 7,
    email: "sarah.williams@example.com",
    fullname: "Sarah Williams",
    role: "g-employee",
  },
  {
    id: 8,
    email: "david.brown@example.com",
    fullname: "David Brown",
    role: "h-manager",
  },
  {
    id: 9,
    email: "lisa.miller@example.com",
    fullname: "Lisa Miller",
    role: "i-supervisor",
  },
  {
    id: 10,
    email: "kevin.moore@example.com",
    fullname: "Kevin Moore",
    role: "j-employee",
  },
];

interface Filters {
  [key: string]: string | number;
}

export default function page() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [toggleSortBool, setToggleSortBool] = useState(false);
  const [userArray, setUserArray] = useState<Array<User>>([...userData]);
  const [filterInputToggle, setFilterInputToggle] = useState(true);
  const [filters, setFilters] = useState<Filters>({});

  /**
   * @function onClickHeaderClick
   * @param id
   * @description 테이블 헤더 아이템 클릭시 SORT
   */
  const onSortHandler = (accessorKey: string) => {
    if (toggleSortBool) {
      if (typeof accessorKey === "number") {
        setUserArray(sortNumbersDescending(userArray, accessorKey));
      } else if (typeof accessorKey === "string") {
        setUserArray(sortStringDescending(userArray, accessorKey));
      }
      setToggleSortBool(!toggleSortBool);
    } else {
      if (typeof accessorKey === "number") {
        setUserArray(sortNumbersAscending(userArray, accessorKey));
      } else if (typeof accessorKey === "string") {
        setUserArray(sortStringAscending(userArray, accessorKey));
      }
      setToggleSortBool(!toggleSortBool);
    }
  };

  /**
   * @function onFilterHandler
   * @param key userArray 키
   * @param value 필터값 단어
   */
  const onFilterHandler = (key: keyof User, value: string) => {
    setFilters((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  /**
   * 테이블 속성값으로 필터링
   */
  useEffect(() => {
    const filtered = userData.filter((item) => {
      return Object.keys(filters).every((filterKey) => {
        const filterValue = filters[filterKey as keyof User];
        if (!filterValue) return true; // 필터 값이 없으면 모든 항목 통과
        return item[filterKey as keyof User]
          ?.toString()
          .toLowerCase()
          .includes(filterValue.toString().toLowerCase());
      });
    });

    console.log("filtered", filtered);

    setUserArray(filtered);
  }, [filters]);

  /**
   * @function handleFilter
   * @description 테이블 각각의 colum input filter에 따라 데이터 걸러내기
   */
  const handleFilter = () => {
    const filteredItems = userData.filter((user) => {});
  };

  return (
    <div className={style.wrapper}>
      <div className={style.tableContainer}>
        <TogglePanel />
        <BasicTypeTable
          columns={columns}
          data={userArray}
          onSortHandler={onSortHandler}
          filterInputToggle={filterInputToggle}
          onFilterHandler={onFilterHandler}
        />
      </div>
    </div>
  );
}

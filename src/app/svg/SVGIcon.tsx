import { TABLE_ICON } from "app/constant/Constant";

function TablerIconSortByDecending() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-sort-descending"
    >
      <path d="M4 6l9 0"></path>
      <path d="M4 12l7 0"></path>
      <path d="M4 18l7 0"></path>
      <path d="M15 15l3 3l3 -3"></path>
      <path d="M18 6l0 12"></path>
    </svg>
  );
}

function TablerIconSortByAscending() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-sort-ascending"
    >
      <path d="M4 6l7 0"></path>
      <path d="M4 12l7 0"></path>
      <path d="M4 18l9 0"></path>
      <path d="M15 9l3 -3l3 3"></path>
      <path d="M18 6l0 12"></path>
    </svg>
  );
}

function TablerIconArrowsSort() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="tabler-icon tabler-icon-arrows-sort"
    >
      <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
      <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
    </svg>
  );
}

export function SVGIcon(icon: TABLE_ICON) {
  switch (icon) {
    case TABLE_ICON.ICON_DESC:
      return <TablerIconSortByDecending />;
    case TABLE_ICON.ICON_ASC:
      return <TablerIconSortByAscending />;
    default:
      return <TablerIconArrowsSort />;
  }
}

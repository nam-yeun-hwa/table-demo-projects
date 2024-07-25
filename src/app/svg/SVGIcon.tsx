import { TABLE_ICON } from "app/constant/Constant";

function IconDecending() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tabler-icon tabler-icon-sort-descending"
      color="#bfc3c7"
    >
      <path d="M4 6l9 0"></path>
      <path d="M4 12l7 0"></path>
      <path d="M4 18l7 0"></path>
      <path d="M15 15l3 3l3 -3"></path>
      <path d="M18 6l0 12"></path>
    </svg>
  );
}

function IconAscending() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tabler-icon tabler-icon-sort-ascending"
      color="#bfc3c7"
    >
      <path d="M4 6l7 0"></path>
      <path d="M4 12l7 0"></path>
      <path d="M4 18l9 0"></path>
      <path d="M15 9l3 -3l3 3"></path>
      <path d="M18 6l0 12"></path>
    </svg>
  );
}

function IconSortBasic() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tabler-icon tabler-icon-arrows-sort"
      color="#bfc3c7"
    >
      <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
      <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
    </svg>
  );
}

function IconSearch() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tabler-icon tabler-icon-search"
    >
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </svg>
  );
}

function IconFilter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tabler-icon tabler-icon-filter-off"
    >
      <path d="M8 4h12v2.172a2 2 0 0 1 -.586 1.414l-3.914 3.914m-.5 3.5v4l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227"></path>
      <path d="M3 3l18 18"></path>
    </svg>
  );
}

export function SVGIcon(icon: TABLE_ICON) {
  switch (icon) {
    case TABLE_ICON.ICON_DESC:
      return <IconDecending />;
    case TABLE_ICON.ICON_ASC:
      return <IconAscending />;
    case TABLE_ICON.ICON_SEARCH:
      return <IconSearch />;
    case TABLE_ICON.ICON_FILTER:
      return <IconFilter />;
    default:
      return <IconSortBasic />;
  }
}

import { TABLE_ICON } from "app/constant/Constant";
import { SVGIcon } from "app/svg/SVGIcon";
import style from "app/(pageGroup)/_components/table/TogglePanel.module.css";

export default function TogglePanel() {
  return (
    <div className={style.container}>
      <button>{SVGIcon(TABLE_ICON.ICON_FILTER)}</button>
      <button>{SVGIcon(TABLE_ICON.ICON_SEARCH)}</button>
    </div>
  );
}

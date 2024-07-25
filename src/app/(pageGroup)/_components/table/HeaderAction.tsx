import { TABLE_ELEMENT_TYPE, TABLE_ICON } from "app/constant/Constant";
import { SVGIcon } from "app/svg/SVGIcon";
import style from "app/(pageGroup)/_components/table/headerAction.module.css";
import { useState } from "react";

type Props = {
  valueKey: string;
  text: string;
  btnType?: TABLE_ELEMENT_TYPE;
  onClick: (valueKey: string) => void;
  filterInputToggle: boolean;
};

/**
 * @Function HeaderAction
 * @param param0
 * @description 테이블헤더
 */
export default function HeaderAction({
  valueKey,
  text,
  btnType,
  onClick,
  filterInputToggle,
}: Props) {
  return (
    <div className={style.element} onClick={() => onClick(valueKey)}>
      {text}
      {SVGIcon(TABLE_ICON.ICON_ASC)}
      {filterInputToggle && <div></div>}
    </div>
  );
}

import { TABLE_ELEMENT_TYPE, TABLE_ICON } from "app/constant/Constant";
import { SVGIcon } from "app/svg/SVGIcon";
import style from "app/(pageGroup)/_components/table/headerAction.module.css";

type Props = {
  text: string;
  btnType?: TABLE_ELEMENT_TYPE;
};

export default function HeaderAction({ text, btnType }: Props) {
  return (
    <div className={style.element}>
      {text}
      {SVGIcon(TABLE_ICON.ICON_ASC)}
    </div>
  );
}

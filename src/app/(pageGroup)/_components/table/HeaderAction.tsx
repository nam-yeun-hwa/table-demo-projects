import { TABLE_ELEMENT_TYPE, TABLE_ICON } from "app/constant/Constant";
import { SVGIcon } from "app/svg/SVGIcon";

type Props = {
  text: string;
  btnType?: TABLE_ELEMENT_TYPE;
};

export default function HeaderAction({ text, btnType }: Props) {
  return (
    <>
      {text}
      {SVGIcon(TABLE_ICON.ICON_ASC)}
    </>
  );
}

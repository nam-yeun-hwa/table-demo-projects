import { ReactNode } from "react";
import style from "./layout.module.css";

type Props = {
  children: ReactNode;
  search: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className={style.layoutWrapper}>
      <div className={style.sideRoot}>sideMenu</div>
      <div className={style.content}>{children}</div>
    </div>
  );
}

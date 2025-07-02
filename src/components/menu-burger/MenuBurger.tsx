import s from "./MenuBurger.module.scss";
import {
  House,
  IdCardLanyard,
  NotebookTabs,
  SquareX,
  TicketsPlane,
} from "lucide-react";

export function MenuBurger() {
  return (
    <div className={s.hamburger}>
      <div className={s.logo}>
        SkyTrack
        <img src="/logot.svg" alt="logo" />
        <div className={s.btnClose}>
          <SquareX />
        </div>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <House width={18} />
          <span>Home</span>
        </li>
        <li className={s.item}>
          <TicketsPlane width={18} />
          <span>Fligts</span>
        </li>
        <li className={s.item}>
          <IdCardLanyard width={18} />
          About
        </li>
        <li className={s.item}>
          <NotebookTabs width={18} />
          Contacts
        </li>
      </ul>
    </div>
  );
}

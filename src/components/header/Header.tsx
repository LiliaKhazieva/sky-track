import {
  House,
  IdCardLanyard,
  Menu,
  NotebookTabs,
  TicketsPlane,
} from "lucide-react";
import { ThemeToggle } from "../theme-toggle/ThemeToggle";
import styles from "./Header.module.scss";
import { useState } from "react";
import { MenuBurger } from "../menu-burger/MenuBurger";
import { Link } from "react-router";
import { PAGE } from "../../config/page.config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={PAGE.HOME} className={styles.logo}>
          SkyTrack
          <img src="logo.svg" alt="logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <House width={18} />
            <span>Home</span>
          </li>
          <li className={styles.item}>
            <TicketsPlane width={18} />
            <span>Fligts</span>
          </li>
          <li className={styles.item}>
            <IdCardLanyard width={18} />
            About
          </li>
          <li className={styles.item}>
            <NotebookTabs width={18} />
            Contacts
          </li>
        </ul>
        <button className={styles.burgerBtn} onClick={toggleMenu}>
          <Menu />
        </button>
        {isOpen && <MenuBurger onToggle={toggleMenu} />}
        <div className={styles.icons}>
          <ThemeToggle />
          <Link to={PAGE.FAVORITES}>
            <img className={styles.like} src="like.svg" alt="like" />
          </Link>
        </div>
      </div>
    </header>
  );
}

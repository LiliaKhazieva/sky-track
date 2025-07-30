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

import { PAGE } from "../../config/page.config";
import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);
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
        <div className={styles.list}>
          <Link to={PAGE.HOME} className={styles.item}>
            <House width={18} />
            <span>Home</span>
          </Link>
          <Link to={PAGE.FAVORITES} className={styles.item}>
            <TicketsPlane width={18} />
            <span>Favorites</span>
          </Link>
          <li className={styles.item}>
            <IdCardLanyard width={18} />
            About
          </li>
          <li className={styles.item}>
            <NotebookTabs width={18} />
            Contacts
          </li>
        </div>
        <button className={styles.burgerBtn} onClick={toggleMenu}>
          <Menu />
        </button>
        {isOpen && <MenuBurger onToggle={toggleMenu} />}
        {currentPath === "/favorites" ? (
          ""
        ) : (
          <div className={styles.icons}>
            <ThemeToggle />
            <Link to={PAGE.FAVORITES}>
              <img className={styles.like} src="like.svg" alt="like" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

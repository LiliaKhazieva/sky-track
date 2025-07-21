import { useTheme } from "../../providers/theme/useTheme";
import styles from "./Theme.module.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.toggle}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <img src="sun.svg" alt="sun" />
        ) : (
          <img src="moon.svg" alt="moon" />
        )}
      </button>
    </div>
  );
}

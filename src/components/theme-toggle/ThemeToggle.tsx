import { useTheme } from "../../providers/theme/useTheme";
import styles from "./Theme.module.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.toggle}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <img src="/moon.svg" alt="moon" />
        ) : (
          <img src="/sun.svg" alt="sun" />
        )}
      </button>
    </div>
  );
}

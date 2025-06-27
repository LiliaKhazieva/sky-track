import { createContext } from "react";

export type ThemeType = "light" | "dark";

export interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

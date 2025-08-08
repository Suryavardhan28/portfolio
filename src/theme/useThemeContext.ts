import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "./themeContext.config";

export const useThemeContext = () => useContext<ThemeContextType>(ThemeContext);

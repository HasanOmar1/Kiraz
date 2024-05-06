import React, { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type ContextValue = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  getThemeClassName: () => string;
};

const ThemeContext = createContext<null | ContextValue>(null);

const localTheme = localStorage.getItem("theme");

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(localTheme ?? "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const getThemeClassName = () => {
    return theme === "dark" ? "dark" : "light";
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, getThemeClassName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("This Component is not wrapped in a ThemeContextProvider");
  }

  return context;
};

export default ThemeContextProvider;

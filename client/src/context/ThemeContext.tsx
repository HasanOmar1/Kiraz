import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type ContextValue = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  getThemeClassName: () => string;
};

const ThemeContext = createContext<null | ContextValue>(null);

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("dark");

  const getThemeClassName = () => {
    return theme === "dark" ? "dark" : "light";
  };

  return (
    <ThemeContext.Provider value={{ setTheme, getThemeClassName }}>
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

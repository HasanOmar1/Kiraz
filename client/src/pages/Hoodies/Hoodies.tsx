import React from "react";
import { useThemeContext } from "../../context/ThemeContext";

const Hoodies = () => {
  const { getThemeClassName } = useThemeContext();

  return <main className={`Hoodies Page ${getThemeClassName()}`}>Hoodies</main>;
};

export default Hoodies;

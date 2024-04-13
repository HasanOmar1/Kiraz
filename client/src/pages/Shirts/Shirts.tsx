import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { useLocation } from "react-router-dom";

const Shirts = () => {
  const { getThemeClassName } = useThemeContext();
  const { state } = useLocation();
  console.log(state);

  return <main className={`Shirts Page ${getThemeClassName()}`}>Shirts</main>;
};

export default Shirts;

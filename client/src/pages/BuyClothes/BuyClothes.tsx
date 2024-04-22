import React from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";

const BuyClothes = () => {
  const { getThemeClassName } = useThemeContext();

  const { state } = useLocation();
  console.log(state);
  return (
    <main className={`Page BuyClothes ${getThemeClassName()}`}>
      {state.name}
    </main>
  );
};

export default BuyClothes;

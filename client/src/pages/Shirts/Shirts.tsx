import "./Shirts.css";
import { useEffect } from "react";
import { useClothesContext } from "../../context/ClothesContext";
import { useThemeContext } from "../../context/ThemeContext";
import { useLocation } from "react-router-dom";

const Shirts = () => {
  const { getClothesByType, getClothesByTypeData } = useClothesContext();
  const { getThemeClassName } = useThemeContext();
  const { pathname } = useLocation();

  const path = pathname.split("/")[2];

  // useEffect(() => {
  //   getClothesByType(path);
  // }, []);

  console.log(getClothesByTypeData);

  const title = path.split("")[0].toUpperCase() + path.slice(1);
  return (
    <main className={`Shirts Page ${getThemeClassName()}`}>
      <div id="title">
        <h1>{title}</h1>
      </div>
    </main>
  );
};

export default Shirts;

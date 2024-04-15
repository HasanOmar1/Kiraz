import { useLocation } from "react-router-dom";
import "./Collection.css";
import { useThemeContext } from "../../context/ThemeContext";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect } from "react";
// import arrowSvg from "../../assets/svgs/arrow.svg";

const Collection = () => {
  const { getClothesByType, getClothesByTypeData } = useClothesContext();

  const { pathname } = useLocation();
  const { getThemeClassName } = useThemeContext();

  const path = pathname.split("/")[2];

  useEffect(() => {
    getClothesByType(path);
  }, []);

  console.log(getClothesByTypeData);

  const title = path.split("")[0].toUpperCase() + path.slice(1);

  return (
    <main className={`Collection Page ${getThemeClassName()}`}>
      <div id="title">
        <h1>{title}</h1>
        <p>{getClothesByTypeData?.length} Products</p>
      </div>
      <div className="data-container">
        <div className="filters">
          <p>FILTERS</p>
          <div className="filter-by">
            <p>COLOR</p>
            {/* <img src={arrowSvg} alt="" /> */}
            <hr />
            <p>SIZE</p>
            <hr />
          </div>
        </div>
        <div className="data"></div>
      </div>
    </main>
  );
};

export default Collection;

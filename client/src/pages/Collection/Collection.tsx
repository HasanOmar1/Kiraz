import { useLocation } from "react-router-dom";
import "./Collection.css";
import { useThemeContext } from "../../context/ThemeContext";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect, useState } from "react";
import arrowSvg from "../../assets/svgs/arrow.svg";

const Collection = () => {
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
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
            <div className="colors-container">
              <div
                className="filter-by-data"
                onClick={() => setIsShowingColors((prev) => !prev)}
              >
                <p>COLOR</p>
                <img
                  src={arrowSvg}
                  alt="chevron svg"
                  id="arrow-svg"
                  className={`${
                    isShowingColors ? "show-color-data" : "hide-color-data "
                  }`}
                />
              </div>
              <div className="colors">
                <p>Green</p>
                <p>Black</p>
              </div>
            </div>
            <hr />
            <div
              className="filter-by-data"
              onClick={() => setIsShowingSizes((prev) => !prev)}
            >
              <p>SIZE</p>
              <img
                src={arrowSvg}
                alt="chevron svg"
                id="arrow-svg"
                className={`${
                  isShowingSizes ? "show-size-data" : "hide-size-data "
                }`}
              />
            </div>
            <hr />
          </div>
        </div>
        <div className="data"></div>
      </div>
    </main>
  );
};

export default Collection;

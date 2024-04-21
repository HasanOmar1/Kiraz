import "./Collection.css";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect, useState } from "react";
import FilterData from "../../components/FilterData/FilterData";
import Cards from "../../components/Cards/Cards";

const Collection = () => {
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
  const { getClothesByTypeData, getClothesByType, optionsForQuery } =
    useClothesContext();
  const { pathname } = useLocation();
  const { getThemeClassName } = useThemeContext();

  const COLORS = ["green", "black", "blue"];
  const SIZES = ["L", "M", "S"];

  const clothingType = pathname.split("/")[2];
  const title = clothingType.split("")[0].toUpperCase() + clothingType.slice(1);

  useEffect(() => {
    getClothesByType(clothingType + optionsForQuery);
  }, [clothingType, optionsForQuery]);

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
              <FilterData
                filterByText={"COLOR"}
                classNameCondition={isShowingColors}
                onClickFunction={() => setIsShowingColors((prev) => !prev)}
                panelOptions={COLORS}
                hasColor={true}
              />
              <FilterData
                filterByText={"SIZE"}
                classNameCondition={isShowingSizes}
                onClickFunction={() => setIsShowingSizes((prev) => !prev)}
                panelOptions={SIZES}
                hasColor={false}
              />
            </div>
          </div>
        </div>
        <div className="data">
          {getClothesByTypeData?.map((clothes) => {
            return (
              <Cards
                key={clothes._id}
                name={clothes.name}
                cover={clothes.img}
                price={clothes.price}
                size={clothes.size}
                color={clothes.color}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Collection;

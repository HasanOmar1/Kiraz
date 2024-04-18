import { useLocation } from "react-router-dom";
import "./Collection.css";
import { useThemeContext } from "../../context/ThemeContext";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect, useState } from "react";
import FilterData from "../../components/FilterData/FilterData";
import Cards from "../../components/Cards/Cards";

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
  const COLORS = ["Green", "Black", "Blue"];
  const SIZES = ["L", "M", "S"];

  return (
    <main className={`Collection Page ${getThemeClassName()}`}>
      <div id="title">
        <h1>{title}</h1>
        <p>{getClothesByTypeData?.length} Products</p>
      </div>
      <div className="data-container">
        <div className="filters">
          <p className="padding-left ">FILTERS</p>
          <div className="filter-by">
            <div className="colors-container">
              <FilterData
                FilterByText={"COLOR"}
                classNameCondition={isShowingColors}
                onClickFunction={() => setIsShowingColors((prev) => !prev)}
                panelOptions={COLORS}
                hasColor={true}
              />
              <FilterData
                FilterByText={"SIZE"}
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

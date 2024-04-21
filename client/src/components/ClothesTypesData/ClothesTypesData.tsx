import { useState } from "react";
import Cards from "../Cards/Cards";
import * as Types from "../../types/ClothesTypes";
import FilterData from "../FilterData/FilterData";

type ClothesTypesDataProps = {
  text: string;
  array: Types.Clothes[];
};

const COLORS = ["green", "black", "blue"];
const SIZES = ["L", "M", "S"];

const ClothesTypesData = ({ text, array }: ClothesTypesDataProps) => {
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
  return (
    <>
      <div id="title">
        <h1>{text}</h1>
        <p>{array?.length} Products</p>
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
          {array ? (
            <>
              {array.map((clothes) => {
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
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ClothesTypesData;

import { useState } from "react";
import Cards from "../Cards/Cards";
import * as Types from "../../types/ClothesTypes";
import FilterData from "../FilterData/FilterData";
import useFilteredArray from "../../hooks/useFilteredArray";
import loadingGif from "../../assets/loading-animation.gif";

type ClothesTypesDataProps = {
  text: string;
  array: Types.Clothes[];
};

const COLORS = ["green", "black", "blue"];
const SIZES = ["L", "M", "S"];

const ClothesTypesData = ({ text, array }: ClothesTypesDataProps) => {
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
  const {
    filteredArray,
    isColorChecked,
    isSizeChecked,
    setIsColorChecked,
    setIsSizeChecked,
  } = useFilteredArray(array);

  // console.log(filteredArray);
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
                isColorChecked={isColorChecked}
                isSizeChecked={isSizeChecked}
                setIsColorChecked={setIsColorChecked}
                setIsSizeChecked={setIsSizeChecked}
              />
              <FilterData
                filterByText={"SIZE"}
                classNameCondition={isShowingSizes}
                onClickFunction={() => setIsShowingSizes((prev) => !prev)}
                panelOptions={SIZES}
                hasColor={false}
                isColorChecked={isColorChecked}
                isSizeChecked={isSizeChecked}
                setIsColorChecked={setIsColorChecked}
                setIsSizeChecked={setIsSizeChecked}
              />
            </div>
          </div>
        </div>
        <div className="data">
          {filteredArray?.length ?? 0 > 0 ? (
            <>
              {filteredArray?.map((clothes: Types.Clothes) => {
                return (
                  <Cards
                    state={clothes}
                    id={clothes._id}
                    key={clothes._id}
                    name={clothes.name}
                    cover={
                      clothes.img
                        ? clothes.img
                        : clothes.color === "green"
                        ? clothes.greenImg
                        : clothes.color === "black"
                        ? clothes.blackImg
                        : clothes.color === "blue"
                        ? clothes.blueImg
                        : ""
                    }
                    price={clothes.price}
                    size={clothes.size}
                    color={clothes.color}
                  />
                );
              })}
            </>
          ) : (
            <div id="loading">
              <img src={loadingGif} alt="loading animation" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ClothesTypesData;

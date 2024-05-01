import { useState } from "react";
import * as Types from "../../types/ClothesTypes";
import FilterData from "../FilterData/FilterData";
import useFilteredArray from "../../hooks/useFilteredArray";
import ProductsCards from "../ProductsCards/ProductsCards";

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
        <p>{filteredArray?.length} Products</p>
      </div>
      <div className="data-container">
        <div className="filters">
          <p>FILTERS</p>
          <div className="filter-by">
            <div className="filter-container">
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
        <ProductsCards array={filteredArray} />
      </div>
    </>
  );
};

export default ClothesTypesData;

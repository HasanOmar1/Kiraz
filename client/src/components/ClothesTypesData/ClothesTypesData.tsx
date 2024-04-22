import { useState } from "react";
import Cards from "../Cards/Cards";
import * as Types from "../../types/ClothesTypes";
import FilterDataTest from "../FilterDataTest/FilterDataTest";

type ClothesTypesDataProps = {
  text: string;
  array: Types.Clothes[];
};

const COLORS = ["green", "black", "blue"];
const SIZES = ["L", "M", "S"];

const ClothesTypesData = ({ text, array }: ClothesTypesDataProps) => {
  const [isShowingColors, setIsShowingColors] = useState(false);
  const [isShowingSizes, setIsShowingSizes] = useState(false);
  const [isColorChecked, setIsColorChecked] = useState({
    green: false,
    black: false,
    blue: false,
  });
  const [isSizeChecked, setIsSizeChecked] = useState({
    L: false,
    M: false,
    S: false,
  });

  // const filterBy = (items: Types.Clothes[]) => {
  const filteredArray = array.filter((pants) => {
    if (isColorChecked.green && isColorChecked.black && isColorChecked.blue) {
      return (
        pants.color === "green" ||
        pants.color === "black" ||
        pants.color === "blue"
      );
    }

    if (isColorChecked.green && isColorChecked.black) {
      return pants.color === "green" || pants.color === "black";
    }

    if (isColorChecked.green && isColorChecked.blue) {
      return pants.color === "green" || pants.color === "blue";
    }

    if (isColorChecked.black && isColorChecked.blue) {
      return pants.color === "black" || pants.color === "blue";
    }

    if (isColorChecked.green) pants.color === "green";
    if (isColorChecked.blue) pants.color === "blue";
    if (isColorChecked.black) return pants.color === "black";

    // if (isSizeChecked.L) {
    //   return pants.size === "L";
    // } else if (isSizeChecked.M) {
    //   return pants.size === "M";
    // } else if (isSizeChecked.S) {
    //   return pants.size === "S";

    // }
    return pants;
  });
  // };

  console.log(filteredArray);

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
              <FilterDataTest
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
              <FilterDataTest
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
          {filteredArray ? (
            <>
              {filteredArray.map((clothes) => {
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

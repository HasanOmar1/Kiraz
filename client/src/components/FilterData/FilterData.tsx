import "./FilterData.css";
import arrowSvg from "../../assets/svgs/arrow.svg";
import { useEffect, useState } from "react";
import { useClothesContext } from "../../context/ClothesContext";
import { useLocation } from "react-router-dom";
import FilterDataOptions from "../FilterDataOptions/FilterDataOptions";

type FilterDataProps = {
  onClickFunction: () => void;
  classNameCondition: boolean;
  filterByText: string;
  panelOptions: string[];
  hasColor: boolean;
};

const FilterData = ({
  onClickFunction,
  classNameCondition,
  filterByText,
  panelOptions,
  hasColor,
}: FilterDataProps) => {
  const { pathname } = useLocation();

  const [options, setOptions] = useState("");
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

  const { getClothesByType } = useClothesContext();

  const clothingType = pathname.split("/")[2];
  useEffect(() => {
    getClothesByType(clothingType + options);
  }, [clothingType, options]);

  const checkIfChecked = (items: string) => {
    if (filterByText === "COLOR") {
      setIsColorChecked((prevChecked) => {
        const updatedChecked = {
          ...prevChecked,
          //keyof = value can only be the keys of isColorChecked which are green || black || blue (union)
          //keyof typeof = is the same like keyof but used on objects

          [items as keyof typeof isColorChecked]:
            !prevChecked[items as keyof typeof isColorChecked],
        };
        //Object.keys(object) returns an array of the object's keys
        const checkedOptions = Object.keys(updatedChecked)
          .filter((key) => updatedChecked[key as keyof typeof isColorChecked])
          .map((key) => `&color=${key}`)
          .join("");

        setOptions(checkedOptions);
        return updatedChecked;
      });
    }

    if (filterByText === "SIZE") {
      setIsSizeChecked((prevChecked) => {
        const updatedChecked = {
          ...prevChecked,
          [items as keyof typeof isSizeChecked]:
            !prevChecked[items as keyof typeof isSizeChecked],
        };

        const checkedOptions = Object.keys(updatedChecked)
          .filter((key) => updatedChecked[key as keyof typeof isSizeChecked])
          .map((key) => `&size=${key}`)
          .join("");

        setOptions(checkedOptions);
        return updatedChecked;
      });
    }
  };

  const isCheckBoxChecked = (items: string) =>
    items === "green"
      ? isColorChecked.green
      : items === "blue"
      ? isColorChecked.blue
      : items === "black"
      ? isColorChecked.black
      : items === "L"
      ? isSizeChecked.L
      : items === "M"
      ? isSizeChecked.M
      : items === "S"
      ? isSizeChecked.S
      : false;

  return (
    <>
      <div className="FilterData">
        <div className={`filter-by-data ${classNameCondition && "slide-down"}`}>
          <div className="filter-text-container" onClick={onClickFunction}>
            <p id="filter-by-text">{filterByText}</p>
            <img
              src={arrowSvg}
              alt="chevron svg"
              id="arrow-svg"
              className={`${
                classNameCondition ? "show-color-data" : "hide-color-data "
              }`}
            />
          </div>

          {classNameCondition && (
            <FilterDataOptions
              checkIfChecked={checkIfChecked}
              hasColor={hasColor}
              isCheckBoxChecked={isCheckBoxChecked}
              panelOptions={panelOptions}
            />
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default FilterData;

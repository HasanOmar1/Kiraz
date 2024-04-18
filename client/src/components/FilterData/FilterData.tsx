import "./FilterData.css";
import arrowSvg from "../../assets/svgs/arrow.svg";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import { useEffect, useState } from "react";
import { useClothesContext } from "../../context/ClothesContext";
import { useLocation } from "react-router-dom";

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
  // console.log(path);
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

  const path = pathname.split("/")[2];
  useEffect(() => {
    getClothesByType(path + options);
  }, [path, options]);

  const checkIfChecked = (items: string) => {
    if (filterByText === "COLOR") {
      setIsColorChecked((prevChecked) => {
        const updatedChecked = {
          ...prevChecked,
          [items as keyof typeof isColorChecked]:
            !prevChecked[items as keyof typeof isColorChecked],
        };

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
            <div className={"panel"}>
              {panelOptions.map((items) => {
                return (
                  <label
                    className="checkbox-container"
                    htmlFor={items}
                    key={items}
                  >
                    <input
                      type="checkbox"
                      id={items}
                      checked={
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
                          : false
                      }
                      onChange={() => checkIfChecked(items)}
                    />
                    {hasColor && (
                      <label
                        className={`circle ${items}`}
                        htmlFor={items}
                      ></label>
                    )}
                    <label htmlFor={items} id="options-label">
                      {upperCaseLetter(items)}
                    </label>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default FilterData;

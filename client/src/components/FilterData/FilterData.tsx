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
  const [isChecked, setIsChecked] = useState({
    green: false,
    black: false,
    blue: false,
  });
  const [test, setTest] = useState({
    green: false,
    black: false,
    blue: false,
  });
  const { getClothesByType } = useClothesContext();

  const path = pathname.split("/")[2];
  useEffect(() => {
    getClothesByType(path + options);
  }, [path, options]);

  const checkIfChecked = (items: string) => {
    if (filterByText === "COLOR") {
      if (items === "green") {
        setIsChecked((prev) => ({
          ...prev,
          green: true,
        }));
        setOptions("&color=green");
      }
      if (items === "black") {
        setIsChecked((prev) => ({
          ...prev,
          black: true,
        }));
        setOptions("&color=black");
      }
      if (items === "blue") {
        setIsChecked((prev) => ({
          ...prev,
          blue: true,
        }));
        setOptions("&color=blue");
      }
      // if (items === "black" && isChecked.green === true) {
      //   setIsChecked({
      //     green: true,
      //     black: true,
      //     blue: false,
      //   });
      //   setOptions("&color=black&color=green");
      // }
    }
  };

  // console.log(isChecked);
  // useEffect(() => {
  //   setTest((prev) => {
  //     return {
  //       ...prev,
  //       black: true,
  //     };
  //   });
  // }, []);

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
                          ? isChecked.green
                          : items === "blue"
                          ? isChecked.blue
                          : items === "black"
                          ? isChecked.black
                          : false
                        // (items === "blue" && isChecked.blue) ||
                        // (items === "black" && isChecked.black)
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

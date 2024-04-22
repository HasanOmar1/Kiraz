import "./FilterData.css";
import arrowSvg from "../../assets/svgs/arrow.svg";
import FilterDataOptionsTest from "../FilterDataOptions/FilterDataOptions";

type Colors = {
  green: boolean;
  black: boolean;
  blue: boolean;
};

type Sizes = {
  L: boolean;
  M: boolean;
  S: boolean;
};

type FilterDataProps = {
  onClickFunction: () => void;
  classNameCondition: boolean;
  filterByText: string;
  panelOptions: string[];
  hasColor: boolean;
  isColorChecked: Colors;
  setIsColorChecked: React.Dispatch<React.SetStateAction<Colors>>;
  isSizeChecked: Sizes;
  setIsSizeChecked: React.Dispatch<React.SetStateAction<Sizes>>;
};

const FilterDataTest = ({
  onClickFunction,
  classNameCondition,
  filterByText,
  panelOptions,
  hasColor,
  isColorChecked,
  setIsColorChecked,
  isSizeChecked,
  setIsSizeChecked,
}: FilterDataProps) => {
  //
  const checkIfChecked = (items: string) => {
    if (filterByText === "COLOR") {
      setIsColorChecked((prevChecked) => {
        const updatedChecked = {
          ...prevChecked,
          //keyof = value can only be the keys of isColorChecked which are green | black | blue (union)
          //keyof typeof = is the same like keyof but used on objects

          [items as keyof typeof isColorChecked]:
            !prevChecked[items as keyof typeof isColorChecked],
        };
        //Object.keys(object) returns an array of the object's keys

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

        return updatedChecked;
      });
    }
  };
  //

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
            <FilterDataOptionsTest
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

export default FilterDataTest;

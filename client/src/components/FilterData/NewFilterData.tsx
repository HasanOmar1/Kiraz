import "./FilterData.css";
import { arrowSvg } from "../../utils/Assets";
import NewFilterDataOptions from "../FilterDataOptions/NewFilterDataOptions";

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

type NewFilterDataProps = {
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

const NewFilterData = ({
  onClickFunction,
  classNameCondition,
  filterByText,
  panelOptions,
  hasColor,
  isColorChecked,
  setIsColorChecked,
  isSizeChecked,
  setIsSizeChecked,
}: NewFilterDataProps) => {
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
            <NewFilterDataOptions
              isColorChecked={isColorChecked}
              setIsColorChecked={setIsColorChecked}
              panelOptions={panelOptions}
              hasColor={hasColor}
              isSizeChecked={isSizeChecked}
              setIsSizeChecked={setIsSizeChecked}
            />
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default NewFilterData;

import "./FilterData.css";
import arrowSvg from "../../assets/svgs/arrow.svg";

type FilterDataProps = {
  onClickFunction: () => void;
  classNameCondition: boolean;
  FilterByText: string;
  panelOptions: string[];
  hasColor: boolean;
};

const FilterData = ({
  onClickFunction,
  classNameCondition,
  FilterByText,
  panelOptions,
  hasColor,
}: FilterDataProps) => {
  return (
    <>
      <div className="FilterData">
        <div className={`filter-by-data ${classNameCondition && "slide-down"}`}>
          <div className="filter-text-container" onClick={onClickFunction}>
            <p id="FilterByText" className="padding-left">
              {FilterByText}
            </p>
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
              {panelOptions.map((items) => (
                <label
                  className="checkbox-container"
                  htmlFor={items}
                  key={items}
                >
                  <input type="checkbox" id={items} />
                  {hasColor && (
                    <label
                      className={`circle ${items}`}
                      htmlFor={items}
                    ></label>
                  )}
                  <label htmlFor={items}>{items}</label>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default FilterData;

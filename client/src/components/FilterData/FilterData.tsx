import "./FilterData.css";
import arrowSvg from "../../assets/svgs/arrow.svg";

type FilterDataProps = {
  onClickFunction: () => void;
  classNameCondition: boolean;
  FilterByText: string;
  panelOptions: string[];
};

const FilterData = ({
  onClickFunction,
  classNameCondition,
  FilterByText,
  panelOptions,
}: FilterDataProps) => {
  return (
    <>
      <div className="FilterData">
        <div className="filter-by-data" onClick={onClickFunction}>
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
              <div className="checkbox-container">
                <input type="checkbox" id={items} />
                <label className="colors-panel-css" htmlFor={items}>
                  <label htmlFor={items}>{items}</label>
                  <label className={`circle ${items}`} htmlFor={items}></label>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <hr />
    </>
  );
};

export default FilterData;

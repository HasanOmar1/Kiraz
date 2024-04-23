import "./FilterDataOptions.css";
import upperCaseLetter from "../../utils/UpperCaseLetter";

type FilterDataOptionsProps = {
  panelOptions: string[];
  isCheckBoxChecked: (items: string) => boolean;
  checkIfChecked: (items: string) => void;
  hasColor: boolean;
};

const FilterDataOptions = ({
  panelOptions,
  isCheckBoxChecked,
  checkIfChecked,
  hasColor,
}: FilterDataOptionsProps) => {
  return (
    <div className={"FilterDataOptions panel"}>
      {panelOptions.map((items) => {
        return (
          <label className="checkbox-container" htmlFor={items} key={items}>
            <input
              type="checkbox"
              id={items}
              name={items}
              checked={isCheckBoxChecked(items)}
              onChange={() => checkIfChecked(items)}
            />
            {hasColor && (
              <label className={`circle ${items}`} htmlFor={items}></label>
            )}
            <label htmlFor={items} id="options-label">
              {upperCaseLetter(items)}
            </label>
          </label>
        );
      })}
    </div>
  );
};

export default FilterDataOptions;

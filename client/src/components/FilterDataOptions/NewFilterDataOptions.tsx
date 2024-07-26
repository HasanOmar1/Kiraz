import "./FilterDataOptions.css";
import upperCaseLetter from "../../utils/UpperCaseLetter";

type NewFilterDataOptionsProps = {
  panelOptions: string[];

  hasColor?: boolean;
  isColorChecked: {
    green: boolean;
    black: boolean;
    blue: boolean;
  };
  setIsColorChecked: React.Dispatch<
    React.SetStateAction<{
      green: boolean;
      black: boolean;
      blue: boolean;
    }>
  >;
  isSizeChecked: {
    L: boolean;
    M: boolean;
    S: boolean;
  };
  setIsSizeChecked: React.Dispatch<
    React.SetStateAction<{
      L: boolean;
      M: boolean;
      S: boolean;
    }>
  >;
};

const NewFilterDataOptions = ({
  hasColor,
  isColorChecked,
  setIsColorChecked,
  panelOptions,
  isSizeChecked,
  setIsSizeChecked,
}: NewFilterDataOptionsProps) => {
  const COLORS = ["green", "black", "blue"] as const;
  type Color = (typeof COLORS)[number];

  const SIZES = ["L", "M", "S"] as const;
  type Size = (typeof SIZES)[number];

  type FilterOption = Color | Size;

  const checkFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id as FilterOption;
    if (isColorChecked) {
      if (Object.keys(isColorChecked).includes(id)) {
        setIsColorChecked((prevState) => ({
          ...prevState,
          [id]: !prevState[id as Color],
        }));
      }
    }

    if (isSizeChecked) {
      if (Object.keys(isSizeChecked).includes(id)) {
        setIsSizeChecked((prevState) => ({
          ...prevState,
          [id]: !prevState[id as Size],
        }));
      }
    }
  };

  return (
    <div className={"FilterDataOptions panel"}>
      {panelOptions.map((items) => {
        return (
          <label className="checkbox-container" htmlFor={items} key={items}>
            <input
              type="checkbox"
              id={items}
              name={items}
              checked={isColorChecked[items]}
              onChange={checkFilter}
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

export default NewFilterDataOptions;

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

  const isColorOption = (item: string): item is Color => {
    return COLORS.includes(item as Color);
  };

  const isSizeOption = (item: string): item is Size => {
    return SIZES.includes(item as Size);
  };

  return (
    <div className={"FilterDataOptions panel"}>
      {panelOptions.map((item) => {
        const isChecked = isColorOption(item)
          ? isColorChecked[item]
          : isSizeOption(item)
          ? isSizeChecked[item]
          : false;

        return (
          <label className="checkbox-container" htmlFor={item} key={item}>
            <input
              type="checkbox"
              id={item}
              name={item}
              checked={isChecked}
              onChange={checkFilter}
            />
            {hasColor && isColorOption(item) && (
              <label className={`circle ${item}`} htmlFor={item}></label>
            )}
            <label htmlFor={item} id="options-label">
              {upperCaseLetter(item)}
            </label>
          </label>
        );
      })}
    </div>
  );
};

export default NewFilterDataOptions;

import { Clothes } from "../../types/ClothesTypes";
import "./ColorsContainer.css";

type ColorsContainerProps = {
  clothesById: Clothes;
  currentColor: string | undefined;
  currentActiveColor: (color: string) => void;
  typeInfo: string;
};

const ColorsContainer = ({
  clothesById,
  currentColor,
  currentActiveColor,
  typeInfo,
}: ColorsContainerProps) => {
  return (
    <>
      <div className="ColorsContainer colors-container">
        {clothesById.greenImg && (
          <div
            className={`green ${currentColor === "green" && "activeColor"}`}
            onClick={() => currentActiveColor("green")}
          ></div>
        )}
        {clothesById.blackImg && (
          <div
            className={`black ${currentColor === "black" && "activeColor"}`}
            onClick={() => currentActiveColor("black")}
          ></div>
        )}
        {clothesById.blueImg && (
          <div
            className={`blue ${currentColor === "blue" && "activeColor"}`}
            onClick={() => currentActiveColor("blue")}
          ></div>
        )}
      </div>
      <p id="type-info">{typeInfo}</p>
    </>
  );
};

export default ColorsContainer;

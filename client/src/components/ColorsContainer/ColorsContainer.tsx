import { Clothes } from "../../types/ClothesTypes";
import "./ColorsContainer.css";

type ColorsContainerProps = {
  clothesById: Clothes;
  currentColor: string | undefined;
  currentActiveColor: (color: string) => void;
};

const ColorsContainer = ({
  clothesById,
  currentColor,
  currentActiveColor,
}: ColorsContainerProps) => {
  return (
    <>
      <div className="ColorsContainer colors-container">
        {clothesById.greenImg && (
          <div
            className={`green color ${
              currentColor === "green" && "activeColor"
            }`}
            onClick={() => currentActiveColor("green")}
          ></div>
        )}
        {clothesById.blackImg && (
          <div
            className={`black color ${
              currentColor === "black" && "activeColor"
            }`}
            onClick={() => currentActiveColor("black")}
          ></div>
        )}
        {clothesById.blueImg && (
          <div
            className={`blue color ${currentColor === "blue" && "activeColor"}`}
            onClick={() => currentActiveColor("blue")}
          ></div>
        )}
      </div>
    </>
  );
};

export default ColorsContainer;

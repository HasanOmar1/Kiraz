import upperCaseLetter from "../../utils/UpperCaseLetter";
import { Clothes } from "../../types/ClothesTypes";
import ColorsContainer from "../ColorsContainer/ColorsContainer";
import "./ProductData.css";

type ProductDataProps = {
  clothesById: Clothes;
  currentColor: string | undefined;
  currentActiveColor: (color: string) => void;
  currentActiveSize: (size: string) => void;
  currentSize: string | undefined;
};

const ProductData = ({
  clothesById,
  currentColor,
  currentActiveColor,
  currentActiveSize,
  currentSize,
}: ProductDataProps) => {
  const typeInfo =
    clothesById?.type === "pants"
      ? "Fit: True to size—designed with a long, slim leg and ribbed ankle cuffs"
      : clothesById?.type === "shirts"
      ? "Fit: True to size—designed for a relaxed fit"
      : clothesById?.type === "hoodies"
      ? "Fit: Unisex style. Designed for a boxy, oversized look—size down if you prefer a closer fit."
      : clothesById?.type === "shorts"
      ? `Fit: True to size—designed with a shorter inseam than our classic 7" styles`
      : "";

  return (
    <div className="ProductData">
      <h1>{clothesById.name}</h1>

      <h2>
        Color :{" "}
        <span>{currentColor ? upperCaseLetter(currentColor) : "Unknown"}</span>
      </h2>
      <ColorsContainer
        clothesById={clothesById}
        currentActiveColor={currentActiveColor}
        currentColor={currentColor}
      />
      <hr />
      <h2>
        Size : <span>{currentSize}</span>
      </h2>
      <div className="size-container">
        <div
          onClick={() => currentActiveSize("Small")}
          className={currentSize === "Small" ? "activeSize" : ""}
        >
          Small
        </div>
        <div
          onClick={() => currentActiveSize("Medium")}
          className={currentSize === "Medium" ? "activeSize" : ""}
        >
          Medium
        </div>
        <div
          onClick={() => currentActiveSize("Large")}
          className={currentSize === "Large" ? "activeSize" : ""}
        >
          Large
        </div>
      </div>
      <hr />
      <h2>
        Price : $<span>{clothesById.price}</span>
      </h2>
      <p id="type-info">{typeInfo}</p>
    </div>
  );
};

export default ProductData;

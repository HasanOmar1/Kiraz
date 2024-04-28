import upperCaseLetter from "../../utils/UpperCaseLetter";
import { Clothes } from "../../types/ClothesTypes";
import ColorsContainer from "../ColorsContainer/ColorsContainer";

type ProductDataProps = {
  clothesById: Clothes;
  currentColor: string | undefined;
  currentActiveColor: (color: string) => void;
};

const ProductData = ({
  clothesById,
  currentColor,
  currentActiveColor,
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
    <>
      <h1>{clothesById.name}</h1>
      <h2>
        Size : <span>{clothesById.size}</span>
      </h2>
      <h2>
        Price : <span>{clothesById.price}$</span>
      </h2>
      <hr />
      <h2>
        Color :{" "}
        <span>
          {upperCaseLetter(currentColor ? currentColor : clothesById.color)}
        </span>
      </h2>
      <ColorsContainer
        clothesById={clothesById}
        currentActiveColor={currentActiveColor}
        currentColor={currentColor}
        typeInfo={typeInfo}
      />
    </>
  );
};

export default ProductData;

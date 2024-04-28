import upperCaseLetter from "../../utils/UpperCaseLetter";
import { Clothes } from "../../types/ClothesTypes";

type ProductDataProps = {
  clothesById: Clothes;
  currentColor: string | undefined;
};

const ProductData = ({ clothesById, currentColor }: ProductDataProps) => {
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
    </>
  );
};

export default ProductData;

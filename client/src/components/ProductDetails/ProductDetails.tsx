import ColorsContainer from "../ColorsContainer/ColorsContainer";
import loadingGif from "../../assets/loading-animation.gif";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { getClothesById, clothesById } = useClothesContext();
  const [currentColor, setCurrentColor] = useState(clothesById?.color);
  const { id } = useParams();

  useEffect(() => {
    getClothesById(id);
  }, [id]);
  console.log(clothesById);

  useEffect(() => {
    setCurrentColor(clothesById?.color);
  }, [clothesById?.color]);

  const currentActiveColor = (color: string) => {
    setCurrentColor(color);
  };

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

  const currentImg =
    currentColor === "blue"
      ? clothesById?.blueImg
      : currentColor === "green"
      ? clothesById?.greenImg
      : currentColor === "black"
      ? clothesById?.blackImg
      : "";

  return (
    <div className="ProductDetails">
      {clothesById ? (
        <div className="data-container">
          <img src={currentImg} alt="product img" />
          <div className="data">
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
                {upperCaseLetter(
                  currentColor ? currentColor : clothesById.color
                )}
              </span>
            </h2>

            <ColorsContainer
              clothesById={clothesById}
              currentActiveColor={currentActiveColor}
              currentColor={currentColor}
              typeInfo={typeInfo}
            />

            <div className="buy-btn-container">
              <button id="buy-btn">Add To Bag</button>
            </div>
          </div>
        </div>
      ) : (
        <div id="loading">
          <img src={loadingGif} alt="Loading animation" className="loading" />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

import ColorsContainer from "../ColorsContainer/ColorsContainer";
import loadingGif from "../../assets/loading-animation.gif";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import ProductData from "../ProductData/ProductData";
import { useBagContext } from "../../context/BagContext";
import GenericModal from "../GenericModal/GenericModal";
import useModal from "../../hooks/useModal";
import { useLoginContext } from "../../context/LoginContext";

const ProductDetails = () => {
  const { getClothesById, clothesById } = useClothesContext();
  const [currentColor, setCurrentColor] = useState(clothesById?.color);
  const { currentUser } = useLoginContext();
  const { addToBag, errorMsg: addToBagErrorMsg, setErrorMsg } = useBagContext();
  const { id } = useParams();
  const { closeModal, isModalOpen, openModal } = useModal();

  useEffect(() => {
    getClothesById(id);
  }, [id]);
  console.log(clothesById);

  useEffect(() => {
    setCurrentColor(clothesById?.color);
  }, [clothesById?.color]);

  // useEffect(() => {
  //   if (isModalOpen === false) {
  //     setErrorMsg("");
  //   }
  // }, [isModalOpen]);

  const currentActiveColor = (color: string) => {
    setCurrentColor(color);
  };

  const addToBagFunction = (id: string) => {
    openModal();
    addToBag({
      clothes: id,
    });
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
            <ProductData
              clothesById={clothesById}
              currentColor={currentColor}
            />

            <ColorsContainer
              clothesById={clothesById}
              currentActiveColor={currentActiveColor}
              currentColor={currentColor}
              typeInfo={typeInfo}
            />

            <div className="buy-btn-container">
              <button
                id="buy-btn"
                onClick={() => addToBagFunction(clothesById._id)}
              >
                Add To Bag
              </button>
            </div>
            <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
              {currentUser ? (
                <div id="added-msg">
                  <span>{clothesById.name}</span> has been added to your bag
                </div>
              ) : (
                <div id="error-msg">{addToBagErrorMsg}</div>
              )}
            </GenericModal>
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

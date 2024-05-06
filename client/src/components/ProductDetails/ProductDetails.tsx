import { loadingGif } from "../../utils/Assets";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./ProductDetails.css";
import ProductData from "../ProductData/ProductData";
import GenericModal from "../GenericModal/GenericModal";
import useModal from "../../hooks/useModal";
import {
  useBagContext,
  useLoginContext,
  useClothesContext,
} from "../../utils/Context";

const ProductDetails = () => {
  const { getClothesById, clothesById } = useClothesContext();
  const { currentUser } = useLoginContext();
  const { addToBag, errorMsg: addToBagErrorMsg } = useBagContext();
  const { closeModal, isModalOpen, openModal } = useModal();
  const [currentColor, setCurrentColor] = useState(clothesById?.color);

  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const color = searchParams.get("color");

  useEffect(() => {
    getClothesById(id);
  }, [id]);

  useEffect(() => {
    if (color) {
      setCurrentColor(color);
    } else {
      setCurrentColor(clothesById?.color);

      setTimeout(() => {
        setSearchParams({ color: clothesById?.color ?? "" }, { replace: true });
      }, 100);
    }
  }, [clothesById?.color, id]);

  const currentActiveColor = (color: string) => {
    setSearchParams({ color }, { replace: true });
    setCurrentColor(color);
  };

  const goToBag = () => {
    navigate("/bag");
    closeModal();
  };

  const currentImg =
    currentColor === "blue"
      ? clothesById?.blueImg
      : currentColor === "green"
      ? clothesById?.greenImg
      : currentColor === "black"
      ? clothesById?.blackImg
      : "";

  const addToBagFunction = () => {
    openModal();

    addToBag({
      id: clothesById?._id,
      color: currentColor,
      name: clothesById?.name,
      price: clothesById?.price,
      size: clothesById?.size,
      img: currentImg,
      type: clothesById?.type,
    });
  };

  return (
    <div className="ProductDetails">
      {clothesById ? (
        <div className="data-container">
          <img src={currentImg} alt="product img" />
          <div className="data">
            <ProductData
              clothesById={clothesById}
              currentColor={currentColor}
              currentActiveColor={currentActiveColor}
            />

            <div className="buy-btn-container">
              <button id="buy-btn" onClick={addToBagFunction}>
                Add To Bag
              </button>
            </div>

            <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
              {currentUser ? (
                <>
                  <div id="added-msg">
                    <span>{clothesById.name}</span>
                    <p>has been added to your bag</p>
                  </div>

                  <div className="buy-btn-container">
                    <button id="buy-btn" onClick={goToBag}>
                      Go To Bag
                    </button>
                  </div>
                </>
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

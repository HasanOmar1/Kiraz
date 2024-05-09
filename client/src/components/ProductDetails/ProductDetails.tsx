import { loadingGif } from "../../utils/Assets";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./ProductDetails.css";
import ProductData from "../ProductData/ProductData";
import useModal from "../../hooks/useModal";
import { useBagContext, useClothesContext } from "../../utils/Context";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";
import sizes from "../../utils/SizeLetterToWord";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import NavigateContainer from "../NavigateContainer/NavigateContainer";

const ProductDetails = () => {
  const { getClothesById, clothesById } = useClothesContext();
  const { addToBag, errorMsg: addToBagErrorMsg } = useBagContext();
  const { closeModal, isModalOpen, openModal } = useModal();
  const [currentColor, setCurrentColor] = useState(clothesById?.color);
  const [currentSize, setCurrentSize] = useState(clothesById?.size);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const color = searchParams.get("color");
  const size = searchParams.get("size");

  useEffect(() => {
    getClothesById(id);
  }, [id]);

  useEffect(() => {
    if (color && size) {
      setCurrentColor(color);
      setCurrentSize(sizes(size));
    } else {
      setCurrentColor(clothesById?.color);
      setCurrentSize(sizes(clothesById?.size));

      setTimeout(() => {
        setSearchParams(
          {
            color: clothesById?.color ?? "",
            size: sizes(clothesById?.size) ?? "",
          },
          { replace: true }
        );
      }, 100);
    }
  }, [clothesById?.color, id, clothesById?.size]);

  const currentActiveColor = (color: string) => {
    setSearchParams(
      { color, size: sizes(currentSize) ?? "" },
      { replace: true }
    );
    setCurrentColor(color);
  };

  const currentActiveSize = (size: string) => {
    setSearchParams({ size, color: currentColor ?? "" }, { replace: true });
    setCurrentSize(size);
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
      size: currentSize,
      img: currentImg,
      type: clothesById?.type,
    });
  };

  return (
    <div className="ProductDetails">
      {clothesById ? (
        <div className="data-container">
          <NavigateContainer clothesById={clothesById} />

          <img src={currentImg} alt="product img" />
          <div className="data">
            <ProductData
              clothesById={clothesById}
              currentColor={currentColor}
              currentActiveColor={currentActiveColor}
              currentActiveSize={currentActiveSize}
              currentSize={currentSize}
            />

            <div className="buy-btn-container">
              <button id="buy-btn" onClick={addToBagFunction}>
                Add To Bag
              </button>
            </div>
            <ProductDetailsModal
              addToBagErrorMsg={addToBagErrorMsg}
              closeModal={closeModal}
              clothesById={clothesById}
              isModalOpen={isModalOpen}
            />
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

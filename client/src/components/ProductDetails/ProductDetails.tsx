import { loadingGif } from "../../utils/Assets";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./ProductDetails.css";
import ProductData from "../ProductData/ProductData";
import useModal from "../../hooks/useModal";
import { useBagContext } from "../../utils/Context";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";
import sizes from "../../utils/SizeLetterToWord";
import NavigateContainer from "../NavigateContainer/NavigateContainer";
import { useGetClothesByIdQuery } from "../../api/clothesApi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: clothesById, isLoading } = useGetClothesByIdQuery(id);
  const { addToBag, errorMsg: addToBagErrorMsg } = useBagContext();
  const { closeModal, isModalOpen, openModal } = useModal();
  const [currentColor, setCurrentColor] = useState(clothesById?.color);
  const [currentSize, setCurrentSize] = useState(clothesById?.size);
  const [searchParams, setSearchParams] = useSearchParams();

  const color = searchParams.get("color");
  const size = searchParams.get("size");

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
  }, [clothesById?.color, id, clothesById?.size, color, size, setSearchParams]);

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
      {isLoading ? (
        <div id="loading">
          <img src={loadingGif} alt="Loading animation" className="loading" />
        </div>
      ) : (
        <div className="data-container">
          <div className="img-container">
            <NavigateContainer clothesById={clothesById} />
            <img src={currentImg} alt="product img" loading="lazy" />
          </div>

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
                <span>Add To Bag </span>
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
      )}
    </div>
  );
};

export default ProductDetails;

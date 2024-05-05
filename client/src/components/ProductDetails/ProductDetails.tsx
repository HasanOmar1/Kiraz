import loadingGif from "../../assets/loading-animation.gif";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./ProductDetails.css";
import ProductData from "../ProductData/ProductData";
import { useBagContext } from "../../context/BagContext";
import GenericModal from "../GenericModal/GenericModal";
import useModal from "../../hooks/useModal";
import { useLoginContext } from "../../context/LoginContext";

const ProductDetails = () => {
  const { getClothesById, clothesById } = useClothesContext();
  const { currentUser } = useLoginContext();
  const { addToBag, errorMsg: addToBagErrorMsg } = useBagContext();
  const { closeModal, isModalOpen, openModal } = useModal();

  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const color = searchParams.get("color");

  useEffect(() => {
    getClothesById(id);
  }, [id]);

  useEffect(() => {
    if (!color) {
      setSearchParams({ color: clothesById?.color ?? "" }, { replace: true });
    } else {
      setSearchParams({ color }, { replace: true });
    }
  }, [clothesById?.color, id]);

  console.log(`correct: `, clothesById?.color);
  console.log(color);

  const currentActiveColor = (color: string) => {
    setSearchParams({ color }, { replace: true });
  };

  const goToBag = () => {
    navigate("/bag");
    closeModal();
  };

  const currentImg =
    color === "blue"
      ? clothesById?.blueImg
      : color === "green"
      ? clothesById?.greenImg
      : color === "black"
      ? clothesById?.blackImg
      : "";

  const addToBagFunction = () => {
    openModal();

    addToBag({
      id: clothesById?._id,
      color: color ?? "unKnown",
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
              currentColor={color ?? "unknown"}
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

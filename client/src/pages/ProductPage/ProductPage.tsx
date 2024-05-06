import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import { backSvg } from "../../utils/Assets";
import { useClothesContext, useThemeContext } from "../../utils/Context";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductPage = () => {
  const { getThemeClassName } = useThemeContext();
  const navigate = useNavigate();
  const { setClothesById } = useClothesContext();

  const goBackOnePage = () => {
    navigate(-1);
    setClothesById(null);
  };

  onpopstate = () => {
    setClothesById(null);
  };

  return (
    <main className={`Page ProductPage ${getThemeClassName()}`}>
      <div className="back-container">
        <button id="back-btn" onClick={goBackOnePage}>
          <img src={backSvg} alt="back arrow svg" />
          Back
        </button>
      </div>
      <ProductDetails />
    </main>
  );
};

export default ProductPage;

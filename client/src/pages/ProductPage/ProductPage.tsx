import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import { backSvg } from "../../utils/Assets";
import { useThemeContext } from "../../utils/Context";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductPage = () => {
  const { getThemeClassName } = useThemeContext();
  const navigate = useNavigate();

  const goBackOnePage = () => {
    navigate(-1);
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

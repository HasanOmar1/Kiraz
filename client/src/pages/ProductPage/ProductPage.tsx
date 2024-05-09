import "./ProductPage.css";
import { useThemeContext } from "../../utils/Context";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductPage = () => {
  const { getThemeClassName } = useThemeContext();

  return (
    <main className={`Page ProductPage ${getThemeClassName()}`}>
      <ProductDetails />
    </main>
  );
};

export default ProductPage;

import { useThemeContext } from "../../context/ThemeContext";
import "./Home.css";
import backgroundImg from "../../assets/background.jpg";
import shirtsImg from "../../assets/shirts.jpg";
import hoodieImg from "../../assets/hoodie.jpg";
import pantsImg from "../../assets/pants.jpg";
import shortImg from "../../assets/short.jpg";
import HomeImg from "../../components/HomeImg/HomeImg";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect } from "react";
import ProductsCards from "../../components/ProductsCards/ProductsCards";

const Home = () => {
  const { getThemeClassName } = useThemeContext();
  const { latestProducts, getLatestAddedProduct } = useClothesContext();

  useEffect(() => {
    getLatestAddedProduct();
  }, []);

  return (
    <main className={`Home Page ${getThemeClassName()}`}>
      <div className="background-container">
        <img src={backgroundImg} alt="background img" />
      </div>
      <section className="imgs-section">
        <div className="imgs-container">
          <HomeImg img={shirtsImg} text="shirts" />
          <HomeImg img={hoodieImg} text="hoodies" />
          <HomeImg img={pantsImg} text="pants" />
          <HomeImg img={shortImg} text="shorts" />
        </div>
      </section>
      <section className="latest-products">
        <h3>Latest Added Products</h3>
        <ProductsCards array={latestProducts} />
      </section>
    </main>
  );
};

export default Home;

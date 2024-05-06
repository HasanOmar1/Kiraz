import { useThemeContext } from "../../context/ThemeContext";
import "./Home.css";
import backgroundImg from "../../assets/background.jpg";
import { hoodieImg, pantsImg, shirtsImg, shortImg } from "../../utils/Imgs";
import HomeImg from "../../components/HomeImg/HomeImg";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect } from "react";
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import Loading from "../../assets/loading-animation.gif";

const Home = () => {
  const { getThemeClassName } = useThemeContext();
  const { latestProducts, getLatestAddedProduct } = useClothesContext();

  useEffect(() => {
    getLatestAddedProduct();
  }, []);

  return (
    <main className={`Home Page ${getThemeClassName()}`}>
      {latestProducts ? (
        <>
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
        </>
      ) : (
        <>
          <img src={Loading} alt="Loading animation" />
          <div className="skeleton-container">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;

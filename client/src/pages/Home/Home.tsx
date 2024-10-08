import "./Home.css";
import {
  hoodieImg,
  pantsImg,
  shirtsImg,
  shortImg,
  backgroundImg,
  loadingGif,
  fastHoodieImg,
  fastPantsImg,
  fastShirtsImg,
  fastShortImg,
  fastBackgroundImg,
} from "../../utils/Assets";
import HomeImg from "../../components/HomeImg/HomeImg";
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import { useThemeContext } from "../../utils/Context";
import { useGetLatestAddedProductQuery } from "../../api/clothesApi";

const Home = () => {
  const { getThemeClassName } = useThemeContext();
  // const { latestProducts } = useClothesContext();
  const { data: latestProducts } = useGetLatestAddedProductQuery();

  return (
    <main className={`Home Page ${getThemeClassName()}`}>
      {latestProducts ? (
        <>
          <div className="background-container">
            <picture>
              <source
                srcSet={fastBackgroundImg}
                type="image/webp"
                height={600}
                width={"100%"}
              />
              <img
                src={backgroundImg}
                alt="background img"
                height={600}
                width={"100%"}
                loading="lazy"
              />
            </picture>
          </div>
          <section className="imgs-section">
            <div className="imgs-container">
              <HomeImg img={shirtsImg} webPImg={fastShirtsImg} text="shirts" />
              <HomeImg img={hoodieImg} webPImg={fastHoodieImg} text="hoodies" />
              <HomeImg img={pantsImg} webPImg={fastPantsImg} text="pants" />
              <HomeImg img={shortImg} webPImg={fastShortImg} text="shorts" />
            </div>
          </section>
          <section className="latest-products">
            <h3>Latest Added Products</h3>
            <ProductsCards array={latestProducts} />
          </section>
        </>
      ) : (
        <>
          <img src={loadingGif} alt="Loading animation" />
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

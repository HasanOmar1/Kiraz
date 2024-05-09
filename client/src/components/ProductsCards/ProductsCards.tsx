import { Clothes } from "../../types/ClothesTypes";
import Cards from "../Cards/Cards";
import { loadingGif } from "../../utils/Assets";
import "./ProductsCards.css";

type ProductsCardsProps = {
  array: Clothes[] | undefined | null;
};

const ProductsCards = ({ array }: ProductsCardsProps) => {
  return (
    <div className="ProductsCards data">
      {array?.length ?? 0 > 0 ? (
        <>
          {array?.map((clothes: Clothes) => {
            return (
              <Cards
                id={clothes._id}
                key={clothes._id}
                name={clothes.name}
                cover={
                  clothes.color === "green"
                    ? clothes.greenImg
                    : clothes.color === "black"
                    ? clothes.blackImg
                    : clothes.color === "blue"
                    ? clothes.blueImg
                    : ""
                }
                greenImg={clothes.greenImg}
                blackImg={clothes.blackImg}
                blueImg={clothes.blueImg}
                price={clothes.price}
                size={clothes.size}
                color={clothes.color}
              />
            );
          })}
        </>
      ) : (
        <div id="loading">
          <img src={loadingGif} alt="loading animation" />
        </div>
      )}
    </div>
  );
};

export default ProductsCards;

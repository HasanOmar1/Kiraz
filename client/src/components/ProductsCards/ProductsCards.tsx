import { Clothes } from "../../types/ClothesTypes";
import { loadingGif } from "../../utils/Assets";
import Cards from "../Cards/Cards";
import "./ProductsCards.css";

type ProductsCardsProps = {
  array: Clothes[] | undefined | null;
  showActions?: boolean;
};

const ProductsCards = ({ array, showActions }: ProductsCardsProps) => {
  return (
    <div className="ProductsCards">
      <div className="data">
        {array?.length ?? 0 > 0 ? (
          <>
            {array?.map((clothes: Clothes) => {
              return (
                <Cards
                  showActions={showActions && true}
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
          <img id="no-data" src={loadingGif} />
        )}
      </div>
    </div>
  );
};

export default ProductsCards;

import { Link } from "react-router-dom";
import "./Cards.css";
import { Clothes } from "../../types/ClothesTypes";

type CardsProps = {
  cover: string | undefined;
  name: string;
  color: string;
  price: number;
  size: string;
  id: string;
  state: Clothes;
  greenImg: string | undefined;
  blackImg: string | undefined;
  blueImg: string | undefined;
};

const Cards = ({
  cover,
  name,
  color,
  price,
  size,
  id,
  state,
  greenImg,
  blackImg,
  blueImg,
}: CardsProps) => {
  color = color[0].toUpperCase() + color.slice(1);

  return (
    <div className="Cards">
      <Link to={`/product/${id}`} state={state}>
        <img src={cover} alt="img cover" loading="lazy" />
      </Link>
      <p>{name}</p>
      <p>{color}</p>
      <p>Size: {size}</p>
      <p>{price}$</p>
      <p id="more-colors">More colors</p>
      <div className="colors-container">
        {greenImg && <div className={`green`}></div>}
        {blackImg && <div className={`black `}></div>}
        {blueImg && <div className={`blue`}></div>}
      </div>
    </div>
  );
};

export default Cards;

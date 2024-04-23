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
};

const Cards = ({ cover, name, color, price, size, id, state }: CardsProps) => {
  color = color[0].toUpperCase() + color.slice(1);

  return (
    <div className="Cards">
      <Link to={`/product/${id}`} state={state}>
        <img src={cover} alt="img cover" loading="lazy" />
      </Link>
      <p>{name}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Cards;

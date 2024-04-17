import "./Cards.css";

type CardsProps = {
  cover: string;
  name: string;
  color: string;
  price: number;
  size: string;
};

const Cards = ({ cover, name, color, price, size }: CardsProps) => {
  color = color[0].toUpperCase() + color.slice(1);

  return (
    <div className="Cards">
      <img src={cover} alt="img cover" />
      <p>{name}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Cards;

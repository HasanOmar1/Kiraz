import { Link } from "react-router-dom";
import "./Cards.css";
import { useThemeContext } from "../../context/ThemeContext";

type CardsProps = {
  cover?: string;
  name?: string;
  color?: string;
  price?: number;
  size?: string;
  id?: string;
  greenImg?: string;
  blackImg?: string;
  blueImg?: string;
};

const Cards = ({
  cover,
  name,
  color,
  price,
  size,
  id,
  greenImg,
  blackImg,
  blueImg,
}: CardsProps) => {
  const { theme } = useThemeContext();

  const greenColor = color === "green" && "active";
  const blackColor = color === "black" && "active";
  const blueColor = color === "blue" && "active";

  return (
    <div className="Cards">
      <Link to={`/product/${id}`}>
        <img src={cover} alt="img cover" />
      </Link>
      <div className="colors-container">
        {greenImg && <div className={`green ${greenColor}`}></div>}
        {blackImg && <div className={`black ${blackColor}`}></div>}
        {blueImg && <div className={`blue ${blueColor}`}></div>}
      </div>
      <Link
        to={`/product/${id}`}
        className="link"
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
        <p id="clothing-name">{name}</p>
      </Link>
      <p>Size: {size}</p>
      <p id="price">{price}$</p>
    </div>
  );
};

export default Cards;

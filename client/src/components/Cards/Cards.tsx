import { Link } from "react-router-dom";
import "./Cards.css";
import { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";

type CardsProps = {
  cover: string | undefined;
  name: string;
  color: string;
  price: number;
  size: string;
  id: string;
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
  greenImg,
  blackImg,
  blueImg,
}: CardsProps) => {
  const [currentActiveColor, setCurrentActiveColor] = useState(color);
  const { theme } = useThemeContext();

  color = color[0].toUpperCase() + color.slice(1);

  const greenColor = currentActiveColor === "green" && "active";
  const blackColor = currentActiveColor === "black" && "active";
  const blueColor = currentActiveColor === "blue" && "active";

  return (
    <div className="Cards">
      <Link to={`/product/${id}`}>
        <img src={cover} alt="img cover" loading="lazy" />
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

import { Link } from "react-router-dom";
import "./Cards.css";
import { useThemeContext } from "../../utils/Context";
import sizes from "../../utils/SizeLetterToWord";

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

  const greenColor = color === "green" && "activeColor";
  const blackColor = color === "black" && "activeColor";
  const blueColor = color === "blue" && "activeColor";

  return (
    <div className="Cards">
      <Link to={`/product/${id}`}>
        <img src={cover} alt="img cover" width={280} height={"auto"} />
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
      <p id="size">{sizes(size)}</p>
      <p id="price">${price}</p>
    </div>
  );
};

export default Cards;

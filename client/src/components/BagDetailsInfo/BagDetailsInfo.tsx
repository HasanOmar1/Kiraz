import { Link } from "react-router-dom";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import { useThemeContext } from "../../context/ThemeContext";
import { BagItems } from "../../types/ClothesTypes";

type BagDetailsInfoProps = {
  items: BagItems;
  children: React.ReactNode;
};

const BagDetailsInfo = ({ items, children }: BagDetailsInfoProps) => {
  const { theme } = useThemeContext();
  return (
    <div key={items._id} className="list">
      <Link to={`/product/${items.id}`}>
        <img src={items.img} alt="img" loading="lazy" />
      </Link>
      <div className="list-data">
        <Link
          to={`/product/${items.id}`}
          className="link"
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
        >
          <p id="clothing-name">{items.name}</p>
        </Link>
        <div className="color-size">
          <p>
            Color:
            <span>{upperCaseLetter(items.color ?? "")}</span>
          </p>
          <p>
            Size:
            <span>{items.size}</span>
          </p>
        </div>
        <p>
          Type:
          <span>{upperCaseLetter(items.type ?? "")}</span>
        </p>
        <p>${items.price}</p>
      </div>
      {children}
    </div>
  );
};

export default BagDetailsInfo;

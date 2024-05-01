import { Link } from "react-router-dom";
import { BagItems, BagItemsUpdated } from "../../types/ClothesTypes";
import "./BagDetails.css";
import { useThemeContext } from "../../context/ThemeContext";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import { useBagContext } from "../../context/BagContext";

type BagDetailsProps = {
  showActions?: boolean;
  array: BagItems[] | BagItemsUpdated[];
};

const BagDetails = ({ showActions, array }: BagDetailsProps) => {
  const { theme } = useThemeContext();
  const { removeItemFromBag } = useBagContext();

  const sizes = (items: BagItemsUpdated) => {
    return items.size === "S"
      ? "Small"
      : items.size === "L"
      ? "Large"
      : items.size === "M"
      ? "Medium"
      : " ";
  };

  const removeItem = (id: string) => {
    removeItemFromBag(id);
  };

  return (
    <div className="BagDetails container">
      <div className="items">
        {showActions && (
          <div className="actions-container">
            <p id="clear-bag">Clear Bag</p>
            <p id="check-out">Check Out</p>
          </div>
        )}

        {array?.map((items: BagItemsUpdated) => {
          return (
            <div key={items._id} className="list">
              <Link to={`/product/${items.id}`}>
                <img src={items.img} alt="img" />
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
                    <span>{sizes(items)}</span>
                  </p>
                </div>
                <p>
                  Type:
                  <span>{upperCaseLetter(items.type ?? "")}</span>
                </p>
                <p>{items.price}$</p>
              </div>
              {showActions && (
                <button
                  className="remove-btn"
                  onClick={() => removeItem(items._id ?? "")}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BagDetails;

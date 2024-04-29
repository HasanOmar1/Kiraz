import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import { useThemeContext } from "../../context/ThemeContext";
import { BagItemsUpdated } from "../../types/ClothesTypes";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import "./Bag.css";
import { useBagContext } from "../../context/BagContext";
import emptyBag from "../../assets/empty-bag.png";

const Bag = () => {
  const { getThemeClassName, theme } = useThemeContext();
  const { removeItemFromBag } = useBagContext();
  const { currentUser } = useLoginContext();

  const removeItem = (id: string) => {
    removeItemFromBag(id);
  };

  const sizes = (items: BagItemsUpdated) => {
    return items.size === "S"
      ? "Small"
      : items.size === "L"
      ? "Large"
      : items.size === "M"
      ? "Medium"
      : " ";
  };
  return (
    <div className={`Bag Page ${getThemeClassName()}`}>
      <div className="big-container">
        {currentUser && currentUser.bag.length > 0 ? (
          <>
            <h3 id="my-items">My Items</h3>
            <div className="container">
              <div className="items">
                {currentUser?.bag?.map((items: BagItemsUpdated) => {
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
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(items._id ?? "")}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="no-items">
            <h3 id="empty">Your bag is empty</h3>
            <img src={emptyBag} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;

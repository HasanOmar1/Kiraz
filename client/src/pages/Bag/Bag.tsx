import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import { useThemeContext } from "../../context/ThemeContext";
import { BagItems } from "../../types/ClothesTypes";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import "./Bag.css";
import { useBagContext } from "../../context/BagContext";

const Bag = () => {
  const { getThemeClassName, theme } = useThemeContext();
  const { removeItemFromBag } = useBagContext();
  const { currentUser } = useLoginContext();

  const currentImg = (items: BagItems) => {
    return items.clothes.color === "green"
      ? items.clothes.greenImg
      : items.clothes.color === "black"
      ? items.clothes.blackImg
      : items.clothes.color === "blue"
      ? items.clothes.blueImg
      : "";
  };

  const removeItem = (id: string) => {
    removeItemFromBag(id);
  };
  return (
    <div className={`Bag Page ${getThemeClassName()}`}>
      <div className="big-container">
        <h3 id="my-items">My Items</h3>
        <div className="container">
          <div className="items">
            {currentUser && (
              <>
                {currentUser.bag.map((items) => {
                  return (
                    <div key={items._id} className="list">
                      <Link to={`/product/${items.clothes._id}`}>
                        <img src={currentImg(items)} alt="img" />
                      </Link>
                      <div className="list-data">
                        <Link
                          to={`/product/${items.clothes._id}`}
                          className="link"
                          style={{
                            color: theme === "dark" ? "white" : "black",
                          }}
                        >
                          <p id="clothing-name">{items.clothes.name}</p>
                        </Link>
                        <div className="color-size">
                          <p>
                            Color:
                            <span>{upperCaseLetter(items.clothes.color)}</span>
                          </p>
                          <p>
                            Size:
                            <span>{items.clothes.size}</span>
                          </p>
                        </div>
                        <p>
                          Type:
                          <span>{upperCaseLetter(items.clothes.type)}</span>
                        </p>
                        <p>{items.clothes.price}$</p>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(items._id)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;

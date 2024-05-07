import { Link } from "react-router-dom";
import { BagItems } from "../../types/ClothesTypes";
import "./BagDetails.css";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import { useThemeContext, useBagContext } from "../../utils/Context";
import useModal from "../../hooks/useModal";
import { useEffect, useState } from "react";
import BagDetailsModal from "../BagDetailsModal/BagDetailsModal";
import { CurrentLoggedUser } from "../../types/LoginContextTypes";

type BagDetailsProps = {
  showActions?: boolean;
  array: BagItems[];
  currentUser?: CurrentLoggedUser;
};

const BagDetails = ({ showActions, array, currentUser }: BagDetailsProps) => {
  const { theme } = useThemeContext();
  const { removeItemFromBag, checkOut, clearBag } = useBagContext();
  const { closeModal, isModalOpen, openModal } = useModal();
  const [debouncedCheckOut, setDebouncedCheckOut] = useState<Function | null>(
    null
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (debouncedCheckOut) {
        debouncedCheckOut();
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [debouncedCheckOut]);

  const sizes = (items: BagItems) => {
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

  const checkOutModal = () => {
    openModal();
  };

  const handleCheckOut = () => {
    setDebouncedCheckOut(() => checkOut);
    closeModal();
  };

  const itemsPrice = currentUser?.bag.reduce((a, b) => {
    return a + (b.price || 0);
  }, 0);

  return (
    <div className="BagDetails container">
      {showActions && (
        <div className="actions-container">
          <p onClick={clearBag}>Clear Bag</p>
          <p id="check-out" onClick={checkOutModal}>
            Check Out
          </p>
          <p>
            Price <span id="price-span">${itemsPrice}</span>
          </p>
        </div>
      )}
      <div className="items">
        {array?.map((items: BagItems) => {
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
                <p>${items.price}</p>
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
      <BagDetailsModal
        closeModal={closeModal}
        handleCheckOut={handleCheckOut}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default BagDetails;

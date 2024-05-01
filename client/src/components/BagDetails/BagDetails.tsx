import { Link } from "react-router-dom";
import { BagItems, BagItemsUpdated } from "../../types/ClothesTypes";
import "./BagDetails.css";
import { useThemeContext } from "../../context/ThemeContext";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import { useBagContext } from "../../context/BagContext";
import useModal from "../../hooks/useModal";
import { useEffect, useState } from "react";
import BagDetailsModal from "../BagDetailsModal/BagDetailsModal";

type BagDetailsProps = {
  showActions?: boolean;
  array: BagItems[] | BagItemsUpdated[];
};

const BagDetails = ({ showActions, array }: BagDetailsProps) => {
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

  const checkOutModal = () => {
    openModal();
  };

  const handleCheckOut = () => {
    setDebouncedCheckOut(() => checkOut);
    closeModal();
  };

  return (
    <div className="BagDetails container">
      <div className="items">
        {showActions && (
          <div className="actions-container">
            <p id="clear-bag" onClick={clearBag}>
              Clear Bag
            </p>
            <p id="check-out" onClick={checkOutModal}>
              Check Out
            </p>
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
      <BagDetailsModal
        closeModal={closeModal}
        handleCheckOut={handleCheckOut}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default BagDetails;

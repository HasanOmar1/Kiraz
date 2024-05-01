import { Link } from "react-router-dom";
import { BagItems, BagItemsUpdated } from "../../types/ClothesTypes";
import "./BagDetails.css";
import { useThemeContext } from "../../context/ThemeContext";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import { useBagContext } from "../../context/BagContext";
import GenericModal from "../GenericModal/GenericModal";
import useModal from "../../hooks/useModal";

type BagDetailsProps = {
  showActions?: boolean;
  array: BagItems[] | BagItemsUpdated[];
};

const BagDetails = ({ showActions, array }: BagDetailsProps) => {
  const { theme } = useThemeContext();
  const { removeItemFromBag, checkOut } = useBagContext();
  const { closeModal, isModalOpen, openModal } = useModal();

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

  return (
    <div className="BagDetails container">
      <div className="items">
        {showActions && (
          <div className="actions-container">
            <p id="clear-bag">Clear Bag</p>
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
      <div className="modal-container">
        <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
          <div className="modal">
            <h3>Are you sure you want to check-out ?</h3>
            <div className="modal-btns">
              <button onClick={closeModal}>No</button>
              <button onClick={checkOut}>Yes</button>
            </div>
          </div>
        </GenericModal>
      </div>
    </div>
  );
};

export default BagDetails;

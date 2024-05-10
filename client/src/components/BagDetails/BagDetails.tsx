import { BagItems } from "../../types/ClothesTypes";
import "./BagDetails.css";
import { useBagContext } from "../../utils/Context";
import useModal from "../../hooks/useModal";
import { useEffect, useState } from "react";
import BagDetailsModal from "../BagDetailsModal/BagDetailsModal";
import { CurrentLoggedUser } from "../../types/LoginContextTypes";
import BagDetailsInfo from "../BagDetailsInfo/BagDetailsInfo";

type BagDetailsProps = {
  showActions?: boolean;
  array: BagItems[];
  currentUser?: CurrentLoggedUser;
};

const BagDetails = ({ showActions, array, currentUser }: BagDetailsProps) => {
  const { removeItemFromBag, checkOut, clearBag } = useBagContext();
  const {
    closeModal: closeCheckOutModal,
    isModalOpen: isCheckOutModalOpen,
    openModal: openCheckOutModal,
  } = useModal();
  const {
    closeModal: closeClearBagModal,
    isModalOpen: isClearBagModalOpen,
    openModal: openClearBagModal,
  } = useModal();
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

  const removeItem = (id: string) => {
    removeItemFromBag(id);
  };

  const handleCheckOut = () => {
    setDebouncedCheckOut(() => checkOut);
    closeCheckOutModal();
  };

  const itemsPrice = currentUser?.bag.reduce((a, b) => {
    return a + (b.price || 0);
  }, 0);

  return (
    <div className="BagDetails container">
      {showActions && (
        <div className="actions-container">
          <p onClick={openClearBagModal}>Clear Bag</p>
          <p id="check-out" onClick={openCheckOutModal}>
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
            <>
              <BagDetailsInfo items={items}>
                {showActions && (
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(items._id ?? "")}
                  >
                    Remove
                  </button>
                )}
              </BagDetailsInfo>
            </>
          );
        })}
      </div>
      <BagDetailsModal
        closeModal={closeCheckOutModal}
        isModalOpen={isCheckOutModalOpen}
        yesFunction={handleCheckOut}
      >
        <h3>Price: ${itemsPrice} </h3>
        <br />
        <h4>Complete Transaction?</h4>
      </BagDetailsModal>

      <BagDetailsModal
        closeModal={closeClearBagModal}
        isModalOpen={isClearBagModalOpen}
        yesFunction={clearBag}
      >
        <h3>Are you sure you want to clear your bag?</h3>
      </BagDetailsModal>
    </div>
  );
};

export default BagDetails;

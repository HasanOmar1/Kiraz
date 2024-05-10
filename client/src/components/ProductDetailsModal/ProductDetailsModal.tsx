import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import GenericModal from "../GenericModal/GenericModal";
import { Clothes } from "../../types/ClothesTypes";

type Props = {
  closeModal: () => void;
  isModalOpen: boolean;
  addToBagErrorMsg: string;
  clothesById: Clothes | null;
};

const ProductDetailsModal = ({
  closeModal,
  isModalOpen,
  addToBagErrorMsg,
  clothesById,
}: Props) => {
  const { currentUser } = useLoginContext();

  const navigate = useNavigate();

  const goToBag = () => {
    navigate("/bag");
    closeModal();
  };

  return (
    <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
      {currentUser ? (
        <>
          <div id="added-msg">
            <span>{clothesById?.name}</span>
            <p>has been added to your bag</p>
          </div>

          <div className="buy-btn-container">
            <button id="buy-btn" onClick={goToBag}>
              <span> Go To Bag</span>
            </button>
          </div>
        </>
      ) : (
        <div id="error-msg">{addToBagErrorMsg}</div>
      )}
    </GenericModal>
  );
};

export default ProductDetailsModal;

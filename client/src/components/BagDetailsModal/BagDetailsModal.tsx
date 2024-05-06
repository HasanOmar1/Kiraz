import { useLoginContext } from "../../utils/Context";
import GenericModal from "../GenericModal/GenericModal";
import "./BagDetailsModal.css";

type Props = {
  closeModal: () => void;
  isModalOpen: boolean;
  handleCheckOut: () => void;
};

const BagDetailsModal = ({
  closeModal,
  isModalOpen,
  handleCheckOut,
}: Props) => {
  const { currentUser } = useLoginContext();

  const itemsPrice = currentUser?.bag.reduce((a, b) => {
    return a + (b.price || 0);
  }, 0);

  return (
    <div className="BagDetailsModal modal-container">
      <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
        <div className="modal">
          <h3>Price: ${itemsPrice} </h3>
          <br />
          <h4>Complete Transaction?</h4>
          <div className="modal-btns">
            <button onClick={closeModal}>No</button>
            <button onClick={handleCheckOut}>Yes</button>
          </div>
        </div>
      </GenericModal>
    </div>
  );
};

export default BagDetailsModal;

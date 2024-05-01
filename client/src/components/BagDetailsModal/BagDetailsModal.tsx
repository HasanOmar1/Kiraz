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
  return (
    <div className="BagDetailsModal modal-container">
      <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
        <div className="modal">
          <h3>Are you sure you want to check-out ?</h3>
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

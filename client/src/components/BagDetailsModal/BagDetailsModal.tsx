import GenericModal from "../GenericModal/GenericModal";
import "./BagDetailsModal.css";

type Props = {
  closeModal: () => void;
  isModalOpen: boolean;
  yesFunction: () => void;

  children: React.ReactNode;
};

const BagDetailsModal = ({
  closeModal,
  isModalOpen,
  yesFunction,
  children,
}: Props) => {
  return (
    <div className="BagDetailsModal modal-container">
      <GenericModal closeModal={closeModal} isOpen={isModalOpen}>
        <div className="modal">
          {children}

          <div className="modal-btns">
            <button onClick={closeModal}>No</button>
            <button onClick={yesFunction}>Yes</button>
          </div>
        </div>
      </GenericModal>
    </div>
  );
};

export default BagDetailsModal;

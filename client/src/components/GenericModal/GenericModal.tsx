import "./GenericModal.css";

type GenericModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};

export default function GenericModal({
  children,
  isOpen,
  closeModal,
}: GenericModalProps) {
  return (
    <>
      <div className="GenericModal form-container">
        <div className="modal-position-container">
          {isOpen && (
            <div className="modal-background" onClick={() => closeModal()}>
              <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                {children}
                <div className="close-modal" onClick={closeModal}>
                  X
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import { createContext, useContext, useState } from "react";

type ModalContextValues = {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
};

type Props = {
  children: React.ReactNode;
};

const ModalContext = createContext<null | ModalContextValues>(null);

const ModalContextProvider = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("This component is not wrapped in ModalContextProvider");
  }
  return context;
};
export default ModalContextProvider;

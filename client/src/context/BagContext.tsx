import axios from "../axiosConfig";
import { createContext, useContext, useState } from "react";
import { useLoginContext } from "./LoginContext";
import { BagItems } from "../types/ClothesTypes";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

type BagContextValues = {
  removeItemFromBag: (id: string) => void;
  addToBag: (bag: BagItems) => void;
  errorMsg: string;
  userBagHistory: BagItems[];
  getBagHistory: () => Promise<void>;
  checkOut: () => Promise<void>;
  clearBag: () => Promise<void>;
  setUserBagHistory: React.Dispatch<React.SetStateAction<never[]>>;
};

const BagContext = createContext<null | BagContextValues>(null);

const BagContextProvider = ({ children }: Props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [userBagHistory, setUserBagHistory] = useState([]);
  const { currentLoggedUser } = useLoginContext();

  const addToBag = async (bag: BagItems) => {
    try {
      await axios.post(`/bag-items/add`, bag);
      currentLoggedUser();

      toast.success("Product has been added to your bag");
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      // console.log(error.response?.data.message);
    }
  };

  const removeItemFromBag = async (id: string) => {
    try {
      await axios.delete(`/bag-items/delete/${id}`);
      currentLoggedUser();
    } catch (error: any) {
      console.log(error.response?.data.message);
    }
  };

  const getBagHistory = async () => {
    try {
      const response = await axios.get(`/bag/history`);
      setUserBagHistory(response.data);
      // console.log(response.data);
    } catch (error: any) {
      console.log(error.response?.data.message);
    }
  };

  const checkOut = async () => {
    try {
      await axios.delete("/bag-items/checkout");
      currentLoggedUser();
    } catch (error: any) {
      console.log(error.response?.data.message);
    }
  };

  const clearBag = async () => {
    try {
      await axios.delete("/bag-items/clear-bag");
      currentLoggedUser();
    } catch (error: any) {
      console.log(error.response?.data.message);
    }
  };

  return (
    <BagContext.Provider
      value={{
        removeItemFromBag,
        addToBag,
        errorMsg,
        userBagHistory,
        getBagHistory,
        checkOut,
        clearBag,
        setUserBagHistory,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error("This component is not wrapped with BagContextProvider");
  }

  return context;
};

export default BagContextProvider;

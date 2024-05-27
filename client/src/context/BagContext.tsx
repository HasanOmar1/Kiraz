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
};

const BagContext = createContext<null | BagContextValues>(null);

const BagContextProvider = ({ children }: Props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [userBagHistory, setUserBagHistory] = useState([]);
  const { setCurrentUser } = useLoginContext();

  const addToBag = async (bag: BagItems) => {
    try {
      const response = await axios.post(`/bag-items/add`, bag);
      setCurrentUser(response.data);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
      // console.log(response.data);
      toast.success("Product has been added to your bag");
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      // console.log(error.response?.data.message);
    }
  };

  const removeItemFromBag = async (id: string) => {
    try {
      const response = await axios.delete(`/bag-items/delete/${id}`);
      setCurrentUser(response.data);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
      // console.log(response.data);
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
      const response = await axios.delete("/bag-items/checkout");
      setCurrentUser(response.data);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
    } catch (error: any) {
      console.log(error.response?.data.message);
    }
  };

  const clearBag = async () => {
    try {
      const response = await axios.delete("/bag-items/clear-bag");
      setCurrentUser(response.data);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
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

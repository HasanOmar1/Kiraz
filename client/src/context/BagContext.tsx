import axios from "../axiosConfig";
import { createContext, useContext, useState } from "react";
import { useLoginContext } from "./LoginContext";

type addToBag = {
  clothes: string;
};

type Props = {
  children: React.ReactNode;
};

type BagContextValues = {
  removeItemFromBag: (id: string) => void;
  addToBag: (bag: addToBag) => void;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
};

const BagContext = createContext<null | BagContextValues>(null);

const BagContextProvider = ({ children }: Props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const { setCurrentUser } = useLoginContext();

  const addToBag = async (bag: addToBag) => {
    try {
      const response = await axios.post(`/bag/add`, bag);
      setCurrentUser(response.data);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
      console.log(response.data);
      // setErrorMsg("Item has been added to your bag");
    } catch (error: any) {
      setErrorMsg(error.response?.data.message);
      // console.log(error.response?.data.message);
    }
  };

  const removeItemFromBag = async (id: string) => {
    try {
      const response = await axios.delete(`/bag/delete/${id}`);
      setCurrentUser(response.data);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response?.data.message);
    }
  };

  return (
    <BagContext.Provider
      value={{ removeItemFromBag, addToBag, errorMsg, setErrorMsg }}
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

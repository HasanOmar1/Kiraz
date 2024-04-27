import axios from "../axiosConfig";
import { createContext, useContext } from "react";
import { useLoginContext } from "./LoginContext";

type Props = {
  children: React.ReactNode;
};

type BagContextValues = {
  removeItemFromBag: (id: string) => void;
};

const BagContext = createContext<null | BagContextValues>(null);

const token = localStorage.getItem("token");
const config = {
  headers: { authorization: `Bearer ${token}` },
};

const BagContextProvider = ({ children }: Props) => {
  const { setCurrentUser } = useLoginContext();

  const removeItemFromBag = async (id: string) => {
    try {
      const response = await axios.delete(`/bag/delete/${id}`, config);
      const userJSON = JSON.stringify(response.data);
      localStorage.setItem("user", userJSON);
      setCurrentUser(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <BagContext.Provider value={{ removeItemFromBag }}>
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

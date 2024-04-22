import { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import * as Type from "../types/ClothesTypes";

type ClothesContextProviderProps = {
  children: React.ReactNode;
};

type ClothesContextValues = {
  getClothesByTypeData: Type.Clothes[];
  getClothesByType: (clothesType: string) => void;
  optionsForQuery: string;
  setOptionsForQuery: React.Dispatch<React.SetStateAction<string>>;
  setGetClothesByTypeData: React.Dispatch<React.SetStateAction<Type.Clothes[]>>;
};

const ClothesContext = createContext<null | ClothesContextValues>(null);

const ClothesContextProvider = ({ children }: ClothesContextProviderProps) => {
  const [getClothesByTypeData, setGetClothesByTypeData] = useState<
    Type.Clothes[]
  >([]);
  const [optionsForQuery, setOptionsForQuery] = useState("");

  const getClothesByType = async (options: string) => {
    try {
      // const response = await axios.get(`/clothes/by?type=${clothesType}`);
      const response = await axios.get(`/clothes/by?type=${options}`);
      // console.log(response.data);
      setGetClothesByTypeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClothesContext.Provider
      value={{
        getClothesByTypeData,
        getClothesByType,
        optionsForQuery,
        setOptionsForQuery,
        setGetClothesByTypeData,
      }}
    >
      {children}
    </ClothesContext.Provider>
  );
};

export const useClothesContext = () => {
  const context = useContext(ClothesContext);
  if (!context) {
    throw new Error(
      "This Component is not wrapped in a ClothesContextProvider"
    );
  }
  return context;
};

export default ClothesContextProvider;

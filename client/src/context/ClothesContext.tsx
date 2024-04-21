import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";

type ClothesContextProviderProps = {
  children: React.ReactNode;
};

type Clothes = {
  color: string;
  img: string;
  name: string;
  price: number;
  size: string;
  type: string;
  _id: string;
};

type ClothesContextValues = {
  getClothes: Clothes[];
  getClothesByTypeData: Clothes[];
  getClothesByType: (clothesType: string) => void;
  optionsForQuery: string;
  setOptionsForQuery: React.Dispatch<React.SetStateAction<string>>;
  setGetClothesByTypeData: React.Dispatch<React.SetStateAction<Clothes[]>>;
};

const ClothesContext = createContext<null | ClothesContextValues>(null);

const ClothesContextProvider = ({ children }: ClothesContextProviderProps) => {
  const [getClothes, setGetClothes] = useState<Clothes[]>([]);
  const [getClothesByTypeData, setGetClothesByTypeData] = useState<Clothes[]>(
    []
  );
  const [optionsForQuery, setOptionsForQuery] = useState("");

  useEffect(() => {
    // getAllClothes();
  }, []);

  const getAllClothes = async () => {
    try {
      const response = await axios.get("/clothes");
      console.log(response.data);
      setGetClothes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
        getClothes,
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

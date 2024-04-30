import { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import * as Type from "../types/ClothesTypes";

//not used

type Props = {
  children: React.ReactNode;
};

type AllClothesTypesContextValues = {
  getShirts: Type.Clothes[];
  getHoodies: Type.Clothes[];
  getPants: Type.Clothes[];
  getShorts: Type.Clothes[];
  getAllPants: () => void;
  getAllShirts: () => void;
  getAllShorts: () => void;
  getAllHoodies: () => void;
};

const AllClothesTypesContext =
  createContext<null | AllClothesTypesContextValues>(null);

const AllClothesTypesContextProvider = ({ children }: Props) => {
  const [getShirts, setGetShirts] = useState<Type.Clothes[]>([]);
  const [getHoodies, setGetHoodies] = useState<Type.Clothes[]>([]);
  const [getPants, setGetPants] = useState<Type.Clothes[]>([]);
  const [getShorts, setGetShorts] = useState<Type.Clothes[]>([]);

  const getAllShirts = async () => {
    try {
      const response = await axios.get("/shirts");
      setGetShirts(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllHoodies = async () => {
    try {
      const response = await axios.get("/hoodies");
      setGetHoodies(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllPants = async () => {
    try {
      const response = await axios.get("/pants");
      setGetPants(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllShorts = async () => {
    try {
      const response = await axios.get("/shorts");
      setGetShorts(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AllClothesTypesContext.Provider
      value={{
        getShirts,
        getHoodies,
        getPants,
        getShorts,
        getAllPants,
        getAllShirts,
        getAllHoodies,
        getAllShorts,
      }}
    >
      {children}
    </AllClothesTypesContext.Provider>
  );
};

export const useAllClothesTypesContext = () => {
  const context = useContext(AllClothesTypesContext);
  if (!context) {
    throw new Error(
      "This component is not wrapped in AllClothesTypesContextProvider"
    );
  }
  return context;
};

export default AllClothesTypesContextProvider;

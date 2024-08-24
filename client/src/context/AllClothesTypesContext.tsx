import { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import * as Type from "../types/ClothesTypes";
import { useClothesContext } from "./ClothesContext";

type Props = {
  children: React.ReactNode;
};

type AllClothesTypesContextValues = {
  addType: (type: string, data: Type.Clothes) => Promise<void>;
  deleteType: (type: string, id: string) => Promise<void>;
  updateType: (type: string, id: string, data: Type.Clothes) => Promise<void>;
  addTypeErrorMsg: string;
  setAddTypeErrorMsg: React.Dispatch<React.SetStateAction<string>>;
};

const AllClothesTypesContext =
  createContext<null | AllClothesTypesContextValues>(null);

const AllClothesTypesContextProvider = ({ children }: Props) => {
  const { filterClothesByQuery, getAllClothes } = useClothesContext();
  const [addTypeErrorMsg, setAddTypeErrorMsg] = useState<string>("");

  const addType = async (type: string, data: Type.Clothes) => {
    try {
      await axios.post(`${type}/add`, data);
      setAddTypeErrorMsg("");
      filterClothesByQuery(`type=${type}`);
      getAllClothes();
    } catch (error: any) {
      setAddTypeErrorMsg(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const updateType = async (type: string, id: string, data: Type.Clothes) => {
    try {
      await axios.put(`${type}/update/${id}`, data);
      filterClothesByQuery(`type=${type}`);
      getAllClothes();
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const deleteType = async (type: string, id: string) => {
    try {
      await axios.delete(`${type}/delete/${id}`);
      filterClothesByQuery(`type=${type}`);
      getAllClothes();
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  return (
    <AllClothesTypesContext.Provider
      value={{
        addType,
        deleteType,
        updateType,
        addTypeErrorMsg,
        setAddTypeErrorMsg,
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

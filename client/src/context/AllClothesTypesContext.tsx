import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import * as Type from "../types/ClothesTypes";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

type AllClothesTypesContextValues = {
  getClothesType: Type.Clothes[];
  getType: (type: string) => Promise<void>;
  addType: (type: string, data: Type.Clothes) => Promise<void>;
  deleteType: (type: string, id: string) => Promise<void>;
  updateType: (type: string, id: string, data: Type.Clothes) => Promise<void>;
  addTypeErrorMsg: string;
  setAddTypeErrorMsg: React.Dispatch<React.SetStateAction<string>>;
};

const AllClothesTypesContext =
  createContext<null | AllClothesTypesContextValues>(null);

const AllClothesTypesContextProvider = ({ children }: Props) => {
  const [getClothesType, setGetClothesType] = useState<Type.Clothes[]>([]);
  const [addTypeErrorMsg, setAddTypeErrorMsg] = useState<string>("");

  const { pathname } = useLocation();

  useEffect(() => {
    setGetClothesType([]);
  }, [pathname]);

  const getType = async (type: string) => {
    try {
      const response = await axios.get(`/${type}`);
      setGetClothesType(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const addType = async (type: string, data: Type.Clothes) => {
    try {
      const response = await axios.post(`${type}/add`, data);
      setAddTypeErrorMsg("");
      getType(type);
      console.log(response.data);
    } catch (error: any) {
      setAddTypeErrorMsg(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const updateType = async (type: string, id: string, data: Type.Clothes) => {
    try {
      const response = await axios.put(`${type}/update/${id}`, data);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const deleteType = async (type: string, id: string) => {
    try {
      const response = await axios.delete(`${type}/delete/${id}`);
      getType(type);
      console.log(response.data.message);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  return (
    <AllClothesTypesContext.Provider
      value={{
        getType,
        getClothesType,
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

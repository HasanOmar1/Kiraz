import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";
import * as Type from "../types/ClothesTypes";
import { useLocation } from "react-router-dom";

type ClothesContextProviderProps = {
  children: React.ReactNode;
};

type ClothesContextValues = {
  allClothes: Type.Clothes[] | [];
  getClothesById: (id: string | undefined) => void;
  clothesById: null | Type.Clothes;
  setClothesById: React.Dispatch<React.SetStateAction<Type.Clothes | null>>;
  latestProducts: Type.Clothes[] | null;
  filterClothesByQuery: (filterBy: string) => void;
  productsByFiltering: Type.Clothes[] | null;
};

const ClothesContext = createContext<null | ClothesContextValues>(null);

const ClothesContextProvider = ({ children }: ClothesContextProviderProps) => {
  const [allClothes, setAllClothes] = useState<Type.Clothes[] | []>([]);
  const [clothesById, setClothesById] = useState<null | Type.Clothes>(null);
  const [latestProducts, setLatestProducts] = useState<null | Type.Clothes[]>(
    []
  );
  const [productsByFiltering, setProductsByFiltering] = useState<
    null | Type.Clothes[]
  >([]);

  const { pathname } = useLocation();

  useEffect(() => {
    setClothesById(null);
  }, [pathname]);

  useEffect(() => {
    getAllClothes();
    getLatestAddedProduct();
  }, []);

  const getAllClothes = async () => {
    try {
      const { data } = await axios.get("/clothes");
      setAllClothes(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getClothesById = async (id: string | undefined) => {
    try {
      const response = await axios.get(`/clothes/${id}`);
      // console.log(response.data);
      setClothesById(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const filterClothesByQuery = async (filterBy: string) => {
    try {
      const { data } = await axios.get(`/clothes/filterBy?${filterBy}`);
      setProductsByFiltering(data);
      // console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getLatestAddedProduct = async () => {
    try {
      const response = await axios.get(`/clothes/latest`);
      // console.log(response.data);
      setLatestProducts(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <ClothesContext.Provider
      value={{
        allClothes,
        getClothesById,
        clothesById,
        setClothesById,
        latestProducts,
        filterClothesByQuery,
        productsByFiltering,
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

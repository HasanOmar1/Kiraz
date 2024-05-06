import { useThemeContext } from "../context/ThemeContext";
import { useClothesContext } from "../context/ClothesContext";
import ClothesContextProvider from "../context/ClothesContext";
import AllClothesTypesContextProvider from "../context/AllClothesTypesContext";
import BagContextProvider from "../context/BagContext";
import LoginContextProvider from "../context/LoginContext.tsx";
import ModalContextProvider from "../context/ModalContext.tsx";
import ThemeContextProvider from "../context/ThemeContext.tsx";
import { useBagContext } from "../context/BagContext";
import { useLoginContext } from "../context/LoginContext";
import { useModalContext } from "../context/ModalContext";
import { useAllClothesTypesContext } from "../context/AllClothesTypesContext";

export {
  useThemeContext,
  useClothesContext,
  ClothesContextProvider,
  AllClothesTypesContextProvider,
  BagContextProvider,
  LoginContextProvider,
  ModalContextProvider,
  ThemeContextProvider,
  useBagContext,
  useLoginContext,
  useModalContext,
  useAllClothesTypesContext,
};

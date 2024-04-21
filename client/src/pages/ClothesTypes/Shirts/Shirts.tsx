import "../ClothesStyles.css";
import { useEffect } from "react";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import { useThemeContext } from "../../../context/ThemeContext";
import { useAllClothesTypesContext } from "../../../context/AllClothesTypesContext";

const ShirtsPage = () => {
  const { getAllShirts, getShirts } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();

  useEffect(() => {
    getAllShirts();
  }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      <ClothesTypesData array={getShirts} text="Shirts" />
    </main>
  );
};

export default ShirtsPage;

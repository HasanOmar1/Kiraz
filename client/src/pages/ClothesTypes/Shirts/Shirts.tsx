import "../ClothesStyles.css";
import { useEffect } from "react";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import {
  useThemeContext,
  useAllClothesTypesContext,
} from "../../../utils/Context";

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

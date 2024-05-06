import "../ClothesStyles.css";
import { useEffect } from "react";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import {
  useThemeContext,
  useAllClothesTypesContext,
} from "../../../utils/Context";

const PantsPage = () => {
  const { getAllPants, getPants } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();

  useEffect(() => {
    getAllPants();
  }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      <ClothesTypesData array={getPants} text="Pants" />
    </main>
  );
};

export default PantsPage;

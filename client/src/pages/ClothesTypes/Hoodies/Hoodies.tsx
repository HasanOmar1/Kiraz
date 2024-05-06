import "../ClothesStyles.css";
import { useEffect } from "react";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import {
  useThemeContext,
  useAllClothesTypesContext,
} from "../../../utils/Context";

const HoodiesPage = () => {
  const { getAllHoodies, getHoodies } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();

  useEffect(() => {
    getAllHoodies();
  }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      <ClothesTypesData array={getHoodies} text="Hoodies" />
    </main>
  );
};

export default HoodiesPage;

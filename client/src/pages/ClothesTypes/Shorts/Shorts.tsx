import "../ClothesStyles.css";
import { useEffect } from "react";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import {
  useThemeContext,
  useAllClothesTypesContext,
} from "../../../utils/Context";

const ShortsPage = () => {
  const { getAllShorts, getShorts } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();

  useEffect(() => {
    getAllShorts();
  }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      <ClothesTypesData array={getShorts} text="Shorts" />
    </main>
  );
};

export default ShortsPage;

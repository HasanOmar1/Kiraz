import "../ClothesStyles.css";
import { useEffect } from "react";
import { useAllClothesTypesContext } from "../../../context/AllClothesTypesContext";
import { useThemeContext } from "../../../context/ThemeContext";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";

const PantsPage = () => {
  const { getAllPants, getPants } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();

  useEffect(() => {
    getAllPants();
  }, []);

  // const blue = getPants.filter((pants) => pants.color === "green");

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      <ClothesTypesData array={getPants} text="Pants" />
    </main>
  );
};

export default PantsPage;

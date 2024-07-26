import "../ClothesStyles.css";
import { useEffect } from "react";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import {
  useThemeContext,
  useAllClothesTypesContext,
  useClothesContext,
} from "../../../utils/Context";
import NewData from "../../../components/ClothesTypesData/NewClothesTypesData";

const HoodiesPage = () => {
  // const { getType, getClothesType } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();
  const { productsByFiltering } = useClothesContext();

  // useEffect(() => {
  //   getType("hoodies");
  // }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      {/* <ClothesTypesData array={getClothesType} text="Hoodies" /> */}
      <NewData text="Hoodies" array={productsByFiltering} />
    </main>
  );
};

export default HoodiesPage;

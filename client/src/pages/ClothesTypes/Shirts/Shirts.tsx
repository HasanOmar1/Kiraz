import "../ClothesStyles.css";
import { useEffect } from "react";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import {
  useThemeContext,
  useAllClothesTypesContext,
  useClothesContext,
} from "../../../utils/Context";
import NewData from "../../../components/ClothesTypesData/NewClothesTypesData";

const ShirtsPage = () => {
  // const { getType, getClothesType } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();
  const { productsByFiltering } = useClothesContext();

  // useEffect(() => {
  //   // getType("shirts");
  // }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      {/* <ClothesTypesData array={getClothesType} text="Shirts" /> */}
      <NewData text="Shirts" array={productsByFiltering} />
    </main>
  );
};

export default ShirtsPage;

import "../ClothesStyles.css";
import { useEffect } from "react";
import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import {
  useThemeContext,
  useAllClothesTypesContext,
  useClothesContext,
} from "../../../utils/Context";
import NewData from "../../../components/ClothesTypesData/NewClothesTypesData";

const ShortsPage = () => {
  // const { getType, getClothesType } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();
  const { productsByFiltering } = useClothesContext();

  // useEffect(() => {
  //   getType("shorts");
  // }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      {/* <ClothesTypesData array={getClothesType} text="Shorts" /> */}
      <NewData text="Shorts" array={productsByFiltering} />
    </main>
  );
};

export default ShortsPage;

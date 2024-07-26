import "../ClothesStyles.css";
// import { useEffect } from "react";
import {
  useThemeContext,
  // useAllClothesTypesContext,
  useClothesContext,
} from "../../../utils/Context";
import NewData from "../../../components/ClothesTypesData/NewClothesTypesData";

const PantsPage = () => {
  // const { getType } = useAllClothesTypesContext();
  const { productsByFiltering } = useClothesContext();

  const { getThemeClassName } = useThemeContext();

  // useEffect(() => {
  //   getType("pants");
  // }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      {/* <ClothesTypesData array={getClothesType} text="Pants" /> */}
      <NewData text="Pants" array={productsByFiltering} />
    </main>
  );
};

export default PantsPage;

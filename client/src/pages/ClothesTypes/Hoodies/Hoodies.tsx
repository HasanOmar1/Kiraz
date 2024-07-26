import "../ClothesStyles.css";
// import ClothesTypesData from "../../../components/ClothesTypesData/ClothesTypesData";
import { useThemeContext } from "../../../utils/Context";
import NewData from "../../../components/ClothesTypesData/NewClothesTypesData";

const HoodiesPage = () => {
  // const { getType, getClothesType } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();

  // useEffect(() => {
  //   getType("hoodies");
  // }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      {/* <ClothesTypesData array={getClothesType} text="Hoodies" /> */}
      <NewData text="Hoodies" />
    </main>
  );
};

export default HoodiesPage;

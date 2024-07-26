import "../ClothesStyles.css";
import { useThemeContext } from "../../../utils/Context";
import NewData from "../../../components/ClothesTypesData/NewClothesTypesData";

const ShirtsPage = () => {
  // const { getType, getClothesType } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();

  // useEffect(() => {
  //   // getType("shirts");
  // }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      {/* <ClothesTypesData array={getClothesType} text="Shirts" /> */}
      <NewData text="Shirts" />
    </main>
  );
};

export default ShirtsPage;

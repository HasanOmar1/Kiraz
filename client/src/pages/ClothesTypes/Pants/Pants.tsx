import "../ClothesStyles.css";
import { useThemeContext } from "../../../utils/Context";
import NewData from "../../../components/ClothesTypesData/NewClothesTypesData";

const PantsPage = () => {
  // const { getType } = useAllClothesTypesContext();

  const { getThemeClassName } = useThemeContext();

  // useEffect(() => {
  //   getType("pants");
  // }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      {/* <ClothesTypesData array={getClothesType} text="Pants" /> */}
      <NewData text="Pants" />
    </main>
  );
};

export default PantsPage;

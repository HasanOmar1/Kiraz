import "../ClothesStyles.css";
import { useThemeContext } from "../../../utils/Context";
import NewData from "../../../components/ClothesTypesData/NewClothesTypesData";

const ShortsPage = () => {
  // const { getType, getClothesType } = useAllClothesTypesContext();
  const { getThemeClassName } = useThemeContext();

  // useEffect(() => {
  //   getType("shorts");
  // }, []);

  return (
    <main className={`ClothesPage Page ${getThemeClassName()} `}>
      {/* <ClothesTypesData array={getClothesType} text="Shorts" /> */}
      <NewData text="Shorts" />
    </main>
  );
};

export default ShortsPage;

import ClothesData from "../../components/ClothesData/ClothesData";
import { useThemeContext } from "../../context/ThemeContext";
import "./Collection.css";

const Collection = () => {
  const { getThemeClassName } = useThemeContext();
  return (
    <div className={`Collection Page ${getThemeClassName()}`}>
      <ClothesData />
    </div>
  );
};

export default Collection;

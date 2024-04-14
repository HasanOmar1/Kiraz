import { useLocation } from "react-router-dom";
import "./Collection.css";
import { useThemeContext } from "../../context/ThemeContext";
import { useClothesContext } from "../../context/ClothesContext";
import { useEffect } from "react";

const Collection = () => {
  const { getClothesByType, getClothesByTypeData } = useClothesContext();

  const { state } = useLocation();
  const { getThemeClassName } = useThemeContext();
  useEffect(() => {
    getClothesByType(state);
  }, []);

  // console.log(state);
  return (
    <main className={`Collection Page ${getThemeClassName()}`}>
      <div>
        {getClothesByTypeData?.map((data) => {
          return <h3 key={data._id}>{data.color}</h3>;
        })}
      </div>
    </main>
  );
};

export default Collection;

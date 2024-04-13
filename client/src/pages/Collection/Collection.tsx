import { useLocation } from "react-router-dom";
import "./Collection.css";
import { useThemeContext } from "../../context/ThemeContext";

const Collection = () => {
  const { state } = useLocation();
  const { getThemeClassName } = useThemeContext();

  console.log(state);
  return (
    <main className={`Collection Page ${getThemeClassName()}`}>{state}</main>
  );
};

export default Collection;

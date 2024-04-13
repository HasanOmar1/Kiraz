import { useThemeContext } from "../../context/ThemeContext";

const Pants = () => {
  const { getThemeClassName } = useThemeContext();

  return <main className={`Pants Page ${getThemeClassName()}`}>Pants</main>;
};

export default Pants;

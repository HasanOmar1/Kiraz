import { useThemeContext } from "../../context/ThemeContext";

const Shirts = () => {
  const { getThemeClassName } = useThemeContext();

  return <main className={`Shirts Page ${getThemeClassName()}`}>Shirts</main>;
};

export default Shirts;

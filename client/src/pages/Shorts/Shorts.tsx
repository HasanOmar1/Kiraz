import { useThemeContext } from "../../context/ThemeContext";

const Shorts = () => {
  const { getThemeClassName } = useThemeContext();

  return <main className={`Shorts Page ${getThemeClassName()}`}>Shorts</main>;
};

export default Shorts;

import "./ThemeButton.css";
import { moonSvg, sunSvg } from "../../utils/Assets";
import { useState } from "react";

type ThemeButtonProps = {
  handleSwitchTheme: () => void;
};

const localTheme = localStorage.getItem("theme");

const ThemeButton = ({ handleSwitchTheme }: ThemeButtonProps) => {
  const [isChecked, setIsChecked] = useState(
    localTheme === "dark" ? true : false
  );
  return (
    <div className="ThemeButton">
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label htmlFor="darkmode-toggle" onClick={handleSwitchTheme}></label>
      <img src={moonSvg} alt="moon svg" className="moon" />
      <img src={sunSvg} alt="sun svg" className="sun" />
    </div>
  );
};

export default ThemeButton;

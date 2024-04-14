import "./ThemeButton.css";
import moonSvg from "../../assets/svgs/moon.svg";
import sunSvg from "../../assets/svgs/sun.svg";
import { useState } from "react";

type ThemeButtonProps = {
  handleSwitchTheme: () => void;
};

const ThemeButton = ({ handleSwitchTheme }: ThemeButtonProps) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="ThemeButton">
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={isChecked}
        onClick={() => setIsChecked((prev) => !prev)}
      />
      <label htmlFor="darkmode-toggle" onClick={handleSwitchTheme}></label>
      <img src={moonSvg} alt="moon svg" className="moon" />
      <img src={sunSvg} alt="sun svg" className="sun" />
    </div>
  );
};

export default ThemeButton;

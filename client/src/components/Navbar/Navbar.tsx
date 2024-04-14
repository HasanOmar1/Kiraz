import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";

import ThemeButton from "../ThemeButton/ThemeButton";

const Navbar = () => {
  const { setTheme, theme } = useThemeContext();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Kiraz Kids Logo" onClick={goHome}></img>
        </div>
        <ThemeButton handleSwitchTheme={handleSwitchTheme} />
      </div>
    </nav>
  );
};

export default Navbar;

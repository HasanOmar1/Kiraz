import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import loginSvg from "../../assets/svgs/login.svg";
import logoutSvg from "../../assets/svgs/logout.svg";

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
        <div className="svgs-container">
          <ThemeButton handleSwitchTheme={handleSwitchTheme} />
          <img src={loginSvg} alt="login icon" className="svg" />
          <img src={logoutSvg} alt="logout icon" className="svg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

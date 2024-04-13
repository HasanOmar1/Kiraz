import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <nav className="Navbar">
      <div className="logo-container">
        <img src={logo} alt="Kiraz Kids Logo" onClick={goHome}></img>
      </div>
      <div className="nav-container"></div>
    </nav>
  );
};

export default Navbar;

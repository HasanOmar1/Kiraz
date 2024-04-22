import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import loginSvg from "../../assets/svgs/login.svg";
import logoutSvg from "../../assets/svgs/logout.svg";
import ThemeButton from "../ThemeButton/ThemeButton";
import LoginModal from "../Login/Login";
import GenericModal from "../GenericModal/GenericModal";
import { useModalContext } from "../../context/ModalContext";
import { useClothesContext } from "../../context/ClothesContext";
import { useLoginContext } from "../../context/LoginContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useThemeContext();
  const { closeModal, isModalOpen, openModal } = useModalContext();
  const { setGetClothesByTypeData } = useClothesContext();
  const { currentUser, setCurrentUser } = useLoginContext();

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const goHome = () => {
    navigate("/");
    setGetClothesByTypeData([]);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Kiraz Kids Logo" onClick={goHome} />
        </div>
        {currentUser && <p>Welcome {currentUser.name}</p>}
        <div className="svgs-container">
          <ThemeButton handleSwitchTheme={handleSwitchTheme} />
          {currentUser ? (
            <img src={loginSvg} alt="login icon" className="svg" />
          ) : (
            <img
              src={loginSvg}
              alt="login icon"
              className="svg"
              onClick={openModal}
            />
          )}
          {currentUser && (
            <div>
              <img
                src={logoutSvg}
                alt="logout icon"
                className="svg"
                onClick={handleLogOut}
              />
            </div>
          )}
        </div>
      </div>
      {!currentUser && (
        <div className="modal-container">
          <GenericModal isOpen={isModalOpen} closeModal={closeModal}>
            <LoginModal />
          </GenericModal>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

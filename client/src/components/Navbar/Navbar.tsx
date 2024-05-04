import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import loginSvg from "../../assets/svgs/login.svg";
import ThemeButton from "../ThemeButton/ThemeButton";
import LoginModal from "../Login/Login";
import GenericModal from "../GenericModal/GenericModal";
import { useModalContext } from "../../context/ModalContext";
import { useLoginContext } from "../../context/LoginContext";
import { useClothesContext } from "../../context/ClothesContext";
import NavBarSvgs from "../NavBarSvgs/NavBarSvgs";

const Navbar = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useThemeContext();
  const { closeModal, isModalOpen, openModal } = useModalContext();
  const { currentUser, setCurrentUser } = useLoginContext();
  const { setClothesById } = useClothesContext();

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const goHome = () => {
    navigate("/");
    setClothesById(null);
  };

  // when the user goes back one page using the browser.
  // window.onpopstate = () => {
  //   // setClothesById(null);
  // };

  const handleLogOut = () => {
    localStorage.clear();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Kiraz Kids Logo" onClick={goHome} />
        </div>
        <div className="svgs-container">
          <ThemeButton handleSwitchTheme={handleSwitchTheme} />
          {currentUser ? (
            <NavBarSvgs handleLogOut={handleLogOut} currentUser={currentUser} />
          ) : (
            <div>
              <img
                src={loginSvg}
                alt="login icon"
                className="svg"
                onClick={openModal}
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

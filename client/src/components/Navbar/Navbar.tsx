import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../ThemeButton/ThemeButton";
import LoginModal from "../Login/Login";
import GenericModal from "../GenericModal/GenericModal";
import {
  useThemeContext,
  useModalContext,
  useLoginContext,
  useClothesContext,
} from "../../utils/Context";

import NavBarSvgs from "../NavBarSvgs/NavBarSvgs";
import { logo, loginSvg } from "../../utils/Assets";

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

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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

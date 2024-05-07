import ThemeButton from "../ThemeButton/ThemeButton";
import NavBarSvgs from "../NavBarSvgs/NavBarSvgs";
import GenericModal from "../GenericModal/GenericModal";
import LoginModal from "../Login/Login";
import { useLoginContext } from "../../context/LoginContext";
import { useModalContext } from "../../context/ModalContext";
import { useThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { loginSvg } from "../../utils/Assets";
import "../Navbar/Navbar.css";
import "./SecondNavbar.css";

const SecondNavbar = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useThemeContext();
  const { closeModal, isModalOpen, openModal } = useModalContext();
  const { currentUser, setCurrentUser } = useLoginContext();

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="SecondNavbar second-nav">
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
      {!currentUser && (
        <div className="modal-container">
          <GenericModal isOpen={isModalOpen} closeModal={closeModal}>
            <LoginModal />
          </GenericModal>
        </div>
      )}
    </div>
  );
};

export default SecondNavbar;

import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import loginSvg from "../../assets/svgs/login.svg";
import logoutSvg from "../../assets/svgs/logout.svg";
import bagSvg from "../../assets/svgs/bag.svg";
import ThemeButton from "../ThemeButton/ThemeButton";
import LoginModal from "../Login/Login";
import GenericModal from "../GenericModal/GenericModal";
import { useModalContext } from "../../context/ModalContext";
import { useLoginContext } from "../../context/LoginContext";
import { useClothesContext } from "../../context/ClothesContext";

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

  const goToBag = () => {
    navigate("/bag");
  };

  // when the user goes back one page using the browser.
  window.onpopstate = () => {
    setClothesById(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setCurrentUser(null);
    navigate("/");
  };

  // currentUser && console.log(currentUser);

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Kiraz Kids Logo" onClick={goHome} />
        </div>
        {/* {currentUser && <p>Welcome {currentUser.name}</p>} */}
        <div className="svgs-container">
          <ThemeButton handleSwitchTheme={handleSwitchTheme} />
          {currentUser ? (
            <div className="signed-in-svgs-container">
              {/* <img src={loginSvg} alt="login icon" className="svg" /> */}
              <div className="bag-container">
                <img
                  src={bagSvg}
                  alt="bag icon"
                  className="svg"
                  onClick={goToBag}
                />
                <div className="bag-counter">{currentUser?.bag?.length}</div>
              </div>
              <div>
                <img
                  src={logoutSvg}
                  alt="logout icon"
                  className="svg"
                  onClick={handleLogOut}
                />
              </div>
            </div>
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

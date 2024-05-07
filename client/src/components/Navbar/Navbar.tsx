import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginModal from "../Login/Login";
import GenericModal from "../GenericModal/GenericModal";
import {
  useThemeContext,
  useModalContext,
  useLoginContext,
  useClothesContext,
} from "../../utils/Context";

import { logo } from "../../utils/Assets";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useThemeContext();
  const { closeModal, isModalOpen, openModal } = useModalContext();
  const { currentUser, setCurrentUser } = useLoginContext();
  const { setClothesById } = useClothesContext();
  const [openMenu, setOpenMenu] = useState(false);

  const goHome = () => {
    navigate("/");
    setClothesById(null);
  };

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <nav className="Navbar">
      {!currentUser && (
        <div className="modal-container">
          <GenericModal isOpen={isModalOpen} closeModal={closeModal}>
            <LoginModal />
          </GenericModal>
        </div>
      )}
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Kiraz Kids Logo" onClick={goHome} />
          <Link to={"/"} onClick={goHome} className="title">
            Kiraz
          </Link>
        </div>
        <div className="menu" onClick={handleOpenMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={openMenu ? "open" : ""}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/shirts"}>Shirts</NavLink>
          </li>
          <li>
            <NavLink to={"/hoodies"}>Hoodies</NavLink>
          </li>
          <li>
            <NavLink to={"/pants"}>Pants</NavLink>
          </li>
          <li>
            <NavLink to={"/shorts"}>Shorts</NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;

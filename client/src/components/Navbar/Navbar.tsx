import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginModal from "../Login/Login";
import GenericModal from "../GenericModal/GenericModal";
import { useModalContext, useLoginContext } from "../../utils/Context";

import { logo, fastLogo } from "../../utils/Assets";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { closeModal, isModalOpen } = useModalContext();
  const { currentUser } = useLoginContext();
  const [openMenu, setOpenMenu] = useState(false);

  const goHome = () => {
    navigate("/");
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
          <picture>
            <source
              srcSet={fastLogo}
              type="image/webp"
              onClick={goHome}
              width={55}
            />
            <img src={logo} alt="Kiraz Kids Logo" onClick={goHome} width={55} />
          </picture>
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

import "./NavBarSvgs.css";
import { logoutSvg, bagSvg } from "../../utils/assets";
import { useNavigate } from "react-router-dom";
import { CurrentLoggedUser } from "../../types/LoginContextTypes";

type Props = {
  currentUser: CurrentLoggedUser | null;
  handleLogOut: () => void;
};

const NavBarSvgs = ({ currentUser, handleLogOut }: Props) => {
  const navigate = useNavigate();

  const goToBag = () => {
    navigate("/bag");
  };

  return (
    <div className="NavBarSvgs signed-in-svgs-container">
      <div className="bag-container">
        <img src={bagSvg} alt="bag icon" className="svg" onClick={goToBag} />
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
  );
};

export default NavBarSvgs;

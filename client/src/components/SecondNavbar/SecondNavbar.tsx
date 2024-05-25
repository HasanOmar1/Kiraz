import ThemeButton from "../ThemeButton/ThemeButton";
import NavBarSvgs from "../NavBarSvgs/NavBarSvgs";
import GenericModal from "../GenericModal/GenericModal";
import LoginModal from "../Login/Login";
import {
  useLoginContext,
  useModalContext,
  useThemeContext,
  useClothesContext,
} from "../../utils/Context";
import { useNavigate } from "react-router-dom";
import { loginSvg } from "../../utils/Assets";
import "./SecondNavbar.css";
import { useEffect, useState } from "react";
import SearchInfo from "../SearchInfo/SearchInfo";
import { Clothes } from "../../types/ClothesTypes";

const SecondNavbar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [getClothes, setGetClothes] = useState<Clothes[]>([]);
  const [isResults, setIsResults] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setTheme, theme } = useThemeContext();
  const { closeModal, isModalOpen, openModal } = useModalContext();
  const { currentUser, setCurrentUser } = useLoginContext();
  const { allClothes } = useClothesContext();

  useEffect(() => {
    if (getClothes.length > 0) {
      setIsResults(true);
    } else {
      setIsResults(false);
    }
  }, [getClothes]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGetClothes(() => {
        if (searchInput.trim()) {
          return (
            allClothes?.filter((clothes) => {
              return clothes?.name
                ?.toLowerCase()
                .includes(searchInput.toLowerCase());
            }) ?? []
          );
        } else {
          return [];
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput, allClothes]);

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
    <div className="SecondNavbar">
      <div className="search-bar-container">
        <input
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for a product..."
        />

        {allClothes && isResults && (
          <div className="search-results">
            {allClothes && getClothes && (
              <SearchInfo
                array={getClothes}
                setIsResults={setIsResults}
                setSearchInput={setSearchInput}
              />
            )}
          </div>
        )}
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

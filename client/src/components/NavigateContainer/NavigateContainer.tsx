import { useNavigate } from "react-router-dom";
import "./NavigateContainer.css";
import upperCaseLetter from "../../utils/UpperCaseLetter";
import { Clothes } from "../../types/ClothesTypes";

type NavigateContainerProps = {
  clothesById: Clothes | null;
};

const NavigateContainer = ({ clothesById }: NavigateContainerProps) => {
  const navigate = useNavigate();

  const navigateTo = (page: string) => {
    navigate(page);
  };

  return (
    <div className="NavigateContainer">
      <p onClick={() => navigateTo("/")}>Home</p>
      <span>{">"}</span>
      <p onClick={() => navigateTo(`/collection/${clothesById?.type}`)}>
        {upperCaseLetter(clothesById?.type ?? "")}
      </p>
      <span>{">"}</span>
      <p>{clothesById?.name}</p>
    </div>
  );
};

export default NavigateContainer;

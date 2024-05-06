import upperCaseLetter from "../../utils/UpperCaseLetter";
import "./HomeImg.css";
import { useNavigate } from "react-router-dom";

type HomeImgProps = {
  img: string;
  text: string;
};

const HomeImg = ({ img, text }: HomeImgProps) => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(`${text}`, { state: text });
  };

  return (
    <div className="HomeImg" onClick={navigateToPage}>
      <img src={img} alt={img} />
      <h3>{upperCaseLetter(text)}</h3>
    </div>
  );
};

export default HomeImg;

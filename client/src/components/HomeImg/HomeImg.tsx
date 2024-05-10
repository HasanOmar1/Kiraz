import upperCaseLetter from "../../utils/UpperCaseLetter";
import "./HomeImg.css";
import { useNavigate } from "react-router-dom";

type HomeImgProps = {
  img: string;
  text: string;
  webPImg: string;
};

const HomeImg = ({ img, text, webPImg }: HomeImgProps) => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(`${text}`, { state: text });
  };

  return (
    <div className="HomeImg" onClick={navigateToPage}>
      <picture>
        <source srcSet={webPImg} type="image/webp" />
        <img src={img} alt={`${img} image`} />
      </picture>
      <h3>{upperCaseLetter(text)}</h3>
    </div>
  );
};

export default HomeImg;

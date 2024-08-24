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
    navigate(`/collection/${text}`, { state: text });
  };

  return (
    <div className="HomeImg" onClick={navigateToPage}>
      <picture>
        <source
          srcSet={webPImg}
          type="image/webp"
          height={400}
          width={"100%"}
        />
        <img src={img} alt={`${img} image`} height={400} width={"100%"} />
      </picture>
      <h3>{upperCaseLetter(text)}</h3>
    </div>
  );
};

export default HomeImg;

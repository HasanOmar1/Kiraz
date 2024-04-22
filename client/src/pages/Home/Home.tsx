import { useThemeContext } from "../../context/ThemeContext";
import "./Home.css";
import backgroundImg from "../../assets/background.jpg";
import shirtsImg from "../../assets/shirts.jpg";
import hoodieImg from "../../assets/hoodie.jpg";
import pantsImg from "../../assets/pants.jpg";
import shortImg from "../../assets/short.jpg";
import HomeImg from "../../components/HomeImg/HomeImg";

const Home = () => {
  const { getThemeClassName } = useThemeContext();

  return (
    <main className={`Home Page ${getThemeClassName()}`}>
      <div className="background-container">
        <img src={backgroundImg} alt="background img" />
      </div>
      <section className="imgs-section">
        <div className="imgs-container">
          <HomeImg img={shirtsImg} text="shirts" />
          <HomeImg img={hoodieImg} text="hoodies" />
          <HomeImg img={pantsImg} text="pants" />
          <HomeImg img={shortImg} text="shorts" />
        </div>
      </section>
    </main>
  );
};

export default Home;

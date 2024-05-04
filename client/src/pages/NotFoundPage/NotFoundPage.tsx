import { useEffect, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const { getThemeClassName } = useThemeContext();
  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      navigate(-1);
    }
  }, [timer]);

  return (
    <main className={`NotFoundPage Page ${getThemeClassName()}`}>
      <h1>Page not found </h1>
      <h2>Moving you back in {timer} seconds</h2>
    </main>
  );
};

export default NotFoundPage;

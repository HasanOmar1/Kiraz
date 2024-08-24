import { useEffect, useState } from "react";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../utils/Context";

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
      navigate("/");
    }
  }, [timer]);

  return (
    <main className={`NotFoundPage Page ${getThemeClassName()}`}>
      <h1>Page not found </h1>
      <h2>Moving you back to the home page in {timer} seconds</h2>
    </main>
  );
};

export default NotFoundPage;

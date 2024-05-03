import { useEffect, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const { getThemeClassName } = useThemeContext();
  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === -1) {
      navigate("/");
    }
  }, [timer]);

  return (
    <main className={`ErrorPage Page ${getThemeClassName()}`}>
      <h1>Page not found </h1>
      <h2>Moving you to the home page in {timer} seconds</h2>
    </main>
  );
};

export default ErrorPage;

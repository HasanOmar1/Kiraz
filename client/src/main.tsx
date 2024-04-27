import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./context/LoginContext.tsx";
import ModalContextProvider from "./context/ModalContext.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <ModalContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </ModalContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);

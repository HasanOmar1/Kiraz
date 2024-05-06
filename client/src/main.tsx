import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  LoginContextProvider,
  ModalContextProvider,
  ThemeContextProvider,
} from "./utils/Context.ts";

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

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  LoginContextProvider,
  ModalContextProvider,
  ThemeContextProvider,
} from "./utils/Context.ts";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeContextProvider>
        <ModalContextProvider>
          <LoginContextProvider>
            <App />
          </LoginContextProvider>
        </ModalContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </Provider>
);

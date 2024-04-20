import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import Home from "./pages/Home/Home";
import Collection from "./pages/Collection/Collection";
import ClothesContextProvider from "./context/ClothesContext";
import LoginContextProvider from "./context/LoginContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ClothesContextProvider>
          <LoginContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection/:name" element={<Collection />} />
            </Routes>
          </LoginContextProvider>
        </ClothesContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;

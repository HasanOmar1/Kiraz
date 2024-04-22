import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import Home from "./pages/Home/Home";
import ClothesContextProvider from "./context/ClothesContext";
import LoginContextProvider from "./context/LoginContext";
import ModalContextProvider from "./context/ModalContext";
import AllClothesTypesContextProvider from "./context/AllClothesTypesContext";
import PantsPage from "./pages/ClothesTypes/Pants/Pants";
import ShirtsPage from "./pages/ClothesTypes/Shirts/Shirts";
import ShortsPage from "./pages/ClothesTypes/Shorts/Shorts";
import HoodiesPage from "./pages/ClothesTypes/Hoodies/Hoodies";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ClothesContextProvider>
          <AllClothesTypesContextProvider>
            <ModalContextProvider>
              <LoginContextProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* Clothes */}
                  <Route path="/pants" element={<PantsPage />} />
                  <Route path="/shirts" element={<ShirtsPage />} />
                  <Route path="/shorts" element={<ShortsPage />} />
                  <Route path="/hoodies" element={<HoodiesPage />} />
                  {/*  */}
                </Routes>
              </LoginContextProvider>
            </ModalContextProvider>
          </AllClothesTypesContextProvider>
        </ClothesContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;

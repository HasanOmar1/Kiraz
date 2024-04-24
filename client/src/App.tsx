import { Routes, Route, useLocation } from "react-router-dom";
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
import ProductPage from "./pages/ProductPage/ProductPage";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
                  <Route path="/product/:id" element={<ProductPage />} />
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

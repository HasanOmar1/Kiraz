import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import Home from "./pages/Home/Home";
import ClothesContextProvider from "./context/ClothesContext";
// import LoginContextProvider from "./context/LoginContext";
import ModalContextProvider from "./context/ModalContext";
import AllClothesTypesContextProvider from "./context/AllClothesTypesContext";
import PantsPage from "./pages/ClothesTypes/Pants/Pants";
import ShirtsPage from "./pages/ClothesTypes/Shirts/Shirts";
import ShortsPage from "./pages/ClothesTypes/Shorts/Shorts";
import HoodiesPage from "./pages/ClothesTypes/Hoodies/Hoodies";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useEffect } from "react";
import Bag from "./pages/Bag/Bag";
import BagContextProvider from "./context/BagContext";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* <ThemeContextProvider> */}
      {/* <ModalContextProvider> */}
      {/* <LoginContextProvider> */}
      <BagContextProvider>
        <ClothesContextProvider>
          <AllClothesTypesContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/product/:id" element={<ProductPage />} />
              {/* Clothes */}
              <Route path="/pants" element={<PantsPage />} />
              <Route path="/shirts" element={<ShirtsPage />} />
              <Route path="/shorts" element={<ShortsPage />} />
              <Route path="/hoodies" element={<HoodiesPage />} />
              {/*  */}
            </Routes>
          </AllClothesTypesContextProvider>
        </ClothesContextProvider>
      </BagContextProvider>
      {/* </LoginContextProvider> */}
      {/* </ModalContextProvider> */}
      {/* </ThemeContextProvider> */}
    </>
  );
}

export default App;

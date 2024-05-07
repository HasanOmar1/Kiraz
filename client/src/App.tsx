import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import {
  ClothesContextProvider,
  AllClothesTypesContextProvider,
  BagContextProvider,
} from "./utils/Context";
import * as Pages from "./pages/index";
import SecondNavbar from "./components/SecondNavbar/SecondNavbar";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <BagContextProvider>
        <ClothesContextProvider>
          <AllClothesTypesContextProvider>
            <Navbar />
            <SecondNavbar />
            <Routes>
              <Route path="/" element={<Pages.Home />} />
              <Route path="/bag" element={<Pages.Bag />} />
              <Route path="/history" element={<Pages.History />} />
              <Route path="/product/:id" element={<Pages.ProductPage />} />
              {/* Collections */}
              <Route path="/pants" element={<Pages.PantsPage />} />
              <Route path="/shirts" element={<Pages.ShirtsPage />} />
              <Route path="/shorts" element={<Pages.ShortsPage />} />
              <Route path="/hoodies" element={<Pages.HoodiesPage />} />
              {/*  */}
              <Route path="*" element={<Pages.NotFoundPage />} />
            </Routes>
          </AllClothesTypesContextProvider>
        </ClothesContextProvider>
      </BagContextProvider>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import Home from "./pages/Home/Home";
import Shirts from "./pages/Shirts/Shirts";
import Hoodies from "./pages/Hoodies/Hoodies";
import Pants from "./pages/Pants/Pants";
import Shorts from "./pages/Shorts/Shorts";
import Collection from "./pages/Collection/Collection";
import ClothesContextProvider from "./context/ClothesContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ClothesContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection/:name" element={<Collection />} />
            {/* <Route path="/collection/shirts" element={<Shirts />} />
            <Route path="/collection/hoodies" element={<Hoodies />} />
            <Route path="/collection/pants" element={<Pants />} />
            <Route path="/collection/shorts" element={<Shorts />} /> */}
          </Routes>
        </ClothesContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;

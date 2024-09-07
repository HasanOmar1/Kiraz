import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { BagContextProvider } from "./utils/Context";
import * as Pages from "./pages/index";
import SecondNavbar from "./components/SecondNavbar/SecondNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <BagContextProvider>
        <Navbar />
        <SecondNavbar />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={3}
        />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/bag" element={<Pages.Bag />} />
          <Route path="/history" element={<Pages.History />} />
          <Route path="/product/:id" element={<Pages.ProductPage />} />
          <Route
            path="/collection/:clothesType"
            element={<Pages.Collection />}
          />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
      </BagContextProvider>
    </>
  );
}

export default App;

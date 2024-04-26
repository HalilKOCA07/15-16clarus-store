import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Login />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Router;

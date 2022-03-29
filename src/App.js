import "./App.css";
import { Header } from "./components/Header.component/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductListing from "./pages/ProductListing";
import { SignUp } from "./pages/SignUp";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="e-commerce-app-container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:catergory" element={<ProductListing />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  </div>
);

export default App;

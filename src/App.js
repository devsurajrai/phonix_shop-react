import "./App.css";

import { Header } from "./components/Header.component/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductListing from "./pages/ProductListing";
import { SignUp } from "./pages/SignUp";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const App = () => (
  <div className="e-commerce-app-container">
    <Header />
    {/* <Login /> */}
    {/* <SignUp /> */}
    {/* <Home /> */}
    {/* <ProductListing /> */}
    {/* <Cart /> */}
    <Wishlist />
  </div>
);

export default App;

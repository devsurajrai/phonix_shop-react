import "./header.css";
import { Link } from "react-router-dom";
import { useCartWishlistContext } from "../../contexts/contextCartWishlist";
import { getCartWishlistItems } from "../../utils/cartWishlist/getCartWishlistItems";
export const Header = () => {
  const { cartWishlistState } = useCartWishlistContext();
  const cartItems = getCartWishlistItems(cartWishlistState, "cart");
  const wishlistItems = getCartWishlistItems(cartWishlistState, "wishlist");
  return (
    <header className="nav-header  nav-header--e-comm nav--e-comm-bg  w-p-full">
      <nav className="nav nav--e-comm  nav--e-comm-bg flex-r flex-s flex-sp-eve ">
        {/* <!-- Brand Name  --> */}
        <Link to="/" className=" brand-name--e-comm text-md m-lr-md ">
          PHOENIX<sub>SHOP</sub>
        </Link>

        {/* <!-- Search Field  --> */}
        <label className="nav-search flex-r br-md p-xs ">
          <img
            src="https://ui-phoenix.netlify.app/Assets/svg/navigation/search.svg"
            alt="search"
          />
          <input
            className="nav-input m-lr-md w-p-full h-p-full "
            type="text"
            placeholder="Search"
          />
        </label>
        {/* <!-- RHS Icons  --> */}
        <ul className="nav-menu__items flex-r flex-center">
          <li>
            <Link to="/login">
              <button className="button button--secondary login-btn">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/products" className="color-white text-sm">
              SHOP NOW
            </Link>
          </li>
          <li className="nav-icon position-r">
            <Link to="/wishlist">
              <img
                className="img-100 cursor-pr"
                src="https://ui-phoenix.netlify.app/Assets/svg/navigation/heart-hollow.svg"
                alt="wishlist"
              />
              <span className="badge icon-badge nav-icon-badge  position-a br-xl color-white">
                {wishlistItems.length}
              </span>
            </Link>
          </li>
          <li className="nav-icon position-r flex-r ">
            <Link to="/cart">
              <img
                className="img-100 p-r-xs cursor-pr"
                src="https://ui-phoenix.netlify.app/Assets/svg/navigation/cart.svg"
                alt="cart"
              />
              <span className="badge icon-badge nav-icon-badge  position-a br-xl color-white">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

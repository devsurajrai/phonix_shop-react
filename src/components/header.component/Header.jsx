import "./header.css";
export const Header = () => (
  <header className="nav-header  nav-header--e-comm nav--e-comm-bg  w-p-full">
    <nav className="nav nav--e-comm  nav--e-comm-bg flex-r flex-s flex-sp-eve ">
      {/* <!-- Brand Name  --> */}
      <a
        className=" brand-name--e-comm text-md m-lr-md "
        href="../../index.html"
      >
        PHOENIX<sub>SHOP</sub>
      </a>
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
          <button className="button button--secondary login-btn">
            <a href="./log-in.html">Login</a>
          </button>
        </li>
        <li>
          <a
            className="color-white text-sm"
            href="../product-listing/product-listing.html"
          >
            SHOP NOW{" "}
          </a>
        </li>
        <li className="nav-icon position-r">
          <a href="../wishlist/wishlist.html">
            <img
              className="img-100 cursor-pr"
              src="https://ui-phoenix.netlify.app/Assets/svg/navigation/heart-hollow.svg"
              alt="wishlist"
            />
            <span className="badge icon-badge nav-icon-badge  position-a br-xl color-white">
              0
            </span>
          </a>
        </li>
        <li className="nav-icon position-r flex-r ">
          <a href="../cart/cart.html">
            <img
              className="img-100 p-r-xs cursor-pr"
              src="https://ui-phoenix.netlify.app/Assets/svg/navigation/cart.svg"
              alt="cart"
            />
            <span className="badge icon-badge nav-icon-badge  position-a br-xl color-white">
              0
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

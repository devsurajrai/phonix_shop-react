import "./login.css";
const Login = () => (
  //    <!-- HEADER  -->
  <div>
    <header class="nav-header  nav-header--e-comm nav--e-comm-bg  w-p-full">
      <nav class="nav nav--e-comm  nav--e-comm-bg flex-r flex-s flex-sp-eve ">
        {/* <!-- Brand Name  --> */}
        <a class=" brand-name--e-comm text-md m-lr-md " href="../../index.html">
          PHOENIX<sub>SHOP</sub>
        </a>
        {/* <!-- Search Field  --> */}
        <label class="nav-search flex-r br-md p-xs ">
          <img
            src="https://ui-phoenix.netlify.app/Assets/svg/navigation/search.svg"
            alt="search"
          />
          <input
            class="nav-input m-lr-md w-p-full h-p-full "
            type="text"
            placeholder="Search"
          />
        </label>
        {/* <!-- RHS Icons  --> */}
        <ul class="nav-menu__items flex-r flex-center">
          <li>
            <button class="button button--secondary login-btn">
              <a href="./log-in.html">Login</a>
            </button>
          </li>
          <li>
            <a
              class="color-white text-sm"
              href="../product-listing/product-listing.html"
            >
              SHOP NOW{" "}
            </a>
          </li>
          <li class="nav-icon position-r">
            <a href="../wishlist/wishlist.html">
              <img
                class="img-100 cursor-pr"
                src="https://ui-phoenix.netlify.app/Assets/svg/navigation/heart-hollow.svg"
                alt="wishlist"
              />
              <span class="badge icon-badge nav-icon-badge  position-a br-xl color-white">
                0
              </span>
            </a>
          </li>
          <li class="nav-icon position-r flex-r ">
            <a href="../cart/cart.html">
              <img
                class="img-100 p-r-xs cursor-pr"
                src="https://ui-phoenix.netlify.app/Assets/svg/navigation/cart.svg"
                alt="cart"
              />
              <span class="badge icon-badge nav-icon-badge  position-a br-xl color-white">
                0
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    {/* <!-- MAIN---> */}

    <main>
      <form class="log-in-form p-xxl flex-c flex-center br-sm" action="submit">
        <h3>Login</h3>
        <label class="text-sm lh-md login-label" for="">
          Username*
          <input
            class="input-simple br-l m-b-md"
            type="text"
            placeholder="Enter Username"
            required=""
          />
        </label>

        <label class=" text-sm lh-md login-label" for="">
          Password*
          <input
            class="input-simple br-l m-b-s"
            type="password"
            placeholder="Enter Password"
            required=""
          />
        </label>

        <label class=" text-sm lh-md login-label flex-r flex-center" for="">
          <input class="input-checkbox m-r-s" type="checkbox" />{" "}
          <span class="text-sm m-r-xl">Keep me logged in</span>
          <a class="forget-pass" href="">
            Forget Your Password?
          </a>
        </label>

        <button class="button button--secondary log-in-btn m-tb-md">
          LOG IN
        </button>
        <button class="create-new-acc flex-r flex-center">
          <a class=" text-sm" href="../sign-up/sign-up.html">
            Create a new account
          </a>
          <span class="text-md p-l-xs"> > </span>
        </button>
      </form>
      {/* <!-- </div> --> */}
    </main>
  </div>
);

export default Login;

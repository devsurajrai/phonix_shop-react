import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterSortContextProvider } from "./contexts/contextSortFilter";
import { CartWishlistContextProvider } from "./contexts/contextCartWishlist.js";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartWishlistContextProvider>
        <FilterSortContextProvider>
          <App />
        </FilterSortContextProvider>
      </CartWishlistContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

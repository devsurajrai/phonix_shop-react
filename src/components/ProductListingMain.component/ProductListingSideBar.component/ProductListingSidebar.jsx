import React from "react";
import "./product-listing-sidebar.css";
import FilterByCategory from "./FilterByCategory.component/FilterByCategory";
import FilterByPrice from "./FilterByPrice.component/FilterByPrice";
import FilterByRating from "./FilterByRating.component/FilterByRating";
import SortByPrice from "./SortByPrice.component/SortByPrice";
import SortByAlphabet from "./SortByAlphabet.component/SortByAlphabet";
const ProductListingSidebar = () => {
  return (
    <aside className="product-list-sidebar p-lr-md ">
      <h4 className="flex-r flex-sb">
        Filter <span className="fw-l ">Clear</span>
      </h4>
      <FilterByCategory />
      <FilterByPrice />
      <FilterByRating />
      <SortByPrice />
      <SortByAlphabet />
    </aside>
  );
};

export default ProductListingSidebar;

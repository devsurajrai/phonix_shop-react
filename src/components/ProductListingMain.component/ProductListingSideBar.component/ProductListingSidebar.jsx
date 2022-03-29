import React from "react";
import "./product-listing-sidebar.css";
import FilterByCategory from "./FilterByCategory.component/FilterByCategory";
import FilterByPrice from "./FilterByPrice.component/FilterByPrice";
import FilterByRating from "./FilterByRating.component/FilterByRating";
import SortByPrice from "./SortByPrice.component/SortByPrice";
import FilterByDelivery from "./FilterByDelivery.component/FilterByDelivery";
import FilterByStock from "./FilterByStock.component/FilterByStock";
import { useFilterSortContext } from "../../../contexts/contextSortFilter";
import { useSearchParams } from "react-router-dom";

const ProductListingSidebar = () => {
  const { filterSortState, filterSortStateDispatch } = useFilterSortContext();
  const [getCategoryFromHomepage] = useSearchParams();
  const categoryFromHomepage = getCategoryFromHomepage.get("category");

  return (
    <aside className="product-list-sidebar p-lr-md ">
      <h4 className="flex-r flex-sb">
        Filter
        <span
          className="fw-l"
          onClick={() => filterSortStateDispatch({ type: "RESET" })}
        >
          Clear
        </span>
      </h4>
      <FilterByCategory
        filterSortState={filterSortState}
        filterSortStateDispatch={filterSortStateDispatch}
        categoryFromHomepage={categoryFromHomepage}
      />
      <FilterByPrice
        filterSortState={filterSortState}
        filterSortStateDispatch={filterSortStateDispatch}
      />
      <FilterByDelivery
        filterSortState={filterSortState}
        filterSortStateDispatch={filterSortStateDispatch}
      />
      <FilterByStock
        filterSortState={filterSortState}
        filterSortStateDispatch={filterSortStateDispatch}
      />
      <FilterByRating
        filterSortState={filterSortState}
        filterSortStateDispatch={filterSortStateDispatch}
      />
      <SortByPrice
        filterSortState={filterSortState}
        filterSortStateDispatch={filterSortStateDispatch}
      />
    </aside>
  );
};

export default ProductListingSidebar;

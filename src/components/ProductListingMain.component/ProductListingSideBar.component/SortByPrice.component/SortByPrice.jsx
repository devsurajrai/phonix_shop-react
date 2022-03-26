import React from "react";

const SortByPrice = ({ filterSortStateDispatch }) => {
  return (
    <div>
      <h4>Sort</h4>
      <label className="flex-r align-items-center">
        <input
          className="m-r-s"
          name="sort"
          type="radio"
          onChange={() =>
            filterSortStateDispatch({
              type: "SORT_BY_PRICE",
              value: "HIGH_TO_LOW",
            })
          }
        />
        <span className="text-sm">Price - High to Low</span>
      </label>
      <label className="flex-r align-items-center">
        <input
          className="m-r-s"
          name="sort"
          type="radio"
          onChange={() =>
            filterSortStateDispatch({
              type: "SORT_BY_PRICE",
              value: "LOW_TO_HIGH",
            })
          }
        />
        <span className="text-sm">Price - Low to High</span>
      </label>
    </div>
  );
};

export default SortByPrice;

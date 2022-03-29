import React from "react";

const FilterByStock = ({ filterSortState, filterSortStateDispatch }) => {
  return (
    <div>
      <h4>Stock</h4>
      <label className="flex-r align-items-center">
        <input
          className="m-r-s"
          name="rating"
          type="checkbox"
          onChange={() =>
            filterSortStateDispatch({
              type: "FILTER_BY_AVAILABILITY",
              value: !filterSortState.includeOutOfStock,
            })
          }
        />
        <span className="text-sm">Include Out Of Stock</span>
      </label>
    </div>
  );
};

export default FilterByStock;

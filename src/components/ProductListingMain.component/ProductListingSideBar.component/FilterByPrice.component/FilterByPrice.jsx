import React from "react";

const FilterByPrice = ({ filterSortState, filterSortStateDispatch }) => {
  return (
    <div>
      <h4>Price</h4>
      <label className="slider">
        <p className="flex-r flex-sb color-dark-grey text-sm">
          <span>50</span>
          <span>150</span>
          <span>200</span>
        </p>
        <input
          className="w-p-full"
          type="range"
          min="500"
          max="10000"
          value={filterSortState.price}
          onChange={(event) =>
            filterSortStateDispatch({
              type: "FILTER_BY_PRICE",
              value: event.target.value,
            })
          }
        />
      </label>
    </div>
  );
};

export default FilterByPrice;

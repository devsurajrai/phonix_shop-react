import React from "react";

const FilterByDelivery = ({ filterSortState, filterSortStateDispatch }) => {
  return (
    <div>
      <h4>Delivery</h4>
      <label className="flex-r align-items-center">
        <input
          className="m-r-s"
          name="rating"
          type="checkbox"
          onChange={() =>
            filterSortStateDispatch({
              type: "FILTER_BY_FAST_DELIVERY",
              value: !filterSortState.fastDelivery,
            })
          }
        />
        <span className="text-sm">Fast Delivery</span>
      </label>
    </div>
  );
};

export default FilterByDelivery;

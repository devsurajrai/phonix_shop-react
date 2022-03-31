import React from "react";

const FilterByDelivery = () => {
  return (
    <div>
      <h4>Delivery</h4>
      <label className="flex-r align-items-center">
        <input className="m-r-s" name="rating" type="checkbox" />
        <span className="text-sm">Fast Delivery</span>
      </label>
    </div>
  );
};

export default FilterByDelivery;

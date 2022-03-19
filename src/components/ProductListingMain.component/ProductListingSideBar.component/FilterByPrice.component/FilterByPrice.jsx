import React from "react";

const FilterByPrice = () => {
  return (
    <div>
      <h4>Price</h4>
      <label class="slider">
        <p class="flex-r flex-sb color-dark-grey text-sm">
          <span>50</span>
          <span>150</span>
          <span>200</span>
        </p>
        <input class="w-p-full" type="range" min="50" max="250" value="150" />
      </label>
    </div>
  );
};

export default FilterByPrice;

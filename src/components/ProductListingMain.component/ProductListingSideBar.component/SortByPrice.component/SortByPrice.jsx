import React from "react";

const SortByPrice = () => {
  const sortByPrice = ["Price - High to Low", "Price - Low to High"];
  return (
    <div>
      <h4>Sort</h4>
      {sortByPrice.map((item) => (
        <label class="flex-r align-items-center">
          <input class="m-r-s" name="price-sort" type="radio" />
          <span class="text-sm">{item}</span>
        </label>
      ))}
    </div>
  );
};

export default SortByPrice;

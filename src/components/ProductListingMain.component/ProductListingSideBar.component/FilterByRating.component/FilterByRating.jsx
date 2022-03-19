import React from "react";

const FilterByRating = () => {
  const filterByRating = [
    "4 Stars & Above",
    "3 Stars & Above",
    "2 Stars & Above",
    "1 Star & Above",
  ];
  return (
    <div>
      <h4>Ratings</h4>
      {filterByRating.map((item) => (
        <label class="flex-r align-items-center">
          <input class="m-r-s" name="rating" type="checkbox" />
          <span class="text-sm">{item}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterByRating;

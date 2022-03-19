import React from "react";

const FilterByCategory = () => {
  const categories = [
    { name: "Racket", imgURL: "" },
    { name: "Kitbag", imgURL: "" },
    { name: "Shoes", imgURL: "" },
    { name: "Apparel", imgURL: "" },
    { name: "Assesories", imgURL: "" },
  ];
  return (
    <div>
      <h4>Categories</h4>
      {categories.map((category) => (
        <label className="flex-r align-items-center" for="">
          <input className="m-r-s" type="checkbox" />
          <span className="text-sm">{category.name}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterByCategory;

import React from "react";

const FilterByCategory = ({
  filterSortState,
  filterSortStateDispatch,
  categoryFromHomepage,
}) => {
  const categoriesList = [
    {
      name: "Racket",
      dispatchType: "FILTER_BY_racket_CATEGORY",
      value: !filterSortState.categories.racket,
    },
    {
      name: "Kitbag",
      dispatchType: "FILTER_BY_KITBAG_CATEGORY",
      value: !filterSortState.categories.kitbag,
    },
    {
      name: "Shoes",
      dispatchType: "FILTER_BY_SHOES_CATEGORY",
      value: !filterSortState.categories.shoes,
    },
    {
      name: "Apparel",
      dispatchType: "FILTER_BY_APPAREL_CATEGORY",
      value: !filterSortState.categories.apparel,
    },
    {
      name: "Assessories",
      dispatchType: "FILTER_BY_ASSESSORIES_CATEGORY",
      value: !filterSortState.categories.assessories,
    },
  ];
  return (
    <div>
      <h4>Categories</h4>
      {categoriesList.map((category) => (
        <label className="flex-r align-items-center" for="">
          <input
            className="m-r-s"
            type="checkbox"
            checked={
              categoryFromHomepage === category.name.toLocaleLowerCase() ||
              filterSortState.categories[category.name.toLocaleLowerCase()]
                ? true
                : false
            }
            onChange={() =>
              filterSortStateDispatch({
                type: category.dispatchType,
                value: category.value,
              })
            }
          />
          <span className="text-sm">{category.name}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterByCategory;

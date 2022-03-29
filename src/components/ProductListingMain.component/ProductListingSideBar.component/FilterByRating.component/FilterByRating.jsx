import React from "react";

const FilterByRating = ({ filterSortState, filterSortStateDispatch }) => {
  let category = [
    {
      title: "4 Stars & Above",
      dispatchType: "FILTER_BY_FOUR_AND_ABOVE_RATING",
      value: !filterSortState.rating.fourAndAbove,
    },
    {
      title: "3 Stars & Above",
      dispatchType: "FILTER_BY_THREE_AND_ABOVE_RATING",
      value: !filterSortState.rating.threeAndAbove,
    },
    {
      title: "2 Stars & Above",
      dispatchType: "FILTER_BY_TWO_AND_ABOVE_RATING",
      value: !filterSortState.rating.twoAndAbove,
    },
    {
      title: "1 Stars & Above",
      dispatchType: "FILTER_BY_ONE_AND_ABOVE_RATING",
      value: !filterSortState.rating.oneAndAbove,
    },
  ];
  return (
    <div>
      <h4>Ratings</h4>
      {category.map((item) => {
        return (
          <label className="flex-r align-items-center">
            <input
              className="m-r-s"
              name="rating"
              type="checkbox"
              onChange={() =>
                filterSortStateDispatch({
                  type: item.dispatchType,
                  value: item.value,
                })
              }
            />
            <span className="text-sm">{item.title}</span>
          </label>
        );
      })}
    </div>
  );
};

export default FilterByRating;

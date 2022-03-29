export const filterByRating = (productData, filterSortState) => {
  let filteredData = [];

  if (
    !filterSortState.rating.oneAndAbove &&
    !filterSortState.rating.twoAndAbove &&
    !filterSortState.rating.threeAndAbove &&
    !filterSortState.rating.fourAndAbove
  ) {
    return productData;
  } else {
    if (filterSortState.rating.oneAndAbove) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.ratings >= 1 && product.ratings < 2
        ),
      ];
    }
    if (filterSortState.rating.twoAndAbove) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.ratings >= 2 && product.ratings < 3
        ),
      ];
    }
    if (filterSortState.rating.threeAndAbove) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.ratings >= 3 && product.ratings < 4
        ),
      ];
    }
    if (filterSortState.rating.fourAndAbove) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.ratings >= 4 && product.ratings <= 5
        ),
      ];
    }
    return filteredData;
  }
};

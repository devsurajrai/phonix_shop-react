export const filterByCategory = (productData, filterSortState) => {
  let filteredData = [];

  if (
    !filterSortState.categories.racket &&
    !filterSortState.categories.kitbag &&
    !filterSortState.categories.shoes &&
    !filterSortState.categories.apparel &&
    !filterSortState.categories.assessories
  ) {
    return productData;
  } else {
    if (filterSortState.categories.assessories) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.itemDetails.category === "assessories"
        ),
      ];
    }
    if (filterSortState.categories.apparel) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.itemDetails.category === "apparel"
        ),
      ];
    }
    if (filterSortState.categories.shoes) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.itemDetails.category === "shoes"
        ),
      ];
    }
    if (filterSortState.categories.kitbag) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.itemDetails.category === "kitbag"
        ),
      ];
    }
    if (filterSortState.categories.racket) {
      filteredData = [
        ...filteredData,
        ...[...productData].filter(
          (product) => product.itemDetails.category === "racket"
        ),
      ];
    }

    return filteredData;
  }
};

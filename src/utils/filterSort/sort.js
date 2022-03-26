export const sort = (productData, filterSortState) => {
  switch (filterSortState.sort) {
    case "HIGH_TO_LOW":
      return [...productData].sort(
        (a, b) => b.itemDetails.price - a.itemDetails.price
      );
    case "LOW_TO_HIGH":
      return [...productData].sort(
        (a, b) => a.itemDetails.price - b.itemDetails.price
      );
    default:
      return productData;
  }
};

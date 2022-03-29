export const filterByAvailability = (productData, filterSortState) => {
  if (!filterSortState.includeOutOfStock) {
    return [...productData].filter((product) => product.itemStatus.inStock);
  }
  return productData;
};

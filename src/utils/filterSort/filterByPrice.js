export const filterByPrice = (productData, filterSortState) =>
  [...productData].filter(
    (product) => product.itemDetails.price <= filterSortState.price
  );

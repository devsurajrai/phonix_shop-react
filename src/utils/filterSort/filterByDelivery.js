export const filterByDelivery = (productData, filterSortState) => {
  if (filterSortState.fastDelivery) {
    return [...productData].filter(
      (productData) => productData.itemStatus.fastDelivery
    );
  }
  return productData;
};

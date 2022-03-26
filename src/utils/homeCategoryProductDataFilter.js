export const homeCategoryProductDataFilter = (
  finalProductData,
  categoryFromHomepage
) =>
  categoryFromHomepage
    ? finalProductData.filter(
        (item) => item.itemDetails.category === categoryFromHomepage
      )
    : finalProductData;

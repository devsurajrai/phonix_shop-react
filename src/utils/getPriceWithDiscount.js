export const getPriceWithDiscount = (
  priceWithoutDiscount,
  discountOnProduct
) => {
  return (
    priceWithoutDiscount - (discountOnProduct / 100) * priceWithoutDiscount
  );
};

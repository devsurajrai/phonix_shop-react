export const getPriceDetails = (userCartWishlistData) => {
  const priceDetailsUpdated = {
    price: 0,
    discount: 0,
    deliveryCharge: 0,
    totalAmount: 0,
  };
  userCartWishlistData.map((item) => {
    priceDetailsUpdated.price += Math.floor(
      item.quantity * item.item.itemDetails.price
    );
    priceDetailsUpdated.discount += Math.floor(
      item.quantity *
        ((item.item.itemDetails.discountInPercent / 100) *
          item.item.itemDetails.price)
    );
    priceDetailsUpdated.deliveryCharge = 60;
    priceDetailsUpdated.totalAmount += Math.floor(
      priceDetailsUpdated.price -
        priceDetailsUpdated.discount -
        priceDetailsUpdated.deliveryCharge
    );
  });
  return priceDetailsUpdated;
};

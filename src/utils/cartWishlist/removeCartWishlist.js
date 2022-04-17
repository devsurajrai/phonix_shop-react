export const removeCartWishlist = (
  cartWishlistState,
  productDispatchValue,
  removeCartOrWishlist
) => {
  let removedCartWishlist = [];
  if (removeCartOrWishlist === "REMOVE_FROM_CART") {
    removedCartWishlist = cartWishlistState.map((eachItem) => {
      if (eachItem.item._id === productDispatchValue.item._id) {
        return { ...eachItem, inCart: false };
      } else {
        return eachItem;
      }
    });
  }
  if (removeCartOrWishlist === "REMOVE_FROM_WISHLIST") {
    removedCartWishlist = cartWishlistState.map((eachItem) => {
      if (eachItem.item._id === productDispatchValue._id) {
        return { ...eachItem, inWishlist: false };
      } else {
        return eachItem;
      }
    });
  }
  removedCartWishlist = [...removedCartWishlist].filter(
    (item) => item.inCart || item.inWishlist
  );
  return removedCartWishlist;
};

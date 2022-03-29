export const moveWishlist = (cartWishlistState, productDispatchValue) => {
  return cartWishlistState.map((eachItem) => {
    if (eachItem.item._id === productDispatchValue.item._id) {
      return { ...eachItem, inCart: false, inWishlist: true };
    }
  });
};

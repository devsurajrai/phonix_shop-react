export const increaseDecreaseQty = (
  productIncreseQty,
  cartItems,
  incrementOrDecrement
) => {
  if (incrementOrDecrement === "INCREMENT") {
    return cartItems.map((eachItem) => {
      if (productIncreseQty.item._id === eachItem.item._id) {
        return { ...eachItem, quantity: eachItem.quantity + 1 };
      } else {
        return eachItem;
      }
    });
  }
  return cartItems.map((eachItem) => {
    if (productIncreseQty.item._id === eachItem.item._id) {
      if (eachItem.quantity > 0) {
        return { ...eachItem, quantity: eachItem.quantity - 1 };
      }
      return eachItem;
    } else {
      return eachItem;
    }
  });
};

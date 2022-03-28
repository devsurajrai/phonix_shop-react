import { useReducer } from "react";
import { addCartWishlistLocalStorage } from "../utils/cartWishlist/addCartWishlistLocalStorage";
import { checkCartWishlistItem } from "../utils/cartWishlist/checkCartWishlistItem";
import { increaseDecreaseQty } from "../utils/cartWishlist/increseDecreaseQty";
import { moveWishlist } from "../utils/cartWishlist/moveWishlist";
import { removeCartWishlist } from "../utils/cartWishlist/removeCartWishlist";

const localStorageWishlistCartData = JSON.parse(
  localStorage.getItem("userCartWishlistData")
);
const INITIAL_CART_WISHLIST_DATA = localStorageWishlistCartData
  ? localStorageWishlistCartData
  : [];

const reducer = (cartWishlistState, action) => {
  const value = action.value;
  const quantity = action.quantity;

  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return checkCartWishlistItem(
        cartWishlistState,
        value,
        "WISHLIST",
        quantity
      );
    case "ADD_TO_CART":
      return checkCartWishlistItem(cartWishlistState, value, "CART", quantity);
    case "REMOVE_FROM_CART":
      return removeCartWishlist(cartWishlistState, value, "REMOVE_FROM_CART");
    case "REMOVE_FROM_WISHLIST":
      return removeCartWishlist(
        cartWishlistState,
        value,
        "REMOVE_FROM_WISHLIST"
      );
    case "MOVE_TO_WISHLIST":
      return moveWishlist(cartWishlistState, value);
    case "INCREMENT_PRODUCT_QTY":
      return increaseDecreaseQty(value, cartWishlistState, "INCREMENT");
    case "DECREMENT_PRODUCT_QTY":
      return increaseDecreaseQty(value, cartWishlistState, "DECREMENT");
    default:
      return cartWishlistState;
  }
};

export const useCartWishlistData = () => {
  const [cartWishlistState, cartWishlistStateDispatch] = useReducer(
    reducer,
    INITIAL_CART_WISHLIST_DATA
  );

  addCartWishlistLocalStorage(cartWishlistState, INITIAL_CART_WISHLIST_DATA);

  return { cartWishlistState, cartWishlistStateDispatch };
};

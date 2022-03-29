import { useCartWishlistData } from "../customHooks/useCartWishlistData";
import { createContext, useContext } from "react";
const cartWishlistContext = createContext({});

const useCartWishlistContext = () => useContext(cartWishlistContext);

const CartWishlistContextProvider = ({ children }) => {
  const { cartWishlistState, cartWishlistStateDispatch } =
    useCartWishlistData();
  return (
    <cartWishlistContext.Provider
      value={{ cartWishlistState, cartWishlistStateDispatch }}
    >
      {children}
    </cartWishlistContext.Provider>
  );
};

export { useCartWishlistContext, CartWishlistContextProvider };

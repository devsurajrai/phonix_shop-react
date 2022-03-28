import "./cart-main.css";

import ProductsPriceSummary from "./ProductsPriceSummary.component/ProductsPriceSummary";
import CartProductCard from "./CartProductCard.component/CartProductCard";
import { useCartWishlistContext } from "../../contexts/contextCartWishlist";
import { getCartWishlistLocalStorage } from "../../utils/cartWishlist/getCartWishlistLocalStorage";
import { getCartWishlistItems } from "../../utils/cartWishlist/getCartWishlistItems";

const CartMain = () => {
  const { cartWishlistState } = useCartWishlistContext();
  const userCartWishlistData = getCartWishlistLocalStorage(cartWishlistState);

  const cartItems = getCartWishlistItems(userCartWishlistData, "cart");

  return (
    <main className="cart-main ">
      <h2 class="flex-r flex-center p-tb-md"> My Cart ({cartItems.length})</h2>
      {cartItems.length !== 0 ? (
        <div class="cart-and-price">
          <section class="cart-items">
            {cartItems.map((product) => (
              <CartProductCard product={product} cartItems={cartItems} />
            ))}
          </section>
          <div class="cart-items-price-details">
            <ProductsPriceSummary userCartData={cartItems} />
          </div>
        </div>
      ) : (
        <div className="empty-cart text-l ">No Items In The Cart</div>
      )}
    </main>
  );
};

export default CartMain;

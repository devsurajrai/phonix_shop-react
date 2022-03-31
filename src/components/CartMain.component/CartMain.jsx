import "./cart-main.css";
import ProductCard from "../ProductCard.component/ProductCard";
import ProductsPriceSummary from "./ProductsPriceSummary.component/ProductsPriceSummary";
import CartProductCard from "./CartProductCard.component/CartProductCard";

const CartMain = () => {
  return (
    <main className="cart-main">
      <h2 class="flex-r flex-center p-tb-md"> My Cart (2)</h2>
      <div class="cart-and-price">
        <section class="cart-items">
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        </section>
        <div class="cart-items-price-details">
          <ProductsPriceSummary />
        </div>
      </div>
    </main>
  );
};

export default CartMain;

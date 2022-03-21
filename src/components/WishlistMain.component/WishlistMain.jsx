import ProductCard from "../ProductCard.component/ProductCard";
import "./wishlist-main.css";
const WishlistMain = () => {
  return (
    <main className="wishlist-main">
      <h2 className="flex-r flex-center p-tb-md"> My Wishlist</h2>
      <div className="wishlist-items m-b-xxl">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default WishlistMain;

import { useCartWishlistContext } from "../../contexts/contextCartWishlist";
import { getCartWishlistLocalStorage } from "../../utils/cartWishlist/getCartWishlistLocalStorage";
import ProductCard from "../ProductCard.component/ProductCard";
import { addCartWishList } from "../../utils/cartWishlist/addCartWishlist";
import "./wishlist-main.css";
import { getCartWishlistItems } from "../../utils/cartWishlist/getCartWishlistItems";
const WishlistMain = () => {
  const { cartWishlistState } = useCartWishlistContext();
  const userCartWishlistData = getCartWishlistLocalStorage(cartWishlistState);
  const wishListItems = getCartWishlistItems(userCartWishlistData, "wishlist");

  return (
    <main className="wishlist-main p-l-l p-r-l ">
      <h2 className="flex-r flex-center p-tb-md">
        My Wishlist ({wishListItems.length})
      </h2>
      {wishListItems.length !== 0 ? (
        <div className="wishlist-items m-b-xxl">
          {wishListItems.map((product) => {
            let productCardData = {
              brandName: product.item.itemDetails.brand,
              productName: product.item.itemDetails.name,
              priceWithoutDiscount: product.item.itemDetails.price,
              discountOnProduct: product.item.itemDetails.discountInPercent,
              productIMG: product.item.itemDetails.imageURL,
              productRating: product.item.ratings,
              productDelivery: product.item.itemStatus.fastDelivery,
              outOfStock: !product.item.itemStatus.inStock,
            };
            return (
              <ProductCard
                productCardData={productCardData}
                product={product.item}
                addCartWishList={addCartWishList}
                wishlist="wishlist"
              />
            );
          })}
        </div>
      ) : (
        <div className="flex-r flex-center text-l">Your Wishlist is Empty</div>
      )}
    </main>
  );
};

export default WishlistMain;

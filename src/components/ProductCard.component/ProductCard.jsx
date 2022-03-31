import { useCartWishlistContext } from "../../contexts/contextCartWishlist";
import { getPriceWithDiscount } from "../../utils/getPriceWithDiscount";
import "./product-card.css";

const ProductCard = ({
  productCardData,
  product,
  addCartWishList,
  wishlist,
}) => {
  const { cartWishlistStateDispatch } = useCartWishlistContext();
  const {
    brandName,
    productName,
    priceWithoutDiscount,
    discountOnProduct,
    productIMG,
    productRating,
    productDelivery,
    outOfStock,
  } = productCardData;
  const priceWithDiscount = getPriceWithDiscount(
    priceWithoutDiscount,
    discountOnProduct
  );

  return (
    <div className="card card--shadow position-r  text-sm txt-algn br-md p-md">
      {outOfStock && (
        <div class="card__text-overlay position-a flex-r flex-center br-md abc">
          <h2>Out of Stock</h2>
        </div>
      )}
      <div
        className={`${
          wishlist === "wishlist" && "heart-badge-active"
        } badge card-badge  position-a br-md color-white`}
        onClick={() =>
          addCartWishList(product, "WISHLIST", cartWishlistStateDispatch)
        }
      >
        <i className="fas fa-heart"></i>
      </div>
      <div className="card__img">
        <img className="img-100" src={productIMG} alt="badminton-racket" />
      </div>
      <div className="card__body-footer">
        <div className="card__body">
          <h4>{brandName}</h4>
          <p className="card__body-desc">{productName}</p>
          <div className="flex-r flex-center">
            <h3 className="card__body-amt flex-r flex-sb">
              ₹ {Math.floor(priceWithDiscount)}{" "}
            </h3>
            <span className="text-sm m-l-s color-grey">
              <strike>₹ {priceWithoutDiscount}</strike>
            </span>
          </div>
        </div>
        <span className="text-sm fw-b color-grey ">
          {discountOnProduct}% Off
        </span>
      </div>
      <div class=" delivery-rating flex flex-r ">
        <div className="rating m-b-s">
          <span class="m-xs">
            {productDelivery ? "Fast Devlivery" : "Normal Delivery"}
          </span>
        </div>

        <div className="rating m-b-s">
          <i className="fas fa-star m-xs"></i>
          <span>{productRating}</span>
        </div>
      </div>

      <button
        className="button button--primary no-br card__footer-btn m-b-s"
        onClick={() =>
          addCartWishList(product, "CART", cartWishlistStateDispatch)
        }
      >
        Add to Cart
      </button>
      {wishlist === "wishlist" && (
        <button
          className="button button--primary no-br card__footer-btn "
          onClick={() =>
            cartWishlistStateDispatch({
              type: "REMOVE_FROM_WISHLIST",
              value: product,
            })
          }
        >
          Remove from wishlist
        </button>
      )}
    </div>
  );
};

export default ProductCard;

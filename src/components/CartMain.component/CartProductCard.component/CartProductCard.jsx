import { useCartWishlistContext } from "../../../contexts/contextCartWishlist";
import { getPriceWithDiscount } from "../../../utils/getPriceWithDiscount";

import "./cart-product-component.css";
const CartProductCard = ({ product }) => {
  const productIMG = product.item.itemDetails.imageURL;
  const productName = product.item.itemDetails.name;
  const priceWithoutDiscount = Math.floor(product.item.itemDetails.price);
  const discountOnProduct = product.item.itemDetails.discountInPercent;
  const priceWithDiscount = getPriceWithDiscount(
    priceWithoutDiscount,
    discountOnProduct
  );
  const productQuantity = product.quantity;
  const { cartWishlistStateDispatch } = useCartWishlistContext();
  return (
    <div className="card card-horizontal position-r  flex-r text-sm  p-l br-sm">
      <div className="card-hor-img">
        <img className="img-100" src={productIMG} alt="badminton-racket" />
      </div>
      <div className="hor-card__body-footer flex-c flex-sb m-l-md">
        <div className="card__body flex-c">
          <div>
            <p className="card__body-desc">{productName}</p>
            <div>
              <div className="flex-r align-items-center">
                <h3 className="card__body-amt flex-r flex-sb">
                  ₹ {priceWithDiscount}
                </h3>
                <span className="text-sm m-l-s color-grey">
                  <strike>₹ {priceWithoutDiscount}</strike>
                </span>
              </div>
            </div>
            <span className="text-sm fw-b color-grey ">
              {discountOnProduct}% Off
            </span>
            <div className="flex-r align-items-center m-b-xs">
              <span>Quantity:</span>{" "}
              <button
                className="qty-btn"
                onClick={() =>
                  cartWishlistStateDispatch({
                    type: "DECREMENT_PRODUCT_QTY",
                    value: product,
                  })
                }
              >
                -
              </button>
              <input
                className="qty-input"
                type="number"
                value={productQuantity}
                readonly
              />
              <button
                className="qty-btn"
                onClick={() =>
                  cartWishlistStateDispatch({
                    type: "INCREMENT_PRODUCT_QTY",
                    value: product,
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          className="button button--primary btn-sm  card__footer-btn m-b-s"
          onClick={() =>
            cartWishlistStateDispatch({
              type: "REMOVE_FROM_CART",
              value: product,
            })
          }
        >
          Remove from Cart
        </button>
        <button
          className="button outline-button-primary btn-sm  card__footer-btn "
          onClick={() =>
            cartWishlistStateDispatch({
              type: "MOVE_TO_WISHLIST",
              value: product,
            })
          }
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;

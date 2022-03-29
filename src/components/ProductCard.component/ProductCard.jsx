import { getPriceWithDiscount } from "../../utils/getPriceWithDiscount";
import "./product-card.css";

const ProductCard = ({ product }) => {
  const brandName = product.itemDetails.brand;
  const productName = product.itemDetails.name;
  const priceWithoutDiscount = product.itemDetails.price;
  const discountOnProduct = product.itemDetails.discountInPercent;
  const priceWithDiscount = getPriceWithDiscount(
    priceWithoutDiscount,
    discountOnProduct
  );
  const productIMG = product.itemDetails.imageURL;
  const productRating = product.ratings;
  const productDelivery = product.itemStatus.fastDelivery;
  const outOfStock = !product.itemStatus.inStock;

  return (
    <div className="card card--shadow position-r  text-sm txt-algn br-md">
      {outOfStock && (
        <div class="card__text-overlay position-a flex-r flex-center br-md ">
          <h2>Out of Stock</h2>
        </div>
      )}
      <div className="badge card-badge  position-a br-md color-white">
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

      <button className="button button--primary no-br card__footer-btn  ">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

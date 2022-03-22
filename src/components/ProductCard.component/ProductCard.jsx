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
  return (
    <div className="card card--shadow position-r  text-sm txt-algn br-md">
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
              ₹ {priceWithDiscount}{" "}
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
      <div className="rating m-b-s">
        <i className="fas fa-star m-xs"></i>
        <span>{productRating}</span>
      </div>
      <button className="button button--primary no-br card__footer-btn  ">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

import React from "react";

const ProductCard = () => {
  return (
    <div className="card card--shadow position-r  text-sm txt-algn">
      <div className="badge card-badge heart-badge-active position-a br-md color-white">
        <i className="fas fa-heart"></i>
      </div>
      <div className="card__img">
        <img
          className="img-100"
          src="https://ui-phoenix.netlify.app/Assets/images/badminton.jpg"
          alt="badminton-racket"
        />
      </div>
      <div className="card__body-footer">
        <div className="card__body">
          <p className="card__body-desc">Yonex Astrox 88D Racket</p>
          <h3 className="card__body-amt">₹ 1000</h3>
        </div>
        <button className="button button--primary no-br card__footer-btn m-t-md ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

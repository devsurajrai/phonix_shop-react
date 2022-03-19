import React from "react";

const ProductCard = () => {
  return (
    <div class="card card--shadow position-r  text-sm txt-algn">
      <div class="badge card-badge heart-badge-active position-a br-md color-white">
        <i class="fas fa-heart"></i>
      </div>
      <div class="card__img">
        <img
          class="img-100"
          src="https://ui-phoenix.netlify.app/Assets/images/badminton.jpg"
          alt="badminton-racket"
        />
      </div>
      <div class="card__body-footer">
        <div class="card__body">
          <p class="card__body-desc">Yonex Astrox 88D Racket</p>
          <h3 class="card__body-amt">₹ 1000</h3>
        </div>
        <button class="button button--primary no-br card__footer-btn m-t-md ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

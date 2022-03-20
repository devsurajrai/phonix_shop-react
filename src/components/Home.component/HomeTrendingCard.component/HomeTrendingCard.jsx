import React from "react";
import "./home-trending-card.css";
const HomeTrendingCard = () => {
  return (
    <div className="latest-item-card card card-horizontal position-r  flex-r text-sm p-s br-sm">
      <div className="card-hor-img">
        <img
          className="img-100"
          src="https://ui-phoenix.netlify.app/Assets/images/badminton.jpg"
          alt="badminton-racket"
        />
      </div>
      <div class="hor-card__body-footer flex-c flex-sb">
        <div class="card__body ">
          <p class="text-md">NEW ARRIVALS</p>
          <div>
            <h3>Graphite Collection</h3>
            <p>
              Get the power of strokes. Chekout the latest build for excelling
              the game.
            </p>
          </div>
        </div>
        <button class="button button--primary card__footer-btn ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default HomeTrendingCard;

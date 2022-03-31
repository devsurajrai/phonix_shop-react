import "./cart-product-component.css";
const CartProductCard = () => {
  return (
    <div class="card card-horizontal position-r  flex-r text-sm  p-l br-sm">
      <div class="card-hor-img">
        <img
          class="img-100"
          src="https://ui-phoenix.netlify.app/Assets/images/badminton.jpg"
          alt="badminton-racket"
        />
      </div>
      <div class="hor-card__body-footer flex-c flex-sb">
        <div class="card__body flex-c">
          <div>
            <p class="card__body-desc">Yonex Astrox 88D Racket</p>
            <div>
              <div class="flex-r align-items-center">
                <h3 class="card__body-amt flex-r flex-sb">₹ 1000 </h3>
                <span class="text-sm m-l-s color-grey">
                  <strike>₹ 2000</strike>
                </span>
              </div>
            </div>
            <span class="text-sm fw-b color-grey ">50% Off</span>
            <div class="flex-r align-items-center m-b-xs">
              <span>Quantity:</span> <button class="qty-btn">-</button>
              <input class="qty-input" type="number" value="1" readonly />
              <button class="qty-btn">+</button>
            </div>
          </div>
        </div>
        <button class="button button--primary btn-sm  card__footer-btn m-b-s">
          Remove from Cart
        </button>
        <button class="button outline-button-primary btn-sm  card__footer-btn ">
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;

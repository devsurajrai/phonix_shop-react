import { getPriceDetails } from "../../../utils/getInCartPriceDetails";
const ProductsPriceSummary = ({ userCartData }) => {
  const productPriceDetails = getPriceDetails(userCartData);

  return (
    <div>
      <div>
        <h4>PRICE DETAILS</h4>
        <hr />
        <div class="flex-r flex-sb text-sm">
          <span>
            Price <span>({userCartData.length} Items)</span>
          </span>
          <span>₹ {productPriceDetails.price}</span>
        </div>
        <div class="flex-r flex-sb text-sm">
          <span>Discount</span>
          <span>- ₹ {productPriceDetails.discount}</span>
        </div>
        <div class="flex-r flex-sb text-sm">
          <span>Delivery Charges</span>
          <span>₹ {productPriceDetails.deliveryCharge}</span>
        </div>
        <hr />
        <div class="flex-r flex-sb text-sm">
          <span>TOTAL AMOUNT</span>
          <span>₹ {productPriceDetails.totalAmount}</span>
        </div>
        <hr />
        <p class="text-sm">
          You will save ₹ {productPriceDetails.discount} on this order
        </p>
        <button class="button button--primary w-p-full">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default ProductsPriceSummary;

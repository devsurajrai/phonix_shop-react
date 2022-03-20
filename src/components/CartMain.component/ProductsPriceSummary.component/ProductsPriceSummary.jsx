const ProductsPriceSummary = () => {
  return (
    <div>
      <div>
        <h4>PRICE DETAILS</h4>
        <hr />
        <div class="flex-r flex-sb text-sm">
          <span>
            Price <span>(2 Items)</span>
          </span>
          <span>₹ 2000</span>
        </div>
        <div class="flex-r flex-sb text-sm">
          <span>Discount</span>
          <span>- ₹ 500</span>
        </div>
        <div class="flex-r flex-sb text-sm">
          <span>Delivery Charges</span>
          <span>₹ 60</span>
        </div>
        <hr />
        <div class="flex-r flex-sb text-sm">
          <span>TOTAL AMOUNT</span>
          <span>₹ 1560</span>
        </div>
        <hr />
        <p class="text-sm">You will save ₹ 500 on this order</p>
        <button class="button button--primary w-p-full">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default ProductsPriceSummary;

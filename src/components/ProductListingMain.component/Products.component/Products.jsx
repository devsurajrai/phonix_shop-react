import React from "react";
import "./products.css";
import ProductCard from "../../ProductCard.component/ProductCard";

const Products = () => {
  return (
    <div className="products-list-items p-md">
      <h4>
        Showing All Products
        <span class="text-sm m-l-xs color-dark-grey">
          ( Showing 30 Products )
        </span>
      </h4>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;

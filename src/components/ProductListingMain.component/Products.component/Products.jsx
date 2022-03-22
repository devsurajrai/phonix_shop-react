import React from "react";
import "./products.css";
import ProductCard from "../../ProductCard.component/ProductCard";

const Products = ({ backendProductData }) => {
  const products = backendProductData && backendProductData.data.products;
  return (
    <div className="products-list-items p-md">
      <h4>
        Showing All Products
        <span class="text-sm m-l-xs color-dark-grey">
          ( Showing {products.length} Products )
        </span>
      </h4>
      {backendProductData &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Products;

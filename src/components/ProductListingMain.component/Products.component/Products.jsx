import React from "react";
import "./products.css";
import ProductCard from "../../ProductCard.component/ProductCard";
import { useFilterSortContext } from "../../../contexts/contextSortFilter";
import { getFilteredSortedProdData } from "../../../utils/filterSort/filterSortCompose";
import { useSearchParams } from "react-router-dom";
import { homeCategoryProductDataFilter } from "../../../utils/homeCategoryProductDataFilter";

const Products = ({ backendProductData }) => {
  const { filterSortState } = useFilterSortContext();
  const products = backendProductData && backendProductData.data.products;
  let finalProductData = getFilteredSortedProdData(products, filterSortState);
  const [getCategoryFromHomepage] = useSearchParams();
  const categoryFromHomepage = getCategoryFromHomepage.get("category");

  //filtering the data if the user selects any category from the homepage
  console.log(finalProductData, categoryFromHomepage);

  finalProductData = homeCategoryProductDataFilter(
    finalProductData,
    categoryFromHomepage
  );

  console.log(finalProductData);
  return (
    <div className="products-list-items p-md">
      <h4>
        Showing All Products
        <span class="text-sm m-l-xs color-dark-grey">
          ( Showing {finalProductData.length} Products )
        </span>
      </h4>
      {finalProductData &&
        finalProductData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Products;

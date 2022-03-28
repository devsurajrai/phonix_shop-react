import React from "react";
import "./products.css";
import ProductCard from "../../ProductCard.component/ProductCard";
import { useFilterSortContext } from "../../../contexts/contextSortFilter";
import { getFilteredSortedProdData } from "../../../utils/filterSort/filterSortCompose";
import { useSearchParams } from "react-router-dom";
import { homeCategoryProductDataFilter } from "../../../utils/homeCategoryProductDataFilter";
import { addCartWishList } from "../../../utils/cartWishlist/addCartWishlist";

const Products = ({ backendProductData }) => {
  const { filterSortState } = useFilterSortContext();
  const products = backendProductData && backendProductData.data.products;
  let finalProductData = getFilteredSortedProdData(products, filterSortState);
  const [getCategoryFromHomepage] = useSearchParams();
  const categoryFromHomepage = getCategoryFromHomepage.get("category");

  //filtering the data if the user selects any category from the homepage

  finalProductData = homeCategoryProductDataFilter(
    finalProductData,
    categoryFromHomepage
  );

  return (
    <div className="products-list-items p-md">
      <h4>
        Showing All Products
        <span class="text-sm m-l-xs color-dark-grey">
          ( Showing {finalProductData.length} Products )
        </span>
      </h4>
      {finalProductData &&
        finalProductData.map((product) => {
          let productCardData = {
            brandName: product.itemDetails.brand,
            productName: product.itemDetails.name,
            priceWithoutDiscount: product.itemDetails.price,
            discountOnProduct: product.itemDetails.discountInPercent,
            productIMG: product.itemDetails.imageURL,
            productRating: product.ratings,
            productDelivery: product.itemStatus.fastDelivery,
            outOfStock: !product.itemStatus.inStock,
          };
          return (
            <ProductCard
              key={product.id}
              productCardData={productCardData}
              product={product}
              addCartWishList={addCartWishList}
            />
          );
        })}
    </div>
  );
};

export default Products;

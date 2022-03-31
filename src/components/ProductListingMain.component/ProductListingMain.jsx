import "./product-listing-main.css";
import ProductListingSidebar from "./ProductListingSideBar.component/ProductListingSidebar";
import Products from "./Products.component/Products";

const ProductListingMain = () => {
  return (
    <main className="product-listing-main">
      <ProductListingSidebar />
      <Products />
    </main>
  );
};

export default ProductListingMain;

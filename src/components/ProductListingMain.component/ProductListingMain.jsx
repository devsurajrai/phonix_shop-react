import "./product-listing-main.css";
import ProductListingSidebar from "./ProductListingSideBar.component/ProductListingSidebar";
import Products from "./Products.component/Products";
import { useFetchedData } from "../../customHooks/useFetchedData";

const ProductListingMain = () => {
  const { backendProductData } = useFetchedData();

  return (
    <main className="product-listing-main">
      <ProductListingSidebar />
      <Products backendProductData={backendProductData} />
    </main>
  );
};

export default ProductListingMain;

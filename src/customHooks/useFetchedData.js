import { useState, useEffect } from "react";
import axios from "axios";

const useFetchedData = () => {
  const [backendProductData, setBackendProductData] = useState("");
  const [backendCategoryData, setBackendCategoryData] = useState("");

  useEffect(() => {
    (async () => {
      const productData = await axios.get("api/products");
      setBackendProductData(productData);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const categoryData = await axios.get("api/categories");
      setBackendCategoryData(categoryData);
    })();
  }, []);

  return { backendProductData, backendCategoryData };
};

export { useFetchedData };

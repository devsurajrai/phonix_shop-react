import { useState, useEffect } from "react";
import axios from "axios";

const useFetchedData = () => {
  const [backendProductData, setBackendProductData] = useState("");

  useEffect(() => {
    (async () => {
      const productData = await axios.get("api/products");
      setBackendProductData(productData);
      console.log(productData);
    })();
  }, []);

  return backendProductData;
};

export { useFetchedData };

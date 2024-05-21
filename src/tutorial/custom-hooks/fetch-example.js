import React from "react";
import { useFetch } from "./use-fetch";

const url = "https://course-api.com/javascript-store-products";

const CustomHooks = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <>
      <h2>Custom Hooks</h2>
      <h3>{loading ? "loading..." : "Data"}</h3>
    </>
  );
};

export default CustomHooks;

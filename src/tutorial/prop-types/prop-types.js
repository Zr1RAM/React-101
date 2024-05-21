import React from "react";
import Product from "./product";
import { useFetch } from "../custom-hooks/use-fetch";
const url = "https://course-api.com/react-prop-types-example";

const PropTypes = () => {
  const { products } = useFetch(url);
  return (
    <>
      <h2>Prop Types</h2>
      <h2>Products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </>
  );
};

export default PropTypes;

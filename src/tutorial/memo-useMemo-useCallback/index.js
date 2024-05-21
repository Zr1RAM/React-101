import React, { useState, useCallback, useMemo, useEffect } from "react";

import { useFetch } from "../custom-hooks/use-fetch";

const url = "https://course-api.com/javascript-store-products";

// imagine this function takes a long time to calculate this value.
// It would be nice if we can remember this value and not update it everytime the dom updates.
// this is where useMemo comes in place.
const calculateMostExpensive = (data) => {
  console.log(
    "this function only gets called when data is updated / values change"
  );
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );
  console.log(products);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);
  return (
    <>
      <h2>Memo useMemo useCallback</h2>
      <h2>Count: {count}</h2>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <h2 style={{ marginTop: "3rem" }}>Cart: {cart}</h2>
      <h3>Most Expensive: ${mostExpensive}</h3>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("big list called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct key={product.id} {...product} addToCart={addToCart} />
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single item called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </article>
  );
};
export default Index;

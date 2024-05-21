import React from "react";
import PropTypes from "prop-types";
//import defaultImage from '../../../assets/default-imge.jpeg'; // extension should be mentioned for non js files
// ^ this is how you import files to be used from assets folder

const Product = ({ image, name, price }) => {
  const imgURL = image && image.url;
  return (
    <article className="product">
      <img
        src={
          imgURL ||
          "https://raw.githubusercontent.com/john-smilga/react-advanced-2020/master/src/assets/default-image.jpeg"
        }
        alt={name || "default name"}
      />
      <h4>{name || "default name"}</h4>
      <p>${price || 0}</p>
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: "default name",
//   price: 0,
//   image:
//     "https://raw.githubusercontent.com/john-smilga/react-advanced-2020/master/src/assets/default-image.jpeg",
// }; // alternatively, we can use || operator and use defualt values in JSX

export default Product;
// https://raw.githubusercontent.com/john-smilga/react-advanced-2020/master/src/assets/default-image.jpeg

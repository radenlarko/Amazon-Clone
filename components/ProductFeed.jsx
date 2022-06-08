import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products?.map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;

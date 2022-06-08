import Image from "next/image";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(1);

  useEffect(() => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const random =
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;

    setRating(random);
  }, []);

  return (
    <div>
      <p>{category}</p>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt="product-amazon"
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((data, i) => (
            <StarIcon key={i} className="h-5" />
          ))}
      </div>
    </div>
  );
};

export default Product;

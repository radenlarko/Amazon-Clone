import Image from "next/image";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(1);
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const random =
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;

    const prime = Math.random() > 0.5;

    setRating(random);
    setHasPrime(prime);
  }, []);

  const addItemToBasket = () => {
    const product = { id, title, price, rating, description, category, image, hasPrime };

    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt="product-amazon"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((data, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <div className="text-xs my-2 line-clamp-2">{description}</div>
      <div className="mb-5">
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator
          prefix="£"
        />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;

import React from "react";
import Star from '../assets/star.svg';

const ProductCart = ({ list }) => {
  const { title, thumbnail, price, rating } = list;
  return (
    <div className="flex flex-col p-3 shadow-md rounded-lg bg-gray-100">
      <div className="justify-center">
        <img src={thumbnail} alt={title} />
      </div>
      <div>
        <h3 className="text-md font-semibold text-center text-blue-800">
          {title}
        </h3>
        <div className="pt-2 flex justify-between">
            <p className="flex items-center pr-3"><img src={Star} /><span>{rating}</span></p>
            <p className="font-bold"><span>&#8377;</span>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

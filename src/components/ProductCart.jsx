import React, { useState } from "react";
import Star from '../assets/star.svg';
import { useDispatch } from "react-redux";
import { addToCart } from "../reducer/CardSlice";


const ProductCart = ({ list }) => {
  const { id,title, thumbnail, price, rating } = list; 
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setIsAdded(true);
    dispatch(addToCart({ id, title, thumbnail, price, rating, quantity }));
  };

  const incrementQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQty = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };


  return (
    <div className="flex flex-col p-3 shadow-md rounded-lg bg-gray-100">
      <div className="justify-center" key={id}>
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
        {!isAdded ? (
        <button
            onClick={handleAddToCart}
            className="mt-3 w-full bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
            Add to Cart
          </button>
           ) : (
        <div className="mt-3 flex items-center justify-between ">
            <div className="flex items-center justify-around bg-gray-100 space-x-2 w-full">
              <button
              onClick={decrementQty}
                className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
              >
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
              onClick={incrementQty}
                className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
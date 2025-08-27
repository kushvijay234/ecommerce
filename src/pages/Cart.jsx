import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../reducer/CardSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">No items in cart</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 border-b">Thumbnail</th>
                <th className="text-left px-4 py-2 border-b">Title</th>
                <th className="text-left px-4 py-2 border-b">Price</th>
                <th className="text-left px-4 py-2 border-b">Quantity</th>
                <th className="text-left px-4 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 border-b">{item.title}</td>
                  <td className="px-4 py-2 border-b">₹{item.price}</td>
                  <td className="px-4 py-2 border-b">{item.quantity}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                       Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
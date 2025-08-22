import React from 'react'

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>
          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
        </div>
      </div>
      <button onClick={() => onRemove(item.id)} className="text-red-500 hover:underline">
        Remove
      </button>
    </div>
  )
}

export default CartItem
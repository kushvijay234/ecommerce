import React, { useState } from 'react';
import CartItem from '../components/CartItem'

const initialItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    quantity: 1,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 4999,
    quantity: 2,
    image: 'https://via.placeholder.com/80',
  },
]

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialItems)

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
import React from 'react'
import Products from '../product'
import ProductCart from '../components/ProductCart'

const product = Products;

const Home = () => {
  return (
    <div className="container grid grid-cols-4 gap-17 py-17">
      {product.map((list) => (
        <ProductCart key={list.id} list={list}/>
      ))}
    </div>
  )
}

export default Home

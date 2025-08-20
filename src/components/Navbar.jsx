import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='container flex bg-gray-200 shadow-md py-4 justify-between'>
      <div className="font-bold text-blue-950">
        <Link to="/">Ecommerce</Link>
      </div>
      <div className="flex gap-4 font-bold text-blue-950">
        <Link to="/cart"> Cart </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  )
}

export default Navbar

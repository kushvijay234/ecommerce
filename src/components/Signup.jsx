import React from 'react'

const Signup = ({ onSwitch }) => {
  return (
    <div className="h-[60vh] bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>

      <form className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-600">
        Already have an account?{' '}
        <button onClick={onSwitch} className="text-blue-500 hover:underline">
          Log in
        </button>
      </p>
    </div>
  )
}

export default Signup
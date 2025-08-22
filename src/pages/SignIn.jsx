import React from 'react'
import { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const SignIn = () => {

  const [isLogin, setIsLogin] = useState(true)

  return (
     <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column – Welcome Message */}
      <div className="md:w-1/2 flex items-center justify-center bg-blue-600 text-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg">We're glad to see you again. Please log in to continue.</p>
        </div>
      </div>

      {/* Right Column – Login Card */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md">
          {isLogin ? (
            <Login onSwitch={() => setIsLogin(false)} />
          ) : (
            <Signup onSwitch={() => setIsLogin(true)} />
          )}

        </div>
      </div>
    </section>


  )
}

export default SignIn

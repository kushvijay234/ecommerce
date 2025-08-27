import React from 'react'

const UserProfile = ({user}) => {
    const {name, email, avatar, orders} = user;
  return (
    <>
      <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
         {/* Orders Section */}
        { <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {orders.map(order => (
              <div
                key={order.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded border"
              >
                <div>
                  <p className="font-medium">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{order.total}</p>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> }
         {/* Account Settings Placeholder */}
        { <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              Edit Profile
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition">
              Change Password
            </button>
          </div>
        </div>}
      </div>
    </div>

    </>
  )
}

export default UserProfile

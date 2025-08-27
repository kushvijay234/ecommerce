import React from 'react'
import UserProfile from '../components/UserProfile'

const Profile = () => {

  const user = {
  name: 'Vijay Sharma',
  email: 'vijay@example.com',
  avatar: 'https://via.placeholder.com/100',
  orders: [
    { id: 'ORD1234', date: 'Aug 10, 2025', total: 2999, status: 'Delivered' },
    { id: 'ORD1235', date: 'Aug 18, 2025', total: 4999, status: 'Processing' },
  ],
}
  return (
    <div className='container p-6'>
      <UserProfile user={user} />
    </div>
  )
}

export default Profile

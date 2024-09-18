import React from 'react'
import { useSelector } from 'react-redux'
function Admin() {
  const users = useSelector((state) => state.auth.users);
  
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {users.map((user, index) => ( 
          <li key={index}> 
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Pass: {user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Admin

import React from 'react'
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <div className='min-h-screen'>
        <div className="w-64 h-full bg-gray-800 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <ul>
        <li>
          <Link to="/home" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            Home
          </Link>
        </li>
        <li>
          <Link to="/settings" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/logout" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            Logout
          </Link>
        </li>
      </ul>
      
    </div>
    </div>
  )
}

export default SideBar

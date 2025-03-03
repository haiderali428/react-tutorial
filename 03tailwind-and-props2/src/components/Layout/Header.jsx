import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo with Link */}
        <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? 'text-red-500' : 'hover:text-red-500'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? 'text-red-500' : 'hover:text-red-500'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? 'text-red-500' : 'hover:text-red-500'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? 'text-red-500' : 'hover:text-red-500'
                  }`
                }
              >
                Menu
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

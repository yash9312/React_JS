import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
      <nav className="px-4 lg:px-6 py-3 lg:py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12 w-auto transition-transform duration-300 hover:scale-105"
              alt="Logo"
            />
          </Link>

          {/* Right Buttons */}
          <div className="flex items-center lg:order-2 space-x-3">
            <Link
              to="#"
              className="px-5 py-2 text-gray-700 font-medium rounded-md hover:text-yellow-500 hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-semibold rounded-md shadow-lg hover:from-yellow-600 hover:to-yellow-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Get started
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["Home", "About", "Contact", "GitHub"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 rounded-md text-gray-800 text-sm font-medium transition-all duration-300 relative border-b border-gray-100 lg:border-0 lg:p-0 hover:text-yellow-500 hover:bg-gray-100 ${
                        isActive
                          ? "text-yellow-500 font-semibold after:content-[''] after:block after:w-full after:h-0.5 after:bg-yellow-500 after:rounded-full after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300"
                          : "after:content-[''] after:block after:w-0 after:h-0.5 after:bg-yellow-500 after:rounded-full after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

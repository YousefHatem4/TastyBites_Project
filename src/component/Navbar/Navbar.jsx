import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { userContext } from "../Context/userContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userToken, setUserToken } = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route is auth page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login');
    setIsMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-[#0D0E10] to-[#232829]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="sec-font self-center text-2xl font-semibold whitespace-nowrap text-white">
            TastyBites
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          {userToken ? (
            <>
              <Link
                to="/payment"
                className="text-white bg-[#FFBE33] hover:bg-[#d99e1f] cursor-pointer rounded-full px-6 sm:px-8 py-2 focus:ring-4 focus:outline-none font-medium text-sm sm:text-base transition duration-300"
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-cart-shopping"></i> Place Order
              </Link>
              <button
                onClick={handleLogout}
                className="text-white uppercase pl-2 hover:text-[#d99e1f]"
              >
                Log out
              </button>
            </>
          ) : (
            <div className="hidden md:flex space-x-4">
              <NavLink
                to="/login"
                className="text-white hover:text-[#d99e1f]"
                activeClassName="text-[#d99e1f]"
              >
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className="text-white hover:text-[#d99e1f]"
                activeClassName="text-[#d99e1f]"
              >
                Register
              </NavLink>
            </div>
          )}

          {/* Only show mobile menu button if not on auth pages */}
          {!isAuthPage && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          )}
        </div>

        {/* Navigation Links - Only show if not on auth pages */}
        {!isAuthPage && (
          <div
            className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-[#d99e1f] block py-2 px-3 md:p-0 rounded-sm ${isActive ? "main-color text-white md:bg-transparent" : "text-white"
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `hover:text-[#d99e1f] block py-2 px-3 md:p-0 rounded-sm ${isActive ? "main-color text-white md:bg-transparent" : "text-white"
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-[#d99e1f] block py-2 px-3 md:p-0 rounded-sm ${isActive ? "main-color text-white md:bg-transparent" : "text-white"
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>

              {/* Only show these in mobile view when not logged in */}
              {!userToken && (
                <>
                  <li className="md:hidden">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `hover:text-[#d99e1f] block py-2 px-3 md:p-0 rounded-sm ${isActive ? "main-color text-white md:bg-transparent" : "text-white"
                        }`
                      }
                      onClick={closeMobileMenu}
                    >
                      Log in
                    </NavLink>
                  </li>
                  <li className="md:hidden">
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        `hover:text-[#d99e1f] block py-2 px-3 md:p-0 rounded-sm ${isActive ? "main-color text-white md:bg-transparent" : "text-white"
                        }`
                      }
                      onClick={closeMobileMenu}
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
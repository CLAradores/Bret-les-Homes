import { useState } from 'react';
import Logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="" className="flex items-center">
            <img
              src={Logo}
              className="h-10 mr-3 rounded-full p-1 "
              alt="Bret'les Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bret'les
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link
              type="button"
              className="text-black focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg--color"
            >
              Booked a Viewing
            </Link>
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              hidden ? 'hidden' : ''
            } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-bold">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    [isActive ? 'active--link' : ''].join(' ')
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="property/"
                  className={({ isActive }) =>
                    [isActive ? 'active--link' : ''].join(' ')
                  }
                >
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contactUs"
                  className={({ isActive }) =>
                    [isActive ? 'active--link' : ''].join(' ')
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="aboutUs"
                  className={({ isActive }) =>
                    [isActive ? 'active--link' : ''].join(' ')
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <HeroSection /> */}
    </div>
  );
};

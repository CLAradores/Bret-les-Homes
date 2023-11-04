import { useState } from 'react';
import Logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className=" rounded">
            <Link to="" className="flex items-center ">
              <img
                src={Logo}
                className="h-10 mr-3 rounded-full p-1 bg-yellow-700 "
                alt="Bret'les Logo"
              />
              <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Bret'les
              </span>
            </Link>
          </div>
          <div className="flex md:order-2">
            <Link
              to="properties/contactUs"
              type="button"
              className="text-black focus:ring-4 focus:outline-none  font-bold  text-sm px-4 py-2 text-center mr-3 md:mr-0 bg--color hover:bg-sky-700"
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
            <ul className="flex text-white font-bold space-x-5">
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
                  to="search"
                  className={({ isActive }) =>
                    [isActive ? 'active--link' : ''].join(' ')
                  }
                >
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="properties/contactUs"
                  className={({ isActive }) =>
                    [isActive ? 'active--link' : ''].join(' ')
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="properties/aboutUs"
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

import { useState } from 'react';
import Logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';
import { Login } from '../pages';

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {};

  return (
    <div className="relative">
      {/* ---- */}
      <div className="bg-black text-white py-2 ">
        <div className="flex justify-between max-w-6xl mx-auto text-sm font-medium">
          <div className="flex space-x-6  justify-center  ">
            <div className="flex space-x-2 justify-center items-center ml-5  ">
              <LocalPhoneIcon style={{ fontSize: '1.2rem' }} />
              <h3>Call Now</h3>
            </div>

            <div className="flex space-x-2">
              <FacebookIcon style={{ fontSize: '1.2rem' }} />
              <h3>Like us on Facebook</h3>
            </div>
            <div className="flex space-x-2">
              <InstagramIcon style={{ fontSize: '1.2rem' }} />
              <h3>Follow us on Instagram</h3>
            </div>
            <div className="flex space-x-2">
              <TwitterIcon style={{ fontSize: '1.2rem' }} />
              <h3>Follow us on Twitter</h3>
            </div>
          </div>
          <div
            className="mr-5 flex space-x-1"
            onClick={() => navigate('properties/login')}
          >
            <Person2Icon style={{ fontSize: '1.2rem' }} />

            <h3>Login</h3>
          </div>
        </div>
      </div>

      {/* ------- */}
      {/* <span
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        // className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <Person2Icon style={{ fontSize: '1.2rem' }} />
      </span> */}

      {/* <!-- Main modal --> */}
      {/* <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full"> */}
      {/* <!-- Modal content --> */}
      {/* <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{' '}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      {/* ------- */}
      {/* ---- */}
      <nav className="bg-black dark:bg-gray-900  w-full z-20  sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
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
              className="text-black focus:ring-4 focus:outline-none  font-semibold  text-sm px-4 py-2 text-center mr-3 md:mr-0 bg--color"
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
          <nav
            className={`${
              hidden ? 'hidden' : ''
            } items-center justify-between  w-full md:flex md:w-auto md:order-1 stroke`}
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
                  to="properties/search"
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
          </nav>
        </div>
      </nav>
    </div>
  );
};

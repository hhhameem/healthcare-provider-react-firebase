import { Fragment } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";

const Navbar = () => {
  const { user, handleLogOut, isLoggedIn } = useAuth();
  let isSet = localStorage.getItem("isLoggedIn");
  console.log("from nav", isSet);
  return (
    <div>
      <Disclosure as='nav' className='bg-gray-800 fixed top-0 w-full'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <img className='h-14 w-14' src={logo} alt='Workflow' />
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      <NavLink
                        to='/home'
                        activeClassName='bg-gray-900 text-white'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to='/services'
                        activeClassName='bg-gray-900 text-white'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        Services
                      </NavLink>
                      <NavLink
                        to='/our-team'
                        activeClassName='bg-gray-900 text-white'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        Our Team
                      </NavLink>
                      <NavLink
                        to='/about-us'
                        activeClassName='bg-gray-900 text-white'
                        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      >
                        About Us
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='ml-4 flex items-center md:ml-6'>
                    {/* Profile dropdown */}
                    <Menu as='div' className='ml-3 relative'>
                      <div>
                        {isSet ? (
                          <div className='flex items-center'>
                            <div>
                              <Menu.Button className='max-4-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                <span className='sr-only'>Open user menu</span>
                                <h3 className='font-bold text-white mx-2'>
                                  {user.displayName}
                                </h3>
                              </Menu.Button>
                            </div>
                            <div>
                              <button
                                onClick={handleLogOut}
                                activeClassName='bg-gray-900 text-white ring-gray-800'
                                className='max-w-xs text-gray-300 px-4 py-1 bg-gray-800 rounded-md flex items-center ring-2 ring-offset-2 ring-offset-gray-800 ring-white hover:bg-gray-700 hover:text-white transition-all '
                              >
                                <FontAwesomeIcon
                                  icon={faSignOutAlt}
                                ></FontAwesomeIcon>{" "}
                                Logout
                              </button>
                            </div>
                          </div>
                        ) : (
                          <NavLink
                            to='/login'
                            activeClassName='bg-gray-900 text-white ring-gray-800'
                            className='max-w-xs text-gray-300 px-4 py-1 bg-gray-800 rounded-md flex items-center ring-2 ring-offset-2 ring-offset-gray-800 ring-white hover:bg-gray-700 hover:text-white transition-all '
                          >
                            <FontAwesomeIcon
                              icon={faSignInAlt}
                            ></FontAwesomeIcon>{" "}
                            Login
                          </NavLink>
                        )}
                      </div>
                    </Menu>
                  </div>
                </div>
                <div className='-mr-2 flex md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='bg-gray-800 inline-flex items-center justify-center p-2 w-6 h-6 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='md:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <NavLink
                  to='/home'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Home
                </NavLink>
                <NavLink
                  to='/services'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Services
                </NavLink>
                <NavLink
                  to='/our-team'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Our Team
                </NavLink>
                <NavLink
                  to='/about-us'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  About Us
                </NavLink>
              </div>
              {isSet ? (
                <div className='pt-4 pb-3 border-t border-gray-700'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'></div>
                    <div className='ml-3'>
                      <div className='text-base font-medium leading-none text-white'>
                        <h3 className='font-bold text-white text-left'>
                          {user.displayName}
                        </h3>
                      </div>
                      <div className='text-sm font-medium leading-none text-gray-400'>
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 px-2 space-y-1'>
                    <button
                      onClick={handleLogOut}
                      className='block px-4 py-2 text-sm text-white'
                    >
                      <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>{" "}
                      Log Out
                    </button>
                  </div>
                </div>
              ) : (
                <NavLink
                  to='/login'
                  activeClassName='bg-gray-900 text-white ring-gray-800'
                  className='max-w-xs text-gray-300 px-1 py-1 bg-gray-800 rounded-md flex items-center ring-2 ring-offset-2 ring-offset-gray-800 ring-white hover:bg-gray-700 hover:text-white transition-all '
                >
                  <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> Login
                </NavLink>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;

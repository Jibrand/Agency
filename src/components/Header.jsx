import React from "react";
import Fab from '@mui/material/Fab';
import { Fragment } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import Button from '@mui/material/Button';
import { AiOutlineClose } from "react-icons/ai";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <nav className="w-full flex md:justify-center h-20 justify-between items-center bg-[#0b65c6]   navbar">

      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer sm:ml-5 ml-5" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Link to="/"> <li className={`mx-4 cursor-pointer hover:text-gray-300 p-3 `}>Home</li></Link>
        <Link to="/about"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 `}>About</li></Link>
        <Link to="/contact"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 `}>Contact</li></Link>
        <Link to='/signin' >
          <Fab variant="extended" className="" size="medium" color="primary" aria-label="add">
            Login
          </Fab>
        </Link>
      </ul>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/dashboard"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Your Profile
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer sm:mr-5 mr-5" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <p>.</p>)}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen text-center shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2 text-center"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            <Link to="/"> <li className={`mx-4 cursor-pointer hover:text-gray-300 p-3 `}>Home</li></Link>
            <Link to="/about"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 `}>About</li></Link>
            <Link to="/contact"> <li className={`mx-4 cursor-pointer  hover:text-gray-300 p-3 `}>Contact</li></Link>

            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 pr-8">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/dashboard"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 ')}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

          </ul>
        )}

      </div>
    </nav>
  );
};

export default Header;

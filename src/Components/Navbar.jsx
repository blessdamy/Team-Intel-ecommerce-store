import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBell,
  faNavicon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  let Links = [
    { name: "Our Team", link: "/team", icon: faCartShopping },
    { name: "About Us", link: "/about", icon: faBell },
    { name: "Profile", link: "/", icon: faUser },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-green text-white">
      <div className="md:flex items-center justify-between w-3/4 m-auto py-2 md:px-10 px-7">
        <div
          className="md:ml-8  md:my-0 my-7 mr-4 font-bold pb-2 cursor-pointer flex items-center font-avenir-light
      "
        >
          <FontAwesomeIcon
            icon={faNavicon}
            className={
              "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
            }
          />
          <img src={logo} alt="logo" />
        </div>
        <div className="w-1/2 flex items-center">
            <div className="relative w-full">
                <input type="text" id="simple-search" className="bg-green border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...." required />
                <div className="absolute inset-y-0 right-4 flex items-center pl-4 right-0 p-2.5 text-black bg-white pointer-events-none rounded-r-xl focus:ring-5 focus:outline-none "><svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8  md:my-0 my-7 mr-4 hover:underline">
            <a
              href="https://linktr.ee/team_intel"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-115 duration-500"
            >
              Sign In
            </a>
          </li>
          {Links.map((link) => (
            <>
              <li key={link.name} className="md:ml-8  md:my-0 my-7 mr-4">
                <Link
                  to={link.link}
                  className=" font-avenir-light  font-medium  hover:text-purple hover:scale-115 transition duration-300"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className={
                      "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                    }
                  />
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

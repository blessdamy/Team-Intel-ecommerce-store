/* eslint-disable jsx-a11y/anchor-is-valid */
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
    { name: "Cart", link: "/", icon: faCartShopping },
    { name: "Notification", link: "/", icon: faBell },
    { name: "Profile", link: "/", icon: faUser },
    // { name: "Navbar", link: "/hamburger", icon: faNavicon },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-green text-white">
      <div className="md:flex items-center justify-between w-3/4 m-auto py-2 md:px-10 px-7">
        <div
          className="md:ml-8  md:my-0 my-7 mr-4 font-bold pb-2 cursor-pointer flex items-center font-avenir-light
      "
        >
          {/* <Navbar className="py-2 px-3" sticky="top" expand="md" id="navbar-bg">
            <Container>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center  flex-grow-1 ">
                  <Nav.Link className="mx-1 mx-md-4" href="#hamburger">
                    <FontAwesomeIcon
                      icon={faNavicon}
                      className={
                        "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                      }
                    />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
          <FontAwesomeIcon
            icon={faNavicon}
            className={
              "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
            }
          />
          <img src={logo} alt="logo" />
        </div>
        <div className="border w-1/2 rounded overflow-hidden flex justify-between">
          <input
            type="text"
            class="px-4 bg-green w-full py-2"
            placeholder="Search...."
          />
          <button className="flex items-center bg-white justify-center px-4 border-l">
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8  md:my-0 my-7 mr-4 hover:underline">
            <a
              href="#"
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

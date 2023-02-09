import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="bg-green text-white">
      <div className="  mx-auto  font-avenir-light space-y-4 items-center">
        <div className=" container flex flex-wrap items-center justify-between mx-auto text-justify">
          <div className=" text-l my-auto pb-36">
            <p className=" text-3xl my-auto font-semibold pb-5 ">Intel.Stores</p>
            <p className=" text-l my-auto">
              Our products includes Accessories, Bags,
              <br /> shoes, clothes and more. We have something for every
              occasion.
              <br /> Be all you can be.
            </p>
          </div>
          <div className="pt-5">
            <h2 class="mb-6 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
              Company
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" className=" hover:underline">
                  Home
                </a>
              </li>
              <li class="mb-4">
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
              <li class="mb-4">
                <a href="#" className="hover:underline">
                  Bags
                </a>
              </li>
              <li class="mb-4">
                <a href="#" className="hover:underline">
                  Clothes
                </a>
              </li>
              <li class="mb-4">
                <a href="#" className="hover:underline">
                  Jewelries
                </a>
              </li>
              <li class="mb-4">
                <a href="#" className="hover:underline">
                  Shoes
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-24">
            <h2 class="mb-6 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
              Contact us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className={
                    "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                  } />
                  Lagos, Nigeria
                </a>
              </li>
              <li class="mb-4">
                <a href="#" className="hover:underline">
                <FontAwesomeIcon
                  icon={faPhone}
                  className={
                    "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                  } />
                  +2348000065780
                </a>
              </li>
              <li class="mb-4">
                <a href="#" className="hover:underline">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={
                    "hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                  } />
                  intel.stores@mail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #fff ",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <p className=" text-center pb-4">
          Copywright © Landing page by Team Intel
        </p>
      </div>
    </div>
  );
}

export default Footer;

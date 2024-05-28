"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex justify-between lg:justify-start items-center lg:m-auto lg:w-full max-w-[1440px] h-[116px] font-bold text-popins mx-5">
      <div className="container font-popins">
        <nav className="flex lg:gap-[135px] lg:text-base  lg:items-center">
          <img className="w-[143px] h-[28px]" src="./assets/logo.png" />
          <ul className="flex gap-[48px]">
            <li className="hover:bold">
              <Link
                href="/home"
                className="text-gray-dark hover:text-black-text px-4 py-2"
              >
                Home
              </Link>
            </li>
            <li className="hover:bold">
              <Link
                href="/about"
                className="text-gray-dark hover:text-black-text px-4 py-2"
              >
                About
              </Link>
            </li>
            <li className="hover:bold">
              {" "}
              <Link
                href="/service"
                className="text-gray-dark hover:text-black-text px-4 py-2"
              >
                Service
              </Link>
            </li>
            <li className="hover:bold">
              <Link
                href="/faq"
                className="text-gray-dark hover:text-black-text px-4 py-2"
              >
                FAQ
              </Link>
            </li>
            <li className="hover:bold">
              <Link
                href="/contact"
                className="text-gray-dark hover:text-black-text px-4 py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="custom-button">Sign up</div>
        </nav>
        <div className="md:hidden flex justify-end sm:mr-10 relative z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon className="fa-2xl" icon={faBars} />
          </button>
          {isOpen && (
            <nav className="absolute top-9 bg-white-text text-custom-bg shadow-md rounded-md z-50">
              <ul className="flex flex-col gap-y-2 text-sm pt-3">
                <li>
                  <Link
                    href="/home"
                    className="hover:bg-gray-100 hover:rounded-md px-4 py-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:bg-gray-100 hover:rounded-md px-4 py-2"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="hover:bg-gray-100 hover:rounded-md px-4 py-2"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:bg-gray-100 hover:rounded-md px-4 py-2"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:bg-gray-100 hover:rounded-md px-4 py-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div>
                <button className="hover:bg-gray-100 hover:rounded-md px-4 py-2 text-sm mt-0">
                  Log in
                </button>
                <button className="hover:bg-gray-100 hover:rounded-md px-4 py-2 text-sm whitespace-nowrap pt-0">
                  Try for Free
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

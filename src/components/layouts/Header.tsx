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
    <header className="relative flex justify-between items-center lg:m-auto lg:w-full container  lg:h-[116px] h-[85px] font-bold text-popins px-5">
      
        <nav className="flex lg:gap-[135px] lg:text-base lg:items-center w-full">
        <Link href="/">
            <img
              className="w-[143px] h-[28px]"
              src="/assets/logo.png"
              alt="Logo"
            />
        </Link>
          <ul className="hidden md:flex gap-[48px]">
            <li className="hover:bold">
              <Link
                href="/"
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
              <Link
                href="/services"
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
          <div className="hidden md:block custom-button border-2 border-black-text">
            Sign up
          </div>
        </nav>
        <div className="md:hidden flex justify-end sm:mr-10 relative z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon className="fa-2xl" icon={faBars} />
          </button>
        </div>
        {isOpen && (
          <nav className="absolute top-[116px] left-0 w-full bg-white text-custom-bg shadow-md z-50">
            <ul className="flex flex-col gap-y-2 text-sm pt-3 px-4">
              <li>
                <Link
                  href="/home"
                  className="block hover:bg-gray-100 rounded-md px-4 py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block hover:bg-gray-100 rounded-md px-4 py-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block hover:bg-gray-100 rounded-md px-4 py-2"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block hover:bg-gray-100 rounded-md px-4 py-2"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block hover:bg-gray-100 rounded-md px-4 py-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-col items-start gap-y-2 px-4 pb-3">
              <button className="hover:bg-gray-100 rounded-md px-4 py-2 text-sm">
                Log in
              </button>
              <button className="hover:bg-gray-100 rounded-md px-4 py-2 text-sm whitespace-nowrap">
                Try for Free
              </button>
            </div>
          </nav>
        )}
      
    </header>
  );
};

export default Header;

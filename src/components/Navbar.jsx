import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi"; 
import { useLocation } from "react-router-dom";
import ContactUs from "./ContactUs";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="flex justify-between items-center p-4 md:p-1 z-50">
        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-5 items-center">
          <img src="/logo_uvon.svg" alt="Logo" className="w-20" />
          <a
            href="/"
            className={
              isActive("/")
                ? "bg-red-500 rounded-full flex justify-center p-3 w-15 h-15 group"
                : "bg-gray-300 rounded-full flex justify-center p-3 w-15 h-15 group hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
            }
          >
            <IoMdHome className="text-[30px]" />
          </a>
          <a
            href="/about-us"
            className={
              isActive("/about-us")
                ? "bg-red-500 p-2 px-4 rounded-full text-white"
                : "bg-gray-300 p-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
            }
          >
            About
          </a>
          <a
            href="/news"
            className={
              isActive("/news")
                ? "bg-red-500 p-2 px-4 rounded-full text-white"
                : "bg-gray-300 p-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
            }
          >
            News
          </a>
          <a
            href="/media"
            className={
              isActive("/media")
                ? "bg-red-500 p-2 px-4 rounded-full text-white"
                : "bg-gray-300 p-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
            }
          >
            Media
          </a>
          <ContactUs />
        </div>

        {/* Mobile Navbar */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden absolute top-2 right-5 bg-red-600 text-white p-2 rounded-full"
        >
          <FiMenu size={24} />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-[#761F21] to-[#FB3748] z-50 flex flex-col items-center justify-center text-white text-2xl">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <FiX />
          </button>

          <div className="flex flex-col text-center gap-6">
            <img src="/logo_uvon.svg" alt="Logo" className="w-24 mx-auto mb-5" />

            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className={isActive("/") ? "text-amber-300 font-bold" : "hover:text-amber-300"}
            >
              Home
            </a>
            <a
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className={isActive("/about-us") ? "text-amber-300 font-bold" : "hover:text-amber-300"}
            >
              About
            </a>
            <a
              href="/news"
              onClick={() => setIsOpen(false)}
              className={isActive("/news") ? "text-amber-300 font-bold" : "hover:text-amber-300"}
            >
              News
            </a>
            <a
              href="/media"
              onClick={() => setIsOpen(false)}
              className={isActive("/media") ? "text-amber-300 font-bold" : "hover:text-amber-300"}
            >
              Media
            </a>
            <ContactUs />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

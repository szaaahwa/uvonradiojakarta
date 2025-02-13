import React from "react";
import { IoMdHome } from "react-icons/io";
import PodcastsPlayer from "./PodcastPlayer";
import AudioPlayer from "./AudioPlayer";
import { useLocation } from "react-router-dom";
import ContactUs from "./ContactUs";

const Navbar = () => {
  const location = useLocation()
  const isActive = (path)=> location.pathname === path
  return (
    <nav className="flex gap-5 justify-between">
      <div className="md:flex gap-5 items-center hidden">
        <img src="/logo_uvon.svg" alt="" className="w-20" />
        <a
          href="/"
          className={isActive ? "bg-red-500 rounded-full flex justify-center p-3 w-15 h-15 group" : "bg-gray-500 rounded-full flex justify-center p-3 w-15 h-15 group"}
        >
          <IoMdHome className="text-[30px] group-hover:text-white ease-in-out duration-300 transition-colors" />
        </a>
        {/* about */}
        <a
          href="/about-us"
          className="bg-gray-300 p-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
        >
          About
        </a>
        {/* news */}
        <a
          href="/news"
          className="bg-gray-300 p-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
        >
          News
        </a>
        {/* media */}
        <a
          href="/media"
          className="bg-gray-300 p-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
        >
          Media
        </a>
        {/* contact us */}
        <ContactUs/>
      </div>
      <div className="hidden md:block"> 
      </div>
      {/* <PodcastsPlayer/> */}
     
    </nav>
  );
};

export default Navbar;

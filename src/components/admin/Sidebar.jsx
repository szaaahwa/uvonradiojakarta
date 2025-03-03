import React from "react";
import { useLocation } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPermMedia } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <nav className=" left-0 w-[15vw] h-screen bg-gradient-to-r from-[#761F21] to-[#FB3748] ">
        <div className="flex-col flex ">
          <div className="p-5 flex justify-center">
            <img src="/logo_uvon.svg" alt="" />
          </div>
          <div className="flex flex-col p-5 text-2xl gap-5">
            <a
              href="/admin/dashboard"
              className={
                isActive("/admin/dashboard")
                  ? " flex items-center gap-1 text-amber-300 font-bold  w-50  "
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors  w-50"
              }
            >
              <MdSpaceDashboard />
              <p>Dashboard</p>
            </a>

            <a
              href="/admin/news"
              className={
                isActive("/admin/news")
                  ? " flex items-center gap-1 text-amber-300 font-bold  w-50  "
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <FaRegNewspaper />
              <p className="">News</p>
            </a>
            <a
              href="/admin/media"
              className={
                isActive("/admin/media")
                  ? " flex items-center gap-1 text-amber-300 font-bold  w-50  "
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors  w-50"
              }
            >
              <MdPermMedia />
              <p className="">Media</p>
            </a>
            <a
              href="/admin/contact"
              className={
                isActive("/admin/contact")
                  ? " flex items-center gap-1 text-amber-300 font-bold  w-50  "
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <MdContactPhone />
              <p className="">Contact</p>
            </a>
            <a
              href="/admin/divisi"
              className={
                isActive("/admin/divisi")
                  ? " flex items-center gap-1 text-amber-300 font-bold  w-50  "
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
             <FaPeopleGroup />
              <p className="">Divisi</p>
            </a>
            <br />
            <br />
            <br />
         
            <a
              href="/admin/login"
              className={
                "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <IoExitOutline />
              <p className="">Log Out</p>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;

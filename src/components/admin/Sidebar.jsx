import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdSpaceDashboard, MdPermMedia, MdContactPhone } from "react-icons/md";
import { FaRegNewspaper, FaPeopleGroup } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-5 right-5 z-50 bg-red-600 text-white p-2 rounded-full"
      >
        <FiMenu size={24} />
      </button>

      {/* Desktop Sidebar */}
      <nav className="hidden md:block fixed bottom-0 left-0 w-[15vw] h-screen bg-gradient-to-r from-[#761F21] to-[#FB3748]">
        <div className="flex flex-col">
          <div className="p-5 flex justify-center">
            <img src="/logo_uvon.svg" alt="" />
          </div>
          <div className="flex flex-col p-5 text-2xl gap-5">
            <a
              href="/admin/dashboard"
              className={
                isActive("/admin/dashboard")
                  ? "flex items-center gap-1 text-amber-300 font-bold w-50"
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <MdSpaceDashboard />
              <p>Dashboard</p>
            </a>
            <a
              href="/admin/news"
              className={
                isActive("/admin/news")
                  ? "flex items-center gap-1 text-amber-300 font-bold w-50"
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <FaRegNewspaper />
              <p>News</p>
            </a>
            <a
              href="/admin/media"
              className={
                isActive("/admin/media")
                  ? "flex items-center gap-1 text-amber-300 font-bold w-50"
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <MdPermMedia />
              <p>Media</p>
            </a>
            <a
              href="/admin/contact"
              className={
                isActive("/admin/contact")
                  ? "flex items-center gap-1 text-amber-300 font-bold w-50"
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <MdContactPhone />
              <p>Contact</p>
            </a>
            <a
              href="/admin/divisi"
              className={
                isActive("/admin/divisi")
                  ? "flex items-center gap-1 text-amber-300 font-bold w-50"
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <FaPeopleGroup />
              <p>Divisi</p>
            </a>
            <a
              href="/admin/program"
              className={
                isActive("/admin/program")
                  ? "flex items-center gap-1 text-amber-300 font-bold w-50"
                  : "flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
              }
            >
              <SlCalender />
              <p>Programs</p>
            </a>

            <br />
            <br />

            <a
              href="/admin/login"
              className="flex items-center gap-1 text-white font-bold hover:text-amber-300 ease-in-out duration-300 transition-colors w-50"
            >
              <IoExitOutline />
              <p>Log Out</p>
            </a>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-[#761F21] to-[#FB3748] z-50 flex flex-col items-center justify-center w-full text-white text-3xl">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <FiX />
          </button>
          {/* mobile navbar */}
          <div className="flex flex-col text-center gap-6">
            <img
              src="/logo_uvon.svg"
              alt="Logo"
              className="w-24 mx-auto mb-5"
            />

            <a
              href="/admin/dashboard"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/admin/dashboard")
                  ? "text-amber-300 font-bold flex items-center gap-2"
                  : "text-white hover:text-amber-300 flex items-center gap-2"
              }
            >
              <MdSpaceDashboard /> Dashboard
            </a>
            <a
              href="/admin/news"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/admin/news")
                  ? "text-amber-300 font-bold flex items-center gap-2"
                  : "text-white hover:text-amber-300 flex items-center gap-2"
              }
            >
              <FaRegNewspaper /> News
            </a>
            <a
              href="/admin/media"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/admin/media")
                  ? "text-amber-300 font-bold flex items-center gap-2"
                  : "text-white hover:text-amber-300 flex items-center gap-2"
              }
            >
              <MdPermMedia /> Media
            </a>
            <a
              href="/admin/contact"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/admin/contact")
                  ? "text-amber-300 font-bold flex items-center gap-2"
                  : "text-white hover:text-amber-300 flex items-center gap-2"
              }
            >
              <MdContactPhone /> Contact
            </a>
            <a
              href="/admin/divisi"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/admin/divisi")
                  ? "text-amber-300 font-bold flex items-center gap-2"
                  : "text-white hover:text-amber-300 flex items-center gap-2"
              }
            >
              <FaPeopleGroup /> Divisi
            </a>
            <a
              href="/admin/program"
              onClick={() => setIsOpen(false)}
              className={
                isActive("/admin/program")
                  ? "text-amber-300 font-bold flex items-center gap-2"
                  : "text-white hover:text-amber-300 flex items-center gap-2"
              }
            >
              <SlCalender /> Programs
            </a>
            <a
              href="/admin/login"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-300 flex items-center gap-2"
            >
              <IoExitOutline /> Log Out
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

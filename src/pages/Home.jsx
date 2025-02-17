import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import NewsList from "../components/News/NewsList";

const Home = () => {
  return (
    <>
      <Head title={"Home"} />
      <div className="font-sans flex flex-col bg-black md:pl-5 pt-5  ">
        <Navbar />
        <main className="flex md:flex-row flex-col">
          <div className=" md:h-screen md:w-[69%] w-full overflow-y-auto mt-2">
            <Header
              title={"UVON RADIO JAKARTA"}
              subtitle={"Entertaining, Educating, and Inspiring"}
            />
            <hr className="border-white mx-2 mt-2 mb-4" />
            <div className="flex justify-between px-4 items-center">
              <h2 className="text-white text-2xl">UVON On Air</h2>
              <div className="relative">
                <Chat />
              </div>
            </div>
            {/* berita uvon */}
            <div className="flex justify-between px-4 items-center">
              <h2 className="text-white text-2xl">UVON News</h2>
              <a
                href="/news"
                className="text-gray-400 hover:text-red-400 ease-in-out duration-300"
              >
                Show all
              </a>
            </div>
            <div className="p-5">
              <NewsList />
            </div>
            <img src="/image.png" alt="" />
            <div className="h-0"></div>
            <div className="md:hidden md:w-[31%] w-full h-screen overflow-y-auto mt-2 px-2 block">
              <Side />
            </div>
            <Footer />
          </div>
          {/* ini buat mobile view */}
          <div className="hidden md:w-[31%] w-full h-screen overflow-y-auto mt-2 px-2 md:block">
            <Side />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

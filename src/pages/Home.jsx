import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Footer from "../components/Footer";

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

            <div className="md:hidden md:w-[31%] w-full h-screen overflow-y-auto mt-2 px-2 block">
              <Side />
            </div>
            <Footer />
          </div>
          <div className="hidden md:w-[31%] w-full h-screen overflow-y-auto mt-2 px-2 md:block">
            <Side />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

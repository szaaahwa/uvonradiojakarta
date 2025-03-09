import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Footer from "../components/Footer";
import axios from "axios";

const Divisi = () => {
  const [bigger, setBigger] = useState(false);
  const [selecteddivisi, setSelecteddivisi] = useState(null);
  const [divisi, setdivisi] = useState([]);

  useEffect(() => {
    const fetchAlldivisi = async () => {
      try {
        const res = await axios.get("http://uvon.test/divisi/divisi.php");
        setdivisi(res.data.divisi);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAlldivisi();
  }, []);

  const handleGambar = (item) => {
    setSelecteddivisi(item);
    setBigger(!bigger);
  };
  return (
    <>
      <Head title={"divisi"} />
      <div className="font-sans flex flex-col bg-black md:pl-5 pt-5">
        <Navbar />
        <main className="flex md:flex-row flex-col ">
          <div className="md:h-screen md:w-[69%] w-full overflow-y-auto mt-2 relative">
            <Header
              title={"UVON DIVISIONS"}
              subtitle={"Collaborating to Connect, Inspire, and Entertain"}
            />
            <hr className="border-white mx-2 mt-2 mb-4" />

            {divisi.length === 0 ? (
              <p className="text-white text-center">No divisi available.</p>
            ) : (
              <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 space-y-2 mb-5 p-5">
                {divisi.map((item, index) => (
                  <div className="flex flex-col">
                    <div
                      key={index}
                      className=" rounded-md relative mt-2 cursor-pointer"
                    >
                      <img
                        src={`http://uvon.test/divisi/${item.foto}`}
                        alt={item.caption}
                        onClick={() => handleGambar(item)}
                        className="w-50 h-50 rounded-full object-cover object-center"
                      />
                    </div>
                    <p className="text-white text-center font-bold">{item.nama}</p>
                    <p className="text-white text-center ">{item.nama_divisi}</p>
                  </div>
                ))}
              </div>
            )}

            {bigger && selecteddivisi && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 overflow-y-scroll"
                onClick={() => setBigger(false)}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={`http://uvon.test/divisi/${selecteddivisi.foto}`}
                    alt={selecteddivisi.nama}
                    className="w-3/4 md:w-1/2 rounded-md shadow-lg"
                  />
                  <p className="text-white text-center mt-2 px-4">
                    {selecteddivisi.nama}
                  </p>
                  <p className="text-white text-center mt-2 px-4">
                    {selecteddivisi.nama_divisi}
                  </p>
                </div>
              </div>
            )}

            <div className="md:hidden w-full h-screen overflow-y-auto mt-2 px-2 block">
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

export default Divisi;

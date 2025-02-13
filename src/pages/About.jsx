import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head title={"About Us"} />
      <div className="font-sans flex flex-col bg-black md:pl-5 pt-5  ">
        <Navbar />
        <main className="flex md:flex-row flex-col">
          <div className=" md:h-screen md:w-[69%] w-full overflow-y-auto mt-2">
            <Header
              title={"UVON RADIO JAKARTA"}
              subtitle={"Entertaining, Educating, and Inspiring"}
            />
            {/* logonya UVON */}
            <div className="flex justify-center p-5">
              <img src="/logo_uvon.svg" alt="" className="w-100" />
            </div>
            <hr className="border-white mx-2 mt-2 mb-4" />
            {/* VIsi dan Misi */}
            <div className="flex  text-white">
              {/* visi */}
              <div className="border-r-1 border-white h-full px-5">
                <div className="bg-[#252525] p-4 rounded-lg">
                  <h2 className="text-center text-2xl ">Visi Dan Misi</h2>
                  <br />
                  <h3 className="text-xl">Visi</h3>
                  <p className="text-justify">
                    Menjadi Media Informasi terdepan di Institut Bisnis
                    Nusantara yang dapat menjadi media penghubung antara
                    mahasiswa dengan kampus, menjadi wadah kreativitas dan
                    pengembangan kemampuan mahasiswa, mempromosikan Institut
                    Bisnis Nusantara kepada masyarakat luas serta membentuk
                    image yang positif bagi Institut Bisnis Nusantara sebagai
                    perguruan tinggi yang maju khususnya dalam bidang media
                    penyiaran.
                  </p>
                  <br /><br />
                  <h3 className="text-xl">Visi</h3>
                  <p className="text-justify">
                    Menjadi Media Informasi terdepan di Institut Bisnis
                    Nusantara yang dapat menjadi media penghubung antara
                    mahasiswa dengan kampus, menjadi wadah kreativitas dan
                    pengembangan kemampuan mahasiswa, mempromosikan Institut
                    Bisnis Nusantara kepada masyarakat luas serta membentuk
                    image yang positif bagi Institut Bisnis Nusantara sebagai
                    perguruan tinggi yang maju khususnya dalam bidang media
                    penyiaran.
                  </p>
                </div>
              </div>
              <div className="border-l-1 border-white h-full px-5">
                <div className="bg-[#252525] p-4 rounded-lg">
                  <h2 className="text-center text-2xl ">Visi Dan Misi</h2>
                  <br />
                  <h3 className="text-xl">Visi</h3>
                  <p className="text-justify">
                    Menjadi Media Informasi terdepan di Institut Bisnis
                    Nusantara yang dapat menjadi media penghubung antara
                    mahasiswa dengan kampus, menjadi wadah kreativitas dan
                    pengembangan kemampuan mahasiswa, mempromosikan Institut
                    Bisnis Nusantara kepada masyarakat luas serta membentuk
                    image yang positif bagi Institut Bisnis Nusantara sebagai
                    perguruan tinggi yang maju khususnya dalam bidang media
                    penyiaran.
                  </p>
                </div>
              </div>
            </div>
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

export default About;

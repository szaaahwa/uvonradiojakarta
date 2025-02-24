import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get(
          `http://uvon.test/news/get_news.php?id=${id}`
        );
        setNews(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  });

  return (
    <>
      <Head title={"Home"} />
      <div className="font-sans flex flex-col bg-black md:pl-5 pt-5  ">
        <Navbar />
        <main className="flex md:flex-row flex-col">
          <div className=" md:h-screen md:w-[69%] w-full overflow-y-auto mt-2">
            <Header
              title={"UVON NEWS "}
              subtitle={"Stay Tuned, Stay Informed, and Stay UVON"}
            />
            <div>{/* Tombol Filter */}</div>
            <hr className="border-white mx-2 mt-2 mb-4" />
            {/* berita  */}
            {news && (
              <div>
                <div className="bg-[#434343] p-5  rounded-lg m-3">
                  <h2 className="text-2xl text-white">{news.judul}</h2>
                </div>
                <div className="flex">
                  <div className="flex items-center text-white gap-1 px-4">
                    <PiUserCircleFill />
                    <p>{news.nama_penulis}</p>
                  </div>
                  <div className="flex items-center text-white gap-1 px-4">
                    <SlCalender />
                    <p>{news.tanggal}</p>
                  </div>
                  <div className="flex items-center text-white gap-1 px-4">
                    <FaRegClock />
                    <p>{news.jam}</p>
                  </div>
                </div>
                {/* gambar */}
                <div className="px-4 flex justify-center my-5">
                  <img src={`${news.foto}`} alt="" />
                </div>
                {/* isi */}
                <div className="bg-[#434343] p-5  rounded-lg m-3 text-justify">
                  <p className="text-white">{news.isi}</p>
                </div>
              </div>
            )}
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

export default NewsDetail;

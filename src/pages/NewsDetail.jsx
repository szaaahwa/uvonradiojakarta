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
import { IoIosArrowRoundBack } from "react-icons/io";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get(
          `https://uvonradiojakarta.com/uvon/news/get_news.php?id=${id}`
        );
        setNews(res.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [id]);

  return (
    <>
      <Head title={"News Detail"} />
      <div className="font-sans flex flex-col bg-black md:pl-5 pt-5">
        <Navbar />

        <main className="flex md:flex-row flex-col">
          <div className="md:h-screen md:w-[69%] w-full overflow-y-auto mt-2">
            <Header
              title={"UVON NEWS"}
              subtitle={"Stay Tuned, Stay Informed, and Stay UVON"}
            />
            <hr className="border-white mx-2 mt-2 mb-4" />
            <a href="/news" className="flex gap-2 text-white">
              <IoIosArrowRoundBack /> <p>Kembali</p>
            </a>
            {loading ? (
              <div className="text-center text-white">Loading...</div>
            ) : news && news.judul ? (
              <div>
                <div className="bg-[#434343] p-5 rounded-lg m-3">
                  <h2 className="text-2xl text-white">{news.judul}</h2>
                </div>

                <div className="flex text-white gap-4 px-4">
                  <div className="flex items-center gap-1">
                    <PiUserCircleFill />
                    <p>{news.nama_penulis || "Unknown"}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <SlCalender />
                    <p>{news.tanggal || "No Date"}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegClock />
                    <p>{news.jam || "No Time"}</p>
                  </div>
                </div>

                {/* News Image */}
                <div className="px-4 flex justify-center my-5">
                  <img
                    src={
                      news.foto
                        ? `https://uvonradiojakarta.com/uvon/news/${news.foto}`
                        : "/logo_uvon.svg"
                    }
                    alt="News Image"
                    className="w-[400px] h-[250px] object-cover object-center rounded"
                    onError={(e) => {
                      e.target.src = "/logo_uvon.svg";
                    }}
                  />
                </div>

                <div className="bg-[#434343] p-5 rounded-lg m-3 text-justify text-white">
                  <div
                    className="pointer-events-auto"
                    dangerouslySetInnerHTML={{ __html: news.isi }}
                    onClick={(e) => {
                      const target = e.target;
                      if (target.tagName === "A") {
                        e.preventDefault();
                        window.open(target.href, "_blank");
                      }
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center text-white">News not found.</div>
            )}
            \
            <div className="md:hidden w-full h-screen overflow-y-auto mt-2 px-2">
              <Side />
            </div>
            <Footer />
          </div>
          \
          <div className="hidden md:block md:w-[31%] w-full h-screen overflow-y-auto mt-2 px-2">
            <Side />
          </div>
        </main>
      </div>
    </>
  );
};

export default NewsDetail;

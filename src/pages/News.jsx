import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Footer from "../components/Footer";

const News = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); 

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const res = await axios.get("http://uvon.test/news/get_news.php");
        setNews(res.data.news || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllNews();
  }, []);


  const categories = [
    "All",
    "UVON Campus",
    "UVON Music",
    "UVON Lifestyle",
    "UVON Entertainment",
    "UVON Sport",
    "UVON Maps",
  ];


  const filteredNews =
    selectedCategory === "All"
      ? news
      : news.filter((berita) => berita.kategori === selectedCategory);

  return (
    <>
      <Head title={"Home"} />
      <div className="font-sans flex flex-col bg-black md:pl-5 pt-5">
        <Navbar />
        <main className="flex md:flex-row flex-col">
          <div className="md:h-screen md:w-[69%] w-full overflow-y-auto mt-2">
            <Header
              title={"UVON RADIO JAKARTA"}
              subtitle={"Stay Tuned, Stay Informed, and Stay UVON"}
            />

            {/* Filter Button */}
            <div className="flex gap-3 p-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-2 rounded-lg text-black text-sm ${
                    selectedCategory === category
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 "
                  } hover:bg-red-600 transition-all cursor-pointer hover:text-white duration-300 ease-in-out `}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <hr className="border-white mx-2 mt-2 mb-4" />

            <div className="flex flex-col gap-2 px-3 my-5">
              {Array.isArray(filteredNews) && filteredNews.length > 0 ? (
                filteredNews.map((berita, index) => (
                  <a
                    href={`/news/${berita.id}`}
                    className="bg-[#252525] text-white flex p-2 items-center gap-5 rounded-lg hover:bg-red-500 ease-in-out duration-300"
                    key={index}
                  >
                    <img
                      src={`http://uvon.test/news/${berita.foto}`}
                      alt=""
                      className="w-15 h-15 object-cover"
                      onError={(e) => {
                        e.target.src = "logo_uvon.svg";
                      }}
                    />
                    <p className="line-clamp-1">{berita.judul}</p>
                  </a>
                ))
              ) : (
                <p className="text-white text-center">
                  Maaf tidak ada berita di kategori ini 🙏
                </p>
              )}
            </div>

            <div className="md:hidden w-full h-screen overflow-y-auto mt-2 px-2 block">
              <Side />
            </div>
            <Footer />
          </div>

          <div className="hidden md:block md:w-[31%] w-full h-screen overflow-y-auto mt-2 px-2">
            <Side />
          </div>
        </main>
      </div>
    </>
  );
};

export default News;

import axios from "axios";
import React, { useEffect, useState } from "react";

const NewsList = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const res = await axios.get("");
        setNews(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllNews();
  }, []);
  return (
    <>
      {Array.isArray(news) &&  news.map((berita, index) => (
        <a
          href={`/news/${berita.id}`}
          className="bg-[#252525] text-white flex p-2 items-center gap-5 rounded-lg hover:bg-red-500 ease-in-out duration-300"
          key={index}
        >
          <img src={"/image.png"} alt="" />
          <p>
            {berita.judul}
          </p>
        </a>
      ))}
    </>
  );
};

export default NewsList;

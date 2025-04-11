import axios from "axios";
import React, { useEffect, useState } from "react";

const NewsList = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const res = await axios.get("https://uvonradiojakarta.com/uvon/news/get_news.php");
        setNews(res.data.news || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllNews();
  }, []);
  return (
    <>
      {Array.isArray(news) &&
        news.slice(-5).map((berita, index) => (
          <a
            href={`/news/${berita.id}`}
            className="bg-[#252525] text-white flex p-2 items-center gap-5 rounded-lg hover:bg-red-500 ease-in-out duration-300"
            key={index}
          >
            <img
              src={`https://uvonradiojakarta.com/uvon/news/${berita.foto}`}
              alt=""
              className="w-15 h-15 object-cover rounded"
              onError={(e) => {
                e.target.src = "logo_uvon.svg";
              }}
            />
            <p className="line-clamp-1">{berita.judul}</p>
          </a>
        ))}
    </>
  );
};

export default NewsList;

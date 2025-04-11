import React, { useEffect, useState } from "react";
import axios from "axios";

const MediaShow = () => {
        const [media, setmedia] = useState([]);
    useEffect(() => {
        const fetchAllmedia = async () => {
          try {
            const res = await axios.get("https://uvonradiojakarta.com/uvon/media/add_media.php");
            setmedia(res.data.media);
          } catch (error) {
            console.log(error);
          }
        };
        fetchAllmedia();
      }, []);
  return (
    <>
    {Array.isArray(media) &&
      media.slice(-5).map((media, index) => (
        <a
          href={`/media`}
          className="bg-[#252525] text-white flex p-2 items-center gap-5 rounded-lg hover:bg-red-500 ease-in-out duration-300"
          key={index}
        >
          <img
            src={`https://uvonradiojakarta.com/uvon/media/${media.foto}`}
            alt=""
            className="w-80 h-80 md:h-35 md:w-35  object-cover rounded"
            onError={(e) => {
              e.target.src = "logo_uvon.svg";
            }}
            loading="lazy"
          />
        </a>
      ))}
  </>
  )
}

export default MediaShow
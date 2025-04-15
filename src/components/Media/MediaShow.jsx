import React, { useEffect, useState } from "react";
import axios from "axios";

const MediaShow = () => {
  const [media, setmedia] = useState([]);

  useEffect(() => {
    const fetchAllmedia = async () => {
      try {
        const res = await axios.get(
          "https://uvonradiojakarta.com/uvon/media/add_media.php"
        );
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
        media.slice(-4).map((media, index) => (
          <a
            href={`/media`}
            className="min-w-[200px] max-w-[220px] bg-[#252525] rounded-lg hover:bg-red-500 ease-in-out duration-300 overflow-hidden snap-center"
            key={index}
          >
            <div className="aspect-square w-full">
              <img
                src={`https://uvonradiojakarta.com/uvon/media/${media.foto}`}
                alt="UVON Media"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "logo_uvon.svg";
                }}
                loading="lazy"
              />
            </div>
          </a>
        ))}
    </>
  );
};

export default MediaShow;

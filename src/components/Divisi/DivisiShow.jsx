import React, { useEffect, useState } from "react";
import axios from "axios";

const DivisShow = () => {
  const [divisi, setdivisi] = useState([]);

  useEffect(() => {
    const fetchAlldivisi = async () => {
      try {
        const res = await axios.get(
          "https://uvonradiojakarta.com/uvon/divisi/divisi.php"
        );
        setdivisi(res.data.divisi);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAlldivisi();
  }, []);

  return (
    <>
      {Array.isArray(divisi) &&
        divisi.slice(-5).map((divisi, index) => (
          <a
            href={`/divisi`}
            className="min-w-[150px] max-w-[180px] flex flex-col items-center gap-4 p-2 rounded-lg group text-white hover:text-red-400 transition-all ease-in-out duration-300"
            key={index}
          >
            <div className="aspect-square w-full max-w-[100px] rounded-full overflow-hidden">
              <img
                src={`https://uvonradiojakarta.com/uvon/divisi/${divisi.foto}`}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "logo_uvon.svg";
                }}
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold group-hover:text-red-500 transition-colors">
                {divisi.nama}
              </p>
              <p className="text-sm">{divisi.nama_divisi}</p>
            </div>
          </a>
        ))}
    </>
  );
};

export default DivisShow;

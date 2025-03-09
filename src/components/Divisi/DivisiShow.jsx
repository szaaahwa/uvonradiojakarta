import React, { useEffect, useState } from "react";
import axios from "axios";

const DivisShow = () => {
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
  return (
    <>
      {Array.isArray(divisi) &&
        divisi.slice(-5).map((divisi, index) => (
          <a
            href={`/divisi`}
            className=" text-white flex flex-col p-2 items-center gap-5 rounded-lg group"
            key={index}
          >
            <img
              src={`http://uvon.test/divisi/${divisi.foto}`}
              alt=""
              className="w-80 h-80 md:h-35 md:w-35 rounded-full object-cover"
              onError={(e) => {
                e.target.src = "logo_uvon.svg";
              }}
              loading="lazy"
            />
            <div className="flex flex-col">
              <p className="text-center text-sm group-hover:text-red-500 ease-in-out duration-300 transition-colors font-bold">{divisi.nama}</p>
              <p className="text-center text-sm">{divisi.nama_divisi}</p>
            </div>
          </a>
        ))}
    </>
  );
};

export default DivisShow;

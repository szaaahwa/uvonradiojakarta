import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Footer from "../components/Footer";
import axios from "axios";

const Media = () => {
  const [bigger, setBigger] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchAllMedia = async () => {
      try {
        const res = await axios.get("https://uvonradiojakarta.com/uvon/media/add_media.php");
        setMedia(res.data.media);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMedia();
  }, []);

  const handleGambar = (item) => {
    setSelectedMedia(item);
    setBigger(!bigger);
  };

  return (
    <>
      <Head title={"Media"} />
      <div className="font-sans flex flex-col bg-black md:pl-5 pt-5">
        <Navbar />
        <main className="flex md:flex-row flex-col ">
          <div className="md:h-screen md:w-[69%] w-full overflow-y-auto mt-2 relative">
            <Header
              title={"UVON MOMENTS"}
              subtitle={"Compilations of the best activities and events"}
            />
            <hr className="border-white mx-2 mt-2 mb-4" />

            {media.length === 0 ? (
              <p className="text-white text-center">No media available.</p>
            ) : (
              <div className="columns-2 md:columns-4 gap-2 space-y-2 mb-5 p-5">
                {media.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleGambar(item)}
                    className="w-full rounded-md relative mt-2 cursor-pointer"
                  >
                    <img
                      src={`https://uvonradiojakarta.com/uvon/media/${item.foto}`}
                      alt={item.caption}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}

            {bigger && selectedMedia && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 overflow-y-scroll"
                onClick={() => setBigger(false)}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={`https://uvonradiojakarta.com/uvon/media/${selectedMedia.foto}`}
                    alt={selectedMedia.caption}
                    className="w-3/4 md:w-1/2 rounded-md shadow-lg"
                  />
                  <p className="text-white text-center mt-2 px-4">
                    {selectedMedia.caption}
                  </p>
                </div>
              </div>
            )}

            <div className="md:hidden w-full h-screen overflow-y-auto mt-2 px-2 block">
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

export default Media;

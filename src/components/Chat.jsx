import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { IoClose, IoArrowUpCircleOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";

const Chat = () => {
  const [chatData, setChatData] = useState({
    nama: "",
    asal: "",
    salam_untuk: "",
    pesan: "",
    requested_song: "",
  });
  const [chat, setChat] = useState(false);

  const toggleChat = () => setChat(!chat);

  const handleChange = (e) => {
    setChatData({ ...chatData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !chatData.nama ||
      !chatData.asal ||
      !chatData.salam_untuk ||
      !chatData.pesan ||
      !chatData.requested_song
    ) {
      toast.error("Semua kolom harus diisi!");
      return;
    }

    const formData = new FormData();
    formData.append("nama", chatData.nama);
    formData.append("asal", chatData.asal);
    formData.append("salam_untuk", chatData.salam_untuk);
    formData.append("pesan", chatData.pesan);
    formData.append("requested_song", chatData.requested_song);

    try {
      const res = await axios.post(
        "https://uvonradiojakarta.com/uvon/request/request.php",
        formData
      );
      if (res.status === 200) {
        toast.success("Pesan anda berhasil disampaikan!");
        setChatData({
          nama: "",
          asal: "",
          salam_untuk: "",
          pesan: "",
          requested_song: "",
        }); // Reset form
      }
    } catch (error) {
      toast.error("Pesan gagal dikirim. Coba lagi!");
      console.error(error);
    }
  };

  return (
    <>
      <div
        onClick={toggleChat}
        className={`h-12 w-12 rounded-full flex justify-center p-2 cursor-pointer 
          ${
            chat
              ? "bg-red-500 text-white"
              : "bg-gray-300 hover:bg-red-500 hover:text-white transition duration-300"
          }`}
      >
        <MdMessage className="text-[35px]" />
      </div>

      {chat && (
        <div className="fixed md:absolute md:h-auto h-screen w-screen md:w-[400px] bg-gray-300 right-0 top-0 md:right-5 md:top-3 rounded-xl z-40">
          <div className="flex justify-between p-5">
            <p>Rhythms and Greetings:</p>
            <button
              onClick={toggleChat}
              className="hover:text-red-500 transition duration-300"
            >
              <IoClose className="text-2xl cursor-pointer" />
            </button>
          </div>
          <p className="text-gray-400 px-5 pb-5">Uvonia Request Form</p>
          <hr />
          <div className="p-5 px-5 md:px-10">
            <div className="text-center">
              <img
                src="/logo_uvon.svg"
                alt="UVON Logo"
                className="w-15 mx-auto"
              />
              <p className="text-[12px] mt-5">
                Kami di UVON Radio Jakarta ingin mendengar dari Uvonia! Kirimkan
                Permintaan Lagu Favorit dan Titipkan Salam untuk Orang Terdekat!
              </p>
            </div>

            <div className="bg-[#FEFF01] relative w-80 p-5 rounded-2xl mt-5">
              <p className="text-[12px] mb-3">
                Isi Form Berikut dan Biarkan Kami Menyampaikan Irama dan Pesan
                Uvonia ke Udara!
              </p>

              <div className="flex gap-2 mt-2">
                <label htmlFor="nama" className="text-[12px]">
                  Nama:
                </label>
                <input
                  type="text"
                  name="nama"
                  value={chatData.nama}
                  onChange={handleChange}
                  className="focus:outline-none text-[12px] border-b flex-1"
                />
              </div>

              <div className="flex gap-2 mt-2">
                <label htmlFor="asal" className="text-[12px]">
                  Asal:
                </label>
                <input
                  type="text"
                  name="asal"
                  value={chatData.asal}
                  onChange={handleChange}
                  className="focus:outline-none text-[12px] border-b flex-1"
                />
              </div>

              <div className="flex gap-2 mt-2">
                <label htmlFor="salam_untuk" className="text-[12px]">
                  Salam Untuk:
                </label>
                <input
                  type="text"
                  name="salam_untuk"
                  value={chatData.salam_untuk}
                  onChange={handleChange}
                  className="focus:outline-none text-[12px] border-b flex-1"
                />
              </div>

              <div className="flex gap-2 mt-2">
                <label htmlFor="pesan" className="text-[12px]">
                  Pesan:
                </label>
                <input
                  type="text"
                  name="pesan"
                  value={chatData.pesan}
                  onChange={handleChange}
                  className="focus:outline-none text-[12px] border-b flex-1"
                />
              </div>

              <div className="flex gap-2 mt-2">
                <label htmlFor="requested_song" className="text-[12px]">
                  Lagu yang Diminta:
                </label>
                <input
                  type="text"
                  name="requested_song"
                  value={chatData.requested_song}
                  onChange={handleChange}
                  className="focus:outline-none text-[12px] border-b flex-1"
                />
              </div>

              <div className="w-0 h-0 border-l-[25px] border-l-transparent border-t-[50px] border-t-[#FEFF01] border-r-[25px] border-r-transparent absolute top-50 left-0"></div>
            </div>
            <br />
            <button
              onClick={handleSubmit}
              className="w-full bg-[#A4A4A4] p-4 mt-5 rounded-2xl flex justify-between items-center hover:bg-red-500 hover:text-white transition duration-300 cursor-pointer"
            >
              <span className="text-[14px]">We’d Love to Hear From You!</span>
              <IoArrowUpCircleOutline className="text-[30px]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;

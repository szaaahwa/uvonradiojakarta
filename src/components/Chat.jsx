import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";
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
  const HandleChat = () => {
    setChat(!chat);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChatData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async ()=>{
    const res = await axios.post("/")

    if(res.status == 200){
      toast.success("Pesan anda berhasil disampaikan!")
    }if(res.status!=200){
      toast.error("Pesan Gagal Dikirim")
    }
  }

  return (
    <>
      <div
        onClick={HandleChat}
        className={
          chat
            ? "bg-red-500 h-12 w-12 rounded-full flex justify-center p-2 cursor-pointer text-white"
            : "bg-gray-300 h-12 w-12 rounded-full flex justify-center p-2 cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out"
        }
      >
        <MdMessage className="text-[35px]" />
      </div>
      {/* isi chat */}
      {chat && (
        <div className="md:absolute fixed md:h-auto h-screen w-screen md:w-[400px] bg-gray-300 right-0 top-0 md:right-5 md:top-3 rounded-xl transition-all ease-in-out duration-300 z-40">
          <div className="flex justify-between pt-5 px-5">
            <p>Rhythms and Greetings : </p>
            <button
              onClick={HandleChat}
              className="cursor-pointer hover:text-red-500 duration-300 ease-in-out transition-colors"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>
          <p className="text-gray-400 px-5 pb-5">Uvonia Request Form</p>
          <hr />
          <div className="p-5 px-10">
            <div className="">
              <div className="flex justify-center">
                <img src="/logo_uvon.svg" alt="" className="w-15" />
              </div>
              <p className="text-justify mt-5 text-[12px]">
                Kami di UVON Radio Jakarta ingin mendengar dari Uvonia! Kirimkan
                Permintaan Lagu Favorit Uvonia dan Titipkan Salam atau Pesan
                Spesial untuk Orang - Orang Terdekat!
              </p>
              <br />
              <br />

              <div className="bg-[#FEFF01] relative w-80 p-5 rounded-2xl">
                <div>
                  <p className="text-[12px]">
                    Isi Form Berikut dan Biarkan Kami Menyampaikan Irama dan
                    Pesan Uvonia ke Udara!
                  </p>
                  <br />
                  <div className="flex gap-2">
                    <label htmlFor="nama" className="text-[12px]">
                      Nama :
                    </label>
                    <input
                      type="text"
                      name="nama"
                      onChange={handleChange}
                      value={chatData.nama}
                      className="focus:outline-none text-[12px] border-b"
                    />
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor="nama" className="text-[12px]">
                      Asal :
                    </label>
                    <input
                      type="text"
                      name="asal"
                      onChange={handleChange}
                      value={chatData.asal}
                      className="focus:outline-none text-[12px] border-b"
                    />
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor="nama" className="text-[12px]">
                      Salam Untuk :
                    </label>
                    <input
                      type="text"
                      name="salam_untuk"
                      onChange={handleChange}
                      value={chatData.salam_untuk}
                      className="focus:outline-none text-[12px] border-b"
                    />
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor="nama" className="text-[12px]">
                      Pesan :
                    </label>
                    <input
                      type="text"
                      name="pesan"
                      onChange={handleChange}
                      value={chatData.pesan}
                      className="focus:outline-none text-[12px] border-b"
                    />
                  </div>
                  <div className="flex gap-2">
                    <label htmlFor="nama" className="text-[12px] z-30">
                      Lagu yang di request :
                    </label>
                    <input
                      type="text"
                      name="requested_song"
                      onChange={handleChange}
                      value={chatData.requested_song}
                      className="focus:outline-none text-[12px] border-b"
                    />
                  </div>
                </div>
                <div
                  className="w-0 h-0 
                              border-l-[25px] border-l-transparent
                              border-t-[50px] border-t-[#FEFF01]
                              border-r-[25px] border-r-transparent 
                              absolute top-40 left-0 z-20"
                ></div>
              </div>
              <div
                onClick={handleSubmit}
                className="bg-[#A4A4A4] p-5 mt-10 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                <p className="text-[14px]">We’d Love to Hear From You!</p>
                <IoArrowUpCircleOutline className="text-[30px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;

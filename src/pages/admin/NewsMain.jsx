import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import axios from "axios";
import toast from "react-hot-toast";
import NewsModal from "../../components/admin/News/NewsModal";

const NewsMain = () => {
  const [newsData, setNewsData] = useState({
    judul: "",
    nama_penulis: "",
    foto: "",
    isi: "",
    kategori: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChangeHandle = (e) => {
    const { name, value, files, type } = e.target;
    setNewsData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", newsData.judul);
    formData.append("nama_penulis", newsData.nama_penulis);
    formData.append("foto", newsData.foto);
    formData.append("isi", newsData.isi);
    formData.append("kategori", newsData.kategori);

    try {
      const res = await axios.post(
        "http://uvon.test/news/add_news.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        toast.success("Berhasil Menambahkan Berita!");
        setNewsData({
          judul: "",
          nama_penulis: "",
          foto: "",
          isi: "",
          kategori: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleBantuan = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex gap-5 bg-black font-sans">
        <Sidebar />
        <div className="p-5  w-screen border overflow-y-scroll">
          <div className="bg-gray-200 rounded-2xl m-5 w-240">
            <div className="w-full bg-red-500 text-white rounded-t-xl p-2">
              <p className="font-bold text-2xl">Tambah Berita</p>
            </div>
            <form method="post" className="flex flex-col" encType="multipart/formdata">
              <div className="p-5 flex gap-5 ">
                <div className="flex flex-col">
                  <label htmlFor="judul" className="font-bold text-black">
                    Judul Berita
                  </label>
                  <input
                    type="text"
                    name="judul"
                    value={newsData.judul}
                    onChange={onChangeHandle}
                    className="border-black border-2 rounded-lg  p-1 w-75"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="judul" className="font-bold text-black">
                    Nama Penulis
                  </label>
                  <input
                    type="text"
                    name="nama_penulis"
                    value={newsData.nama_penulis}
                    onChange={onChangeHandle}
                    className="border-black border-2 rounded-lg  p-1"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="kategori" className="font-bold text-black">
                    Kategori Berita
                  </label>
                  <select
                    name="kategori"
                    value={newsData.kategori}
                    onChange={onChangeHandle}
                    className="border-black border-2 rounded-lg p-1 w-50"
                    required
                  >
                    <option value="" disabled>
                      Pilih Kategori
                    </option>

                    <option value="UVON Campus">UVON Campus</option>
                    <option value="UVON Music">UVON Music</option>
                    <option value="UVON Lifestyle">UVON Lifestyle</option>
                    <option value="UVON Entertainment">
                      UVON Entertainment
                    </option>
                    <option value="UVON Sport">UVON Sport</option>
                    <option value="UVON Maps">UVON Maps</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="foto"
                    className="font-bold text-white cursor-pointer bg-gradient-to-t from-[#761F21] to-[#FB3748] rounded text-center py-5 px-2 hover:to-[#ce3340] ease-in-out transition-all duration-300 w-40 "
                  >
                    <p className="line-clamp-1 text-sm">
                      {newsData.foto
                        ? `${newsData.foto.name}`
                        : "Upload Gambar"}
                    </p>
                  </label>
                </div>
                <input
                  id="foto"
                  type="file"
                  name="foto"
                  onChange={onChangeHandle}
                  className="border-black border-2 rounded-lg  p-1"
                  required
                  hidden
                />
              </div>
              <div className="flex flex-col p-4">
                <label htmlFor="isi" className="font-bold">
                  Isi Berita
                </label>
                <p
                  onClick={handleBantuan}
                  className="cursor-pointer text-[14px] text-red-600 w-45 "
                >
                  *Bantuan pengisian isi Berita
                </p>
                <textarea
                  type="text"
                  name="isi"
                  value={newsData.isi}
                  onChange={onChangeHandle}
                  className="border-black border-2 rounded-lg  p-1 h-50"
                />
              </div>
            <div className="flex justify-end">
              <button
                className="py-2 px-6 bg-red-500 text-white rounded text-2xl font-bold text-center m-4 cursor-pointer hover:bg-red-600 duration-300 ease-in-out transition-all"
                onClick={submitData}
                type="submit"
              >
                Simpan
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      <NewsModal
        isOpen={isModalOpen}
        onClose={handleClose}
        
      />
    </>
  );
};

export default NewsMain;

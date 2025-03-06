import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import axios from "axios";
import toast from "react-hot-toast";
import NewsModal from "../../components/admin/News/NewsModal";
import NewsList from "../../components/admin/News/NewsList";

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
        { headers: { "Content-Type": "multipart/form-data" } }
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

  const handleBantuan = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <>
      <Sidebar />
      <div className="flex flex-col md:flex-row bg-black min-h-screen font-sans">
        <div className="flex-1 p-5 w-full md:ml-50">
          <p className="text-2xl md:text-4xl font-bold text-white border-white border-b-2 p-2 mb-5">
            Tambah Berita
          </p>
          <div className="bg-[#252525] rounded-2xl p-5 text-white w-full">
            <form
              method="post"
              className="flex flex-col space-y-5"
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="judul" className="font-bold">
                    Judul Berita
                  </label>
                  <input
                    type="text"
                    name="judul"
                    value={newsData.judul}
                    onChange={onChangeHandle}
                    className="border-white border-2 rounded-lg p-2 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="nama_penulis" className="font-bold">
                    Nama Penulis
                  </label>
                  <input
                    type="text"
                    name="nama_penulis"
                    value={newsData.nama_penulis}
                    onChange={onChangeHandle}
                    className="border-white border-2 rounded-lg p-2 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="kategori" className="font-bold">
                    Kategori Berita
                  </label>
                  <select
                    name="kategori"
                    value={newsData.kategori}
                    onChange={onChangeHandle}
                    className="border-white border-2 rounded-lg p-2 w-full"
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
                <div className="flex flex-col">
                  <label
                    htmlFor="foto"
                    className="font-bold text-white cursor-pointer bg-gradient-to-t from-[#761F21] to-[#FB3748] rounded text-center py-5 px-2 hover:to-[#ce3340] transition-all duration-300"
                  >
                    {newsData.foto ? newsData.foto.name : "Upload Gambar"}
                  </label>
                  <input
                    id="foto"
                    type="file"
                    name="foto"
                    onChange={onChangeHandle}
                    className="hidden"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="isi" className="font-bold">
                  Isi Berita
                </label>
                <p
                  onClick={handleBantuan}
                  className="cursor-pointer text-[14px] text-red-600"
                >
                  *Bantuan pengisian isi Berita
                </p>
                <textarea
                  name="isi"
                  value={newsData.isi}
                  onChange={onChangeHandle}
                  className="border-white border-2 rounded-lg p-2 min-h-[150px]"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="py-2 px-6 bg-red-500 text-white rounded text-lg md:text-2xl font-bold hover:bg-red-600 transition-all"
                  onClick={submitData}
                  type="submit"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
          <p className="text-2xl md:text-4xl font-bold text-white border-white mb-5 mt-10 border-b-2 p-2">
            List Berita
          </p>
          <div className="px-2">
            <NewsList />
          </div>
        </div>
        <NewsModal isOpen={isModalOpen} onClose={handleClose} />
      </div>
    </>
  );
};

export default NewsMain;

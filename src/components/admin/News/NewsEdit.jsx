import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Sidebar from "../Sidebar";
import NewsModal from "./NewsModal";

const NewsEdit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [newsData, setNewsData] = useState({
    judul: "",
    nama_penulis: "",
    foto: "",
    isi: "",
    kategori: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentFoto, setCurrentFoto] = useState("");


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://uvonradiojakarta.com/uvon/news/get_news.php?id=${id}`);
        const { judul, nama_penulis, foto, isi, kategori } = response.data;

        setNewsData({
          judul: judul || "",
          nama_penulis: nama_penulis || "",
          isi: isi || "",
          kategori: kategori || "",
          foto: "",
        });

        setCurrentFoto(`https://uvonradiojakarta.com/uvon/news/${foto}`); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        toast.error("Gagal mengambil data berita");
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

 
  const onChangeHandle = (e) => {
    const { name, value, files, type } = e.target;
    setNewsData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));

    if (type === "file") {
      setCurrentFoto(URL.createObjectURL(files[0])); 
    }
  };

  
  const submitData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("judul", newsData.judul);
    formData.append("nama_penulis", newsData.nama_penulis);
    formData.append("isi", newsData.isi);
    formData.append("kategori", newsData.kategori);

    if (newsData.foto instanceof File) {
      formData.append("foto", newsData.foto);
    }

    try {
      const res = await axios.post(
        "https://uvonradiojakarta.com/uvon/news/edit_news.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200) {
        toast.success("Berita berhasil diperbarui!");
        navigate("/admin/news"); 
      }
    } catch (error) {
      console.error("Error updating news:", error);
      toast.error("Terjadi kesalahan saat memperbarui berita");
    }
  };
   useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [isModalOpen]);
  

  return (
    <>
      <Sidebar />
      <div className="flex gap-5 bg-black min-h-screen font-sans">
        <div className="p-5 ml-55">
          <p className="text-4xl font-bold text-white border-white border-b-2 p-2 m-1 mb-5">
            Edit Berita
          </p>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <div className="bg-[#252525] rounded-2xl m-2 w-240 text-white">
              <div className="p-5">
                <form
                  method="post"
                  className="flex flex-col"
                  encType="multipart/form-data"
                  onSubmit={submitData}
                >
                  <div className="p-5 flex gap-5">
                    <div className="flex flex-col">
                      <label htmlFor="judul" className="font-bold">
                        Judul Berita
                      </label>
                      <input
                        type="text"
                        name="judul"
                        value={newsData.judul}
                        onChange={onChangeHandle}
                        className="border-white border-2 rounded-lg p-1 w-65"
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
                        className="border-white border-2 rounded-lg p-1"
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
                        className="border-white border-2 rounded-lg p-1 w-50"
                        required
                      >
                        <option value="" disabled>
                          Pilih Kategori
                        </option>
                        <option value="UVON Campus">UVON Campus</option>
                        <option value="UVON Music">UVON Music</option>
                        <option value="UVON Lifestyle">UVON Lifestyle</option>
                        <option value="UVON Entertainment">UVON Entertainment</option>
                        <option value="UVON Sport">UVON Sport</option>
                        <option value="UVON Maps">UVON Maps</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="foto"
                        className="font-bold text-white cursor-pointer bg-gradient-to-t from-[#761F21] to-[#FB3748] rounded text-center py-5 px-2 hover:to-[#ce3340] transition-all duration-300 w-40"
                      >
                        <p className="line-clamp-1 text-sm">
                          {newsData.foto ? newsData.foto.name : "Upload Gambar"}
                        </p>
                      </label>
                      <input
                        id="foto"
                        type="file"
                        name="foto"
                        onChange={onChangeHandle}
                        className="hidden"
                      />
                      {currentFoto && (
                        <img src={`${currentFoto}`} alt="Preview" className="mt-2 w-40 rounded-lg" />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col px-4">
                    <label htmlFor="isi" className="font-bold">
                      Isi Berita
                    </label>
                    <textarea
                      name="isi"
                      value={newsData.isi}
                      onChange={onChangeHandle}
                      className="border-white border-2 rounded-lg p-1 h-50"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="py-2 px-6 bg-red-500 text-white rounded text-2xl font-bold text-center m-4 cursor-pointer hover:bg-red-600 transition-all"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <NewsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default NewsEdit;

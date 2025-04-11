import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Sidebar from "../Sidebar";

const MediaEdit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [mediaData, setMediaData] = useState({
    caption: "",
    foto: null, 
  });
  const [currentFoto, setCurrentFoto] = useState("");

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(`https://uvonradiojakarta.com/uvon/media/add_media.php?id=${id}`);
        const { caption, foto } = response.data;

        setMediaData({ caption });
        setCurrentFoto(foto ? `https://uvonradiojakarta.com/uvon/media/${foto}` : "");
      } catch (error) {
        console.error("Error fetching media:", error);
        toast.error("Gagal mengambil data media");
      }
    };

    fetchMedia();
  }, [id]);

  const onChangeHandle = (e) => {
    const { name, value, files, type } = e.target;
    setMediaData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id); 
    formData.append("caption", mediaData.caption);
    if (mediaData.foto) {
      formData.append("foto", mediaData.foto); 
    }

    try {
      const res = await axios.post(
        "https://uvonradiojakarta.com/uvon/media/edit_media.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200) {
        toast.success("Media berhasil diperbarui!");
        navigate("/admin/media");
      }
    } catch (error) {
      console.error("Error updating media:", error);
      toast.error("Gagal memperbarui media");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="flex flex-col md:flex-row bg-black h-screen font-sans overflow-auto">
        <div className="flex-1 p-5 w-full md:ml-50">
          <p className="text-2xl md:text-4xl font-bold text-white border-white border-b-2 p-2 mb-5">
            Edit Media
          </p>
          <div className="bg-[#252525] rounded-2xl p-5 text-white w-full">
            <form
              method="post"
              className="flex flex-col space-y-5"
              encType="multipart/form-data"
              onSubmit={submitData} 
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="caption" className="font-bold">
                    Caption Media
                  </label>
                  <input
                    type="text"
                    name="caption"
                    value={mediaData.caption}
                    onChange={onChangeHandle}
                    className="border-white border-2 rounded-lg p-2 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foto"
                    className="font-bold text-white cursor-pointer bg-gradient-to-t from-[#761F21] to-[#FB3748] rounded text-center py-5 px-2 hover:to-[#ce3340] transition-all duration-300"
                  >
                    {mediaData.foto ? mediaData.foto.name : "Upload Gambar Baru (Opsional)"}
                  </label>
                  <input
                    id="foto"
                    type="file"
                    name="foto"
                    onChange={onChangeHandle}
                    className="hidden"
                  />
                  {currentFoto && (
                    <img
                      src={currentFoto}
                      alt="Preview"
                      className="mt-2 w-40 rounded-lg"
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  className="py-2 px-6 bg-red-500 text-white rounded text-lg md:text-2xl font-bold hover:bg-red-600 transition-all cursor-pointer"
                  type="submit"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaEdit;

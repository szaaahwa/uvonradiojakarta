import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Sidebar from "../Sidebar";

const ProgramEdit = () => {
    const { id } = useParams(); 
  const navigate = useNavigate();

  const [programData, setprogramData] = useState({
    nama_program: "",
    foto: null, 
  });
  const [currentFoto, setCurrentFoto] = useState("");

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const response = await axios.get(`http://uvon.test/program/edit_program.php?id=${id}`);
        const { nama_program, foto } = response.data;

        setprogramData({ nama_program });
        setCurrentFoto(foto ? `http://uvon.test/program/${foto}` : "");
      } catch (error) {
        console.error("Error fetching Program:", error);
        toast.error("Gagal mengambil data Program");
      }
    };

    fetchProgram();
  }, [id]);

  const onChangeHandle = (e) => {
    const { name, value, files, type } = e.target;
    setprogramData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id); 
    formData.append("nama_program", programData.nama_program);
    if (programData.foto) {
      formData.append("foto", programData.foto); 
    }

    try {
      const res = await axios.post(
        "http://uvon.test/program/edit_program.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200) {
        toast.success("Program berhasil diperbarui!");
        navigate("/admin/Program");
      }
    } catch (error) {
      console.error("Error updating Program:", error);
      toast.error("Gagal memperbarui Program");
    }
  };
  return (
    <>
    <Sidebar />
    <div className="flex flex-col md:flex-row bg-black h-screen font-sans overflow-auto">
      <div className="flex-1 p-5 w-full md:ml-50">
        <p className="text-2xl md:text-4xl font-bold text-white border-white border-b-2 p-2 mb-5">
          Edit Program
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
                <label htmlFor="nama_program" className="font-bold">
                  Nama Program
                </label>
                <input
                  type="text"
                  name="nama_program"
                  value={programData.nama_program}
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
                  {programData.foto ? programData.foto.name : "Upload Gambar Baru (Opsional)"}
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
  )
}

export default ProgramEdit
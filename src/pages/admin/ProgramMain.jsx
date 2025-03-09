import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import axios from "axios";
import toast from "react-hot-toast";
import ProgramList from "../../components/admin/Program/ProgramList";

const ProgramMain = () => {
  const [programData, setprogramData] = useState({
    nama_program: "",
    foto: "",
  });

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
    formData.append("nama_program", programData.nama_program);
    formData.append("foto", programData.foto);

    try {
      const res = await axios.post(
        "http://uvon.test/program/program.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (res.status === 200) {
        toast.success("Berhasil Menambahkan Program Baru!");
        setprogramData({
          nama_program: "",
          foto: "",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Sidebar />
      <div className="flex flex-col md:flex-row bg-black h-screen font-sans overflow-auto">
        <div className="flex-1 p-5 w-full md:ml-50">
          <p className="text-2xl md:text-4xl font-bold text-white border-white border-b-2 p-2 mb-5">
            Tambah Program Baru
          </p>
          <div className="bg-[#252525] rounded-2xl p-5 text-white w-full">
            <form
              method="post"
              className="flex flex-col space-y-5"
              encType="multipart/form-data"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="nama_program" className="font-bold">
                    nama Program 
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
                    {programData.foto ? programData.foto.name : "Upload Gambar"}
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

              <div className="flex justify-end">
                <button
                  className="py-2 px-6 bg-gradient-to-t from-[#761F21] to-[#FB3748]  text-white rounded text-lg md:text-2xl font-bold hover:to-[#ce3340] transition-all cursor-pointer"
                  onClick={submitData}
                  type="submit"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
          <p className="text-2xl md:text-4xl font-bold text-white border-white mb-5 mt-10 border-b-2 p-2">
            List Program 
          </p>
          <div className="px-2 py-5"><ProgramList/></div>
        </div>
      </div>
    </>
  );
};

export default ProgramMain;

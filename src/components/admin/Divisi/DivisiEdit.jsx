import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Select from "react-select";
import Sidebar from "../Sidebar";
import axios from "axios";
import toast from "react-hot-toast";

const divisiOptions = [
  { value: "Manager", label: "Manager" },
  { value: "Executive Producer", label: "Executive Producer" },
  { value: "Sekretaris", label: "Sekretaris" },
  { value: "Bendahara", label: "Bendahara" },
  { value: "HRD", label: "HRD" },
  { value: "Produser Program", label: "Produser Program" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "Creative Design", label: "Creative Design" },
  { value: "Public Relation", label: "Public Relation" },
  { value: "Reporter", label: "Reporter" },
  { value: "Aset IT", label: "Aset IT" },
  { value: "Music Director", label: "Music Director" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#252525",
    borderColor: state.isFocused ? "#fff" : "#555",
    color: "#fff",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#fff",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#252525",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#761F21" : "#252525",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#FB3748",
    },
  }),
};

const DivisiEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [DivisiData, setDivisiData] = useState({
    nama: "",
    nama_divisi: null,
    foto: "",
  });
  const [currentFoto, setCurrentFoto] = useState(null);

  useEffect(() => {
    axios.get(`http://uvon.test/divisi/divisi.php?id=${id}`)
      .then((res) => {
        const { nama, nama_divisi, foto } = res.data;
        setDivisiData({ nama, nama_divisi: divisiOptions.find(opt => opt.value === nama_divisi), foto: "" });
        setCurrentFoto(foto);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const onChangeHandle = (selectedOption) => {
    setDivisiData((prev) => ({ ...prev, nama_divisi: selectedOption }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("nama", DivisiData.nama);
    formData.append("nama_divisi", DivisiData.nama_divisi?.value || "");
    if (DivisiData.foto) {
      formData.append("foto", DivisiData.foto);
    }
    
    try {
      const res = await axios.post(
        "https://uvonradiojakarta.com/uvon/divisi/edit_divisi.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (res.status === 200) {
        toast.success("Divisi berhasil diperbarui!");
        navigate("/admin/divisi");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="flex flex-col md:flex-row bg-black h-screen font-sans overflow-auto">
        <div className="flex-1 p-5 w-full md:ml-50">
          <p className="text-2xl md:text-4xl font-bold text-white border-white border-b-2 p-2 mb-5">
            Edit Divisi
          </p>
          <div className="bg-[#252525] rounded-2xl p-5 text-white w-full">
            <form method="post" className="flex flex-col space-y-5" encType="multipart/form-data">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="nama" className="font-bold">Nama Anggota</label>
                  <input
                    type="text"
                    name="nama"
                    value={DivisiData.nama}
                    onChange={(e) => setDivisiData({ ...DivisiData, nama: e.target.value })}
                    className="border-white border-2 rounded-lg p-2 w-full text-white"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold">Divisi</label>
                  <Select
                    options={divisiOptions}
                    value={DivisiData.nama_divisi}
                    onChange={onChangeHandle}
                    className="text-white border-2 border-white rounded"
                    placeholder="Pilih Divisi"
                    styles={customStyles}
                    menuPlacement="auto"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="foto"
                    className="font-bold text-white cursor-pointer bg-gradient-to-t from-[#761F21] to-[#FB3748] rounded text-center py-5 px-2 hover:to-[#ce3340] transition-all duration-300"
                  >
                    {DivisiData.foto ? DivisiData.foto.name : "Upload Gambar Baru (Opsional)"}
                  </label>
                  <input
                    id="foto"
                    type="file"
                    name="foto"
                    onChange={(e) => setDivisiData({ ...DivisiData, foto: e.target.files[0] })}
                    className="hidden"
                  />
                  {currentFoto && (
                    <img
                      src={`https://uvonradiojakarta.com/uvon/divisi/${currentFoto}`}
                      alt="Preview"
                      className="mt-2 w-40 rounded-lg"
                    />
                  )}
                </div>
               
              </div>
              <div className="flex justify-end">
                <button
                  className="py-2 px-6 bg-gradient-to-t from-[#761F21] to-[#FB3748] text-white rounded text-lg md:text-2xl font-bold hover:to-[#ce3340] transition-all cursor-pointer"
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
    </>
  );
};

export default DivisiEdit;

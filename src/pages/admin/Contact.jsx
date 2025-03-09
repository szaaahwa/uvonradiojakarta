import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Sidebar from "../../components/admin/Sidebar";

const Contact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contactData, setcontactData] = useState({
    nama: "",
    email: "",
    telpon: "",
    foto: null,
  });

  useEffect(() => {
    const fetchcontact = async () => {
      try {
        const response = await axios.get(
          `http://uvon.test/contact/contact.php?id=${1}`
        );
        const { nama, email, telpon } = response.data;

        setcontactData({ nama, email, telpon });
      } catch (error) {
        console.error("Error fetching contact:", error);
        toast.error("Gagal mengambil data contact");
      }
    };

    fetchcontact();
  }, [id]);

  const onChangeHandle = (e) => {
    const { name, value, files, type } = e.target;
    setcontactData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("nama", contactData.nama);
    formData.append("email", contactData.email);
    formData.append("telpon", contactData.telpon);

    try {
      const res = await axios.post(
        "http://uvon.test/contact/contact.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200) {
        toast.success("contact berhasil diperbarui!");
        navigate("/admin/contact");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Gagal memperbarui contact");
    }
  };
  return (
    <>
      <Sidebar />
      <div className="flex flex-col md:flex-row bg-black h-screen font-sans overflow-auto">
        <div className="flex-1 p-5 w-full md:ml-50">
          <p className="text-2xl md:text-4xl font-bold text-white border-white border-b-2 p-2 mb-5">
            Contact
          </p>
          <div className="bg-[#252525] rounded-2xl p-5 text-white w-full">
            <form
              method="post"
              className="flex flex-col space-y-5"
              encType="multipart/form-data"
              onSubmit={submitData}
              autoComplete="off"
              
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="nama" className="font-bold">
                    Nama Penanggung Jawab
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={contactData.nama}
                    onChange={onChangeHandle}
                    className="border-white border-2 rounded-lg p-2 w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={contactData.email}
                    onChange={onChangeHandle}
                    className="border-white border-2 rounded-lg p-2 w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="telpon" className="font-bold">
                    No Telpon
                  </label>
                  <input
                    type="text"
                    name="telpon"
                    value={contactData.telpon}
                    onChange={onChangeHandle}
                    className="border-white border-2 rounded-lg p-2 w-full"
                    required
                  />
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

export default Contact;

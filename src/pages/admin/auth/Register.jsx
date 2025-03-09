import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import bcrypt from "bcryptjs"; 

const Register = () => {
  const [formData, setFormData] = useState({ username: "", pass: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(formData.pass, salt);

 
      const form = new FormData();
      form.append("username", formData.username);
      form.append("pass", hashedPass);


      const response = await axios.post("http://uvon.test/auth/admin.php", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        toast.success("Registration successful! Please login.", { duration: 4000 });

        setFormData({ username: "", pass: "" });

   
        navigate("/admin/login");
      } else {
        console.error("Server response:", response.data);
        toast.error("An error occurred: " + response.data.error);
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      toast.error("An error occurred while processing your request.");
    }
  };

  return (
    <div className="bg-[#5F0F0D] w-screen h-screen flex">
      <img src="/login/login_bg.svg" alt="bg" className="object-cover w-140" />
      <div className="p-15">
        <div className="bg-white flex-col w-150 rounded-2xl p-5">
          <img src="/logo_uvon.svg" alt="" className="mx-auto" />
          <p className="font-bold text-2xl text-[#881B1F] text-center mt-1">
            Register for UVON Radio Jakarta
          </p>
          <br />
          <br />
          <form className="w-full" onSubmit={handleSubmit} autoComplete="off">
            <div className="flex flex-col px-10">
              <p className="md:text-xl font-bold">Username</p>
              <input
                type="text"
                name="username"
                className="border-1 md:text-xl px-4 py-2"
                onChange={handleChange}
                value={formData.username}
                required
              />
            </div>
            <br />
            <div className="flex flex-col px-10">
              <p className="md:text-xl font-bold">Password</p>
              <input
                type="password"
                name="pass"
                className="border-1 md:text-xl px-4 py-2 w-full"
                onChange={handleChange}
                value={formData.pass}
                required
              />
            </div>
            <button
              className="bg-[#5F0F0D] text-white font-bold mt-5 py-3 rounded-full cursor-pointer"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

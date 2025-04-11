import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import axios from "axios";
import bcrypt from "bcryptjs";
import { toast } from "react-hot-toast";

const Login = () => {
  const [login, setLogin] = useState({ username: "", pass: "" });
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://uvonradiojakarta.com/uvon//auth/admin.php"); 
        if (res.data && res.data.users) {
          setUserData(res.data.users);
        } else {
          console.error("Invalid API response structure:", res.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userData) {
        toast.error("User data is not available. Please try again.");
        return;
    }

    try {
        const user = userData.find((user) => user.username === login.username);
        if (!user) {
            toast.error("Username atau password salah!");
            return;
        }

        const isMatch = await bcrypt.compare(login.pass, user.password || '');
        if (isMatch) {
          await axios.post("https://uvonradiojakarta.com/uvon/auth/admin.php", {
                username: login.username,
                login: 1,  
            });

            toast.success("Login successful!");
            localStorage.setItem("user", JSON.stringify(user));
            setTimeout(() => {
                navigate("/admin/dashboard");
            }, 1000);
        } else {
            toast.error("Username atau password salah!");
        }
    } catch (error) {
        console.error("Login error:", error);
        toast.error("An error occurred. Please try again.");
    }
};

  return (
    <div className="bg-[#5F0F0D] w-screen h-screen flex">
      <img src="/login/login_bg.svg" alt="bg" className="object-cover w-140" />
      <div className="p-15">
        <div className="bg-white flex-col w-150 rounded-2xl p-5">
          <img src="/logo_uvon.svg" alt="" className="mx-auto" />
          <p className="font-bold text-2xl text-[#881B1F] text-center mt-1">
            Log in to UVON Radio Jakarta
          </p>
          <br />
          <br />
          <form className="w-full" onSubmit={handleLogin} autoComplete="off">
            <div className="flex flex-col px-10">
              <p className="md:text-xl font-bold">Username</p>
              <input
                type="text"
                name="username"
                className="border-1 md:text-xl px-4 py-2"
                onChange={onChangeHandle}
                value={login.username}
                required
              />
            </div>
            <br />
            <div className="flex flex-col px-10">
              <p className="md:text-xl font-bold">Password</p>
              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  name="pass"
                  className="border-1 md:text-xl px-4 py-2 w-full"
                  onChange={onChangeHandle}
                  value={login.pass}
                  required
                />
                {visible ? (
                  <IoEyeOffOutline
                    className="top-3 absolute right-5 text-2xl cursor-pointer"
                    onClick={toggleVisibility}
                  />
                ) : (
                  <IoEyeOutline
                    className="top-3 absolute right-5 text-2xl cursor-pointer"
                    onClick={toggleVisibility}
                  />
                )}
              </div>
              <button
                className="bg-[#5F0F0D] text-white font-bold mt-5 py-3 rounded-full cursor-pointer"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#761F21] to-[#FB3748] w-full p-10 flex flex-col md:flex-row text-left gap-5">
      {/* HUbungi kami */}
      <div>
        <h3 className="text-2xl text-white">Hubungi Kami</h3>
        <br />
        <ul className="text-white text-sm text-justify">
          <li>
            Alamat : Jl. Pulo Mas Timur No.3a, RT.1/RW.16, Kayu Putih, Kec. Pulo
            Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210
          </li>
          <br />
          <li>Telp : </li>
          <br />
          <li>E-mail : </li>
        </ul>
      </div>
      <br />
      <div className="text-center">
        <h3 className="text-2xl text-white">Alamat</h3>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6840738645383!2d106.88616077316658!3d-6.173036160488122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5202018a0dd%3A0x70a9472c7a3ea890!2sJl.%20Pulo%20Mas%20Timur%20No.3a%2C%20RT.1%2FRW.16%2C%20Kayu%20Putih%2C%20Kec.%20Pulo%20Gadung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013210!5e0!3m2!1sen!2sid!4v1739353325166!5m2!1sen!2sid"
          loading="lazy"
        ></iframe>
      </div>
      <div>
        <h3 className="md:text-2xl text-white text-center">Follow Us</h3>
        <br />
        <div className="flex gap-1">
          <a href="" className="text-5xl text-white"><FaSquareInstagram /></a>
          <a href="" className="text-5xl text-white"><AiFillTikTok /></a>
          <a href="" className="text-5xl text-white"><FaSquareXTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

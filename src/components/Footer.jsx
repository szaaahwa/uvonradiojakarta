import React, { useEffect, useState } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import axios from "axios";

const Footer = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get("http://uvon.test/contact/contact.php");
        if (res.data && res.data.contact && res.data.contact.length > 0) {
          setContact(res.data.contact[0]); // Ensure it's an object, not an array
        } else {
          console.warn("No contact data found");
          setContact(null);
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };
    fetchContact();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#761F21] to-[#FB3748] w-full p-5 md:h-[450px] flex flex-col md:flex-row text-left gap-5">
      
      {/* Hubungi Kami */}
      <div>
        <h3 className="text-2xl text-white">Hubungi Kami</h3>
        <br />
        <ul className="text-white text-sm text-justify">
          <li>
            Alamat: Jl. Pulo Mas Timur No.3a, RT.1/RW.16, Kayu Putih, Kec. Pulo Gadung,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210
          </li>
          <br />
          {contact ? (
            <>
              <li>Telp: {contact.telpon || "N/A"}</li>
              <br />
              <li>E-mail: {contact.email || "N/A"}</li>
            </>
          ) : (
            <li>Memuat kontak...</li>
          )}
        </ul>
      </div>

      {/* Alamat (Google Maps Embed) */}
      <div className="text-center flex-1">
        <h3 className="text-2xl text-white">Alamat</h3>
        <br />
        <iframe
          className="w-full md:w-[400px] h-[200px] md:h-[250px] rounded-md shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6840738645383!2d106.88616077316658!3d-6.173036160488122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5202018a0dd%3A0x70a9472c7a3ea890!2sJl.%20Pulo%20Mas%20Timur%20No.3a%2C%20RT.1%2FRW.16%2C%20Kayu%20Putih%2C%20Kec.%20Pulo%20Gadung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013210!5e0!3m2!1sen!2sid!4v1739353325166!5m2!1sen!2sid"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Follow Us (Social Media Links) */}
      <div className="text-center">
        <h3 className="md:text-2xl text-white">Follow Us</h3>
        <br />
        <div className="flex gap-3 justify-center">
          <a href={ "https://www.instagram.com/uvonradiojakarta?igsh=MTFpcnE0Zno3Z3J0cQ=="} target="_blank" rel="noopener noreferrer" className="text-5xl text-white hover:text-yellow-300 transition duration-300">
            <FaSquareInstagram />
          </a>
          <a href={ "https://www.tiktok.com/@uvonradiojakarta?_t=ZS-8uXtfbhmyBU&_r=1"} target="_blank" rel="noopener noreferrer" className="text-5xl text-white hover:text-yellow-300 transition duration-300">
            <AiFillTikTok />
          </a>
          <a href={"https://x.com/uvonradio?t=jpwM_XCU3W_9eQeHxnBYcA&s=09"} target="_blank" rel="noopener noreferrer" className="text-5xl text-white hover:text-yellow-300 transition duration-300">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

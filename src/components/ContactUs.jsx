import React, { useState,useEffect } from "react";
import axios from "axios";
const ContactUs = () => {
  const [isClick, setIsClick] = useState(false);
  const [isModal, setIsmodal] = useState(false);
  const [contact, setContact] = useState(null);
  const HandleOnClick = () => {
    setIsClick(!isClick);
    setIsmodal(!isModal);
  };

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get("https://uvonradiojakarta.com/uvon/contact/contact.php");
        if (res.data && res.data.contact && res.data.contact.length > 0) {
          setContact(res.data.contact[0]);
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
    <>
      <div className="relative">
        <div
          onClick={HandleOnClick}
          className={
            isClick
              ? "bg-red-500 p-2 px-4 rounded-full text-white transition-colors duration-300 ease-in-out cursor-pointer"
              : "bg-gray-300 p-2 px-4 rounded-full transition-colors duration-300 ease-in-out cursor-pointer hover:bg-red-500 hover:text-white"
          }
        >
          Contact Us
        </div>
        {isModal && (
          <div className="absolute top-12 rounded-lg bg-[#434343] w-[230px] p-2 text-white text-center z-50">
            <p className="text-xl">UVON CONTACT</p>
            {contact && (
              <p className="text-[12px] leading-4">
                {contact.nama} <br />
                {contact.email} <br /> {contact.telpon}
              </p>
            )}
            <p className="text-sm">Stay Connected with UVON</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUs;

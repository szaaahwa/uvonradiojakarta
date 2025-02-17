import React, { useState } from "react";

const ContactUs = () => {
  const [isClick, setIsClick] = useState(false);
  const [isModal, setIsmodal] = useState(false);
  const HandleOnClick = () => {
    setIsClick(!isClick);
    setIsmodal(!isModal);
  };
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
          <div className="absolute top-12 rounded-lg bg-[#434343] w-[230px] p-2 text-white text-center">
            <p className="text-xl">UVON CONTACT</p>
            <p className="text-[12px] leading-4">
              Kevin Rifqy Razzan <br />
              Uvonradiojakarta@gmail.com <br /> 0890876546576879
            </p>
            <p className="text-sm">Stay Connected with UVON</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUs;

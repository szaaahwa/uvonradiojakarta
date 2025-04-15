import React, { useEffect, useState } from "react";
import axios from "axios";

const ProgramShow = () => {
  const [program, setProgram] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAllProgram = async () => {
      try {
        const res = await axios.get(
          "https://uvonradiojakarta.com/uvon/program/program.php"
        );
        setProgram(res.data.program || []);
      } catch (error) {
        console.error("Error fetching programs:", error);
        setProgram([]);
      }
    };
    fetchAllProgram();
  }, []);

  const handleImageClick = (programItem) => {
    setSelectedProgram(programItem);
    setIsModalOpen(true);
  };

  return (
    <>
      {program.slice(-5).map((item, index) => (
        <div
          key={index}
          className="min-w-[200px] max-w-[220px] bg-[#252525] rounded-lg hover:bg-red-500 ease-in-out duration-300 cursor-pointer snap-center"
          onClick={() => handleImageClick(item)}
        >
          <div className="aspect-square overflow-hidden ">
            <img
              src={`https://uvonradiojakarta.com/uvon/program/${item.foto}`}
              alt={item.caption || "Program Image"}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = "logo_uvon.svg")}
              loading="lazy"
            />
          </div>
          <div className="p-2 text-white text-center">
            <p className="text-sm font-semibold">{item.nama_program}</p>
          </div>
        </div>
      ))}

      {isModalOpen && selectedProgram && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 overflow-y-scroll"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="flex flex-col items-center">
            <img
              src={`https://uvonradiojakarta.com/uvon/program/${selectedProgram.foto}`}
              alt={selectedProgram.nama_program}
              className="w-3/4 md:w-[400px] rounded-md shadow-lg"
            />
            <p className="text-white text-center mt-2 px-4">
              {selectedProgram.nama_program}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramShow;

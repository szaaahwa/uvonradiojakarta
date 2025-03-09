import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const DivisiList = () => {
    const [divisi, setdivisi] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(10);
    useEffect(() => {
      const fetchAlldivisi = async () => {
        try {
          const res = await axios.get("http://uvon.test/divisi/divisi.php");
          setdivisi(res.data.divisi);
        } catch (error) {
          console.log(error);
        }
      };
      fetchAlldivisi();
    }, []);
  
    const indexOfLastdivisi = (currentPage + 1) * itemsPerPage;
    const indexOfFirstdivisi = indexOfLastdivisi - itemsPerPage;
    const currentdivisi = divisi.slice(indexOfFirstdivisi, indexOfLastdivisi);
  
    const handlePageClick = (event) => {
      setCurrentPage(event.selected);
    };
  
    const handleDelete = async (id) => {
      try {
        const res = await axios.delete(
          "http://uvon.test/divisi/delete_divisi.php?id=" + id
        );
  
        setdivisi((prev) => prev.filter((divisi) => divisi.id !== id));
  
        if (res.status == 200) {
          toast.success("Berhasil Menghapus Berita!");
        } else {
          toast.error("Gagal Menghapus Berita!");
        }
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <>
    <div className="overflow-x-auto p-2 w-full">
      <table className="rounded-md ring-2 ring-white border-collapse mt-3 w-[900px] md:w-full mx-auto xl:mx-0 text-sm bg-[#252525]">
        <thead>
          <tr className="bg-gradient-to-b from-[#c24c4e] to-[#FB3748] rounded-md ring-2 ring-white">
            <th className="bg-gradient-to-b from-[#c24c4e] to-[#FB3748] rounded-l-md p-2 w-[300px] md:text-[20px] text-white border-r-2 border-white">
              foto
            </th>
            <th className="bg-gradient-to-b from-[#c24c4e] to-[#FB3748] p-2 md:text-[20px] text-white md:px-6 border-r-2 border-white">
              Nama 
            </th>
            <th className="bg-gradient-to-b from-[#c24c4e] to-[#FB3748] p-2 md:text-[20px] text-white md:px-6 border-r-2 border-white">
              Nama Divisi 
            </th>
           
            <th className="bg-gradient-to-b from-[#c24c4e] to-[#FB3748] rounded-r-md p-2 md:text-[20px] text-white md:px-6 ">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {currentdivisi.map((divisi, index) => (
            <tr className="text-center" key={index}>
              <td className="p-2 border-r-2 border-white ">
                <img src={`http://uvon.test/divisi/${divisi.foto}`} alt="" className="w-50 h-50 object-cover object-center rounded-full mx-auto"/>
              </td>
              <td className="p-2 border-r-2 border-white">
                <p className="line-clamp-1  text-white">{divisi.nama}</p>
              </td>
              <td className="p-2 border-r-2 border-white">
                <p className="line-clamp-1  text-white">{divisi.nama_divisi}</p>
              </td>
              
              <td className="p-2">
                <div className="flex gap-2 justify-center">
                  <Link
                    to={`/admin/edit-divisi/${divisi.id}`}
                    className="bg-white p-2 rounded-md hover:bg-gradient-to-b text-white bg-gradient-to-b from-[#c24c4e] to-[#FB3748]  hover:text-yellow-300 duration-300 ease-in-out transition "
                  >
                    <FaPencil />
                  </Link>
                  <button
                    className="bg-white p-2 rounded-md hover:bg-gradient-to-b  text-white bg-gradient-to-b from-[#c24c4e] to-[#FB3748]  duration-300 ease-in-out transition cursor-pointer hover:text-yellow-300 "
                    onClick={() => handleDelete(divisi.id)}
                  >
                    <BsTrash className="" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      nextClassName="cursor-pointer hover:text-yellow-300 ease-in-out duration-300 transition-all"
      previousClassName="cursor-pointer hover:text-yellow-300 ease-in-out duration-300 transition-all"
      breakLabel={"..."}
      pageCount={Math.ceil(divisi.length / itemsPerPage)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={
        "pagination flex items-center justify-between w-[300px] mt-5  bg-gradient-to-b from-[#c24c4e] to-[#FB3748] text-white bg-white rounded-md p-1 px-4  font-bold "
      }
      activeClassName={"active  rounded cursor-pointer"}
    />
  </>
  )
}

export default DivisiList
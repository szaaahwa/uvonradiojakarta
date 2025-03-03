import React from "react";
import { toast } from "react-hot-toast";

const NewsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

 
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!"); 
    }).catch(err => {
      console.error("Failed to copy text:", err);
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-lg overflow-y-scroll h-[500px] w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Bantuan untuk penulisan berita</h2>

        {/* Copyable text items */}
        <p className="mb-2">Untuk membuat tulisan bold</p>
        <p className="cursor-pointer bg-gray-200 p-2 rounded" onClick={() => handleCopy("<b> tulisan anda </b>")}>
          &lt;b&gt; tulisan anda &lt;/b&gt;
        </p>

        <p className="mb-2 mt-4">Untuk membuat tulisan miring</p>
        <p className="cursor-pointer bg-gray-200 p-2 rounded" onClick={() => handleCopy("<i> tulisan anda </i>")}>
          &lt;i&gt; tulisan anda &lt;/i&gt;
        </p>

        <p className="mb-2 mt-4">Untuk membuat tulisan underline</p>
        <p className="cursor-pointer bg-gray-200 p-2 rounded" onClick={() => handleCopy("<u> tulisan anda </u>")}>
          &lt;u&gt; tulisan anda &lt;/u&gt;
        </p>

        <p className="mb-2 mt-4">Untuk membuat paragraf baru atau tulisan ke bawah</p>
        <p className="cursor-pointer bg-gray-200 p-2 rounded" onClick={() => handleCopy(" <br/><br/>")}>
          tulisan anda &lt;br/&gt;&lt;br/&gt;
        </p>

        <p className="mb-2 mt-4">Untuk membuat list</p>
        <p
          className="cursor-pointer bg-gray-200 p-2 rounded"
          onClick={() => handleCopy("<ul>\n  <li>1. Tulisan anda</li>\n  <li>2. Tulisan anda</li>\n  <li>3. Tulisan anda</li>\n  <li>4. Tulisan anda</li>\n  <li>5. Tulisan anda</li>\n</ul>")}
        >
          &lt;ul&gt; <br />
          &lt;li&gt;1. Tulisan anda&lt;/li&gt; <br />
          &lt;li&gt;2. Tulisan anda&lt;/li&gt; <br />
          &lt;li&gt;3. Tulisan anda&lt;/li&gt; <br />
          &lt;li&gt;4. Tulisan anda&lt;/li&gt; <br />
          &lt;li&gt;5. Tulisan anda&lt;/li&gt; <br />
          &lt;/ul&gt;
        </p>

        <p className="mb-2 mt-4">Untuk membuat Link Tautan</p>
        <p
          className="cursor-pointer bg-gray-200 p-2 rounded"
          onClick={() => handleCopy(`<a href="link tautan" target='_blank' class='underline text-red-300'>Nama tautan</a>`)}
        >
           
          &lt;a href="link tautan"&gt; Nama tautan &lt;/a&gt;
        </p>


        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;

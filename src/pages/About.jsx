import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head title={"About Us"} />
      <div className="font-sans flex flex-col bg-black md:pl-5 pt-5  ">
        <Navbar />
        <main className="flex md:flex-row flex-col">
          <div className="h-screen md:w-[69%] w-full overflow-y-auto mt-2">
            <Header
              title={"UVON RADIO JAKARTA"}
              subtitle={"Entertaining, Educating, and Inspiring"}
            />
            {/* logonya UVON */}
            <div className="flex justify-center p-5">
              <img src="/logo_uvon.svg" alt="" className="w-100" />
            </div>
            <hr className="border-white mx-2 mt-2 mb-4" />
            {/* Visi dan Misi */}
            <div className="flex md:flex-row flex-col text-white mb-5">
              {/* visi */}
              <div className="md:border-r-1 border-b-1 md:border-b-0 border-white h-full p-5 md:py-0 md:px-5 flex-1">
                <div className="bg-[#252525] p-4 rounded-lg">
                  <h2 className="text-center text-2xl uppercase">
                    Visi Dan Misi
                  </h2>
                  <br />
                  <h3 className="text-xl">Visi</h3>
                  <p className="text-justify">
                    Menjadi Media Informasi terdepan di Institut Bisnis
                    Nusantara yang dapat menjadi media penghubung antara
                    mahasiswa dengan kampus, menjadi wadah kreativitas dan
                    pengembangan kemampuan mahasiswa, mempromosikan Institut
                    Bisnis Nusantara kepada masyarakat luas serta membentuk
                    image yang positif bagi Institut Bisnis Nusantara sebagai
                    perguruan tinggi yang maju khususnya dalam bidang media
                    penyiaran.
                  </p>
                  <br />
                  <br />
                  <h3 className="text-xl">Misi</h3>
                  <ol className="list-decimal pl-5">
                    <li className="mb-1">
                      Menyajikan program yang informatif, inovatif, dan mendidik
                      dengan kemasan yang segar, ceria, dan menghibur.
                    </li>
                    <li className="mb-1">
                      Menyiarkan informasi terbaru dan akurat kepada pendengar
                      seputar kegiatan perkuliahan, kegiatan organisasi
                      mahasiswa, agenda akademik, info beasiswa dan lain-lain.
                    </li>
                    <li className="mb-1">
                      Menyediakan berbagai kemudahan untuk para pendengar agar
                      dapat mengakses informasi, seperti menyediakan live
                      streaming radio di internet maupun smartphone, menyediakan
                      blog dan akun jejaring sosial.
                    </li>
                    <li className="mb-1">
                      {" "}
                      Menjadi sahabat para uvonia (pendengar uvon radio).
                    </li>
                    <li className="mb-1">
                      Menjalin kerjasama dengan media partner seperti radio
                      komunitas, radio kampus, radio swasta, media cetak dan
                      sebagainya.
                    </li>
                    <li className="mb-1">
                      {" "}
                      Kerjasama dengan label di jakarta dan sekitarnya.
                    </li>
                    <li className="mb-1">
                      Mengasah crew Uvon Radio dengan berbagai pelatihan
                      mengenai dunia penyiaran.
                    </li>
                    <li className="mb-1">
                      Memperkuat tali persaudaraan dan persahabatan antara crew
                      Uvon Radio sehingga mampu menjadi team yang solid dan
                      royal terhadap Uvon Radio.
                    </li>
                  </ol>
                  <br /><br /><br /><br /><br /><br />
                </div>
              </div>
              <div className="md:border-l-1 border-b-1 md:border-b-0 border-white h-full px-5 flex-1">
                <div className="bg-[#252525] p-4 rounded-lg">
                  <h2 className="text-center text-2xl uppercase">
                    Sejarah Singkat
                  </h2>
                  <br />
                  <div className="text-sm">
                    <p className="text-justify">
                      United Voice Of  Nusantara Radio Jakarta, atau yang lebih
                      dikenal sebagai UVON Radio Jakarta, merupakan salah satu
                      unit organisasi mahasiswa di Institut Bisnis Nusantara
                      (IBN). Nama UVON dipilih dengan harapan agar radio ini
                      dapat menjadi media kampus terkemuka di Jakarta. Sejak
                      berdiri pada tahun 2010, UVON Radio berfungsi sebagai
                      penghubung antara mahasiswa IBN dan pihak kampus, serta
                      sebagai media promosi yang memperkuat citra positif
                      Institut Bisnis Nusantara di kalangan masyarakat.
                    </p>
                    <p className="text-justify">
                      Pada awal terbentuknya, UVON Radio merupakan bagian dari
                      Himpunan Mahasiswa (Hima) Komunikasi. Namun, beberapa
                      tahun kemudian, UVON berkembang menjadi Club Kampus yang
                      berdiri sendiri. Keterbatasan siaran yang hanya dapat
                      didengar melalui speaker kampus memotivasi tim UVON untuk
                      memperluas jangkauan siaran mereka. Berkat dukungan dari
                      divisi IT UVON Radio, serta bimbingan dari dosen dan Bapak
                      Rudi (IT IBN), pada November 2012, UVON Radio berhasil
                      bertransformasi menjadi radio streaming yang dapat diakses
                      secara online. Siaran UVON Radio pun dapat dinikmati
                      melalui www.uvonradio.blogspot.com dan aplikasi radio
                      streaming pada berbagai perangkat seperti Blackberry,
                      Android, dan Windows Phone.
                    </p>
                    <p className="text-justify">
                      Transformasi ke radio streaming ini merupakan langkah
                      besar bagi UVON Radio, karena memberikan fleksibilitas
                      bagi pendengar untuk menikmati siaran di mana saja, baik
                      di rumah, dalam perjalanan, maupun di luar kota bahkan di
                      luar negeri. Operasional radio internet ini didukung oleh
                      server streaming yang biaya operasionalnya ditanggung
                      melalui iuran kas anggota.
                    </p>
                    <p className="text-justify">
                      UVON Radio juga menjadi wadah pengembangan keterampilan
                      mahasiswa di bidang media dan broadcasting. Melalui
                      berbagai pelatihan di bidang penyiaran dan announcing,
                      UVON Radio mendorong anggotanya untuk berkembang lebih
                      lanjut, baik di dunia penyiaran kampus maupun industri
                      media profesional. Selain itu, UVON aktif menjalin
                      kerjasama dengan berbagai media partner dan alumni, yang
                      membuka peluang karir lebih luas bagi para anggotanya.
                    </p>
                    <p className="text-justify">
                      Pada tahun 2019, UVON Radio semakin mengembangkan sayapnya
                      dengan meluncurkan situs resmi di www.uvonradiojakarta.com
                      untuk memperluas interaksi dengan pendengar. Namun, karena
                      kendala teknis, situs tersebut berhenti beroperasi pada
                      tahun 2023, yang menyebabkan seluruh kegiatan penyiaran
                      UVON Radio terhenti sementara hingga saat ini.
                    </p>
                    <p className="text-justify">
                      Perubahan signifikan lainnya terjadi pada tahun 2023,
                      ketika UVON Radio yang sebelumnya berstatus sebagai Club
                      Kampus resmi diangkat menjadi Unit Kegiatan Mahasiswa
                      (UKM) di Institut Bisnis Nusantara. Peningkatan status ini
                      memperkuat posisi UVON Radio sebagai salah satu media
                      kampus terdepan yang berkomitmen menyajikan konten kreatif
                      dan edukatif untuk mahasiswa serta komunitas IBN secara
                      lebih luas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden md:w-[31%] w-full h-screen overflow-y-auto mt-2 px-2 block">
              <Side />
            </div>
            <Footer />
          </div>
          <div className="hidden md:w-[31%] w-full h-screen overflow-y-auto mt-2 px-2 md:block">
            <Side />
          </div>
        </main>
      </div>
    </>
  );
};

export default About;

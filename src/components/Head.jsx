import React from "react";
import { Helmet } from "react-helmet";

const Head = ({title}) => {
  return (
    <>
      <Helmet>
        {/* Meta Title */}
        <title>{title}|UVON Radio Jakarta</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="United Voice of Nusantara (UVON) adalah media penyiaran berbasis radio kampus di Institut Bisnis Nusantara sejak 04 Desember 2011. Dengarkan UVON Radio Jakarta On Air setiap Senin - Jumat melalui website resmi kami!"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="UVON, Radio Kampus, UVON Radio Jakarta, United Voice of Nusantara, Radio Mahasiswa, Institut Bisnis Nusantara, Streaming Radio, Radio Online"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.uvonradio.com" />

        {/* Open Graph Meta Tags untuk Social Media (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="UVON Radio Jakarta - United Voice of Nusantara"
        />
        <meta
          property="og:description"
          content="Nikmati siaran UVON Radio Jakarta secara online! Radio kampus Institut Bisnis Nusantara sejak 2011."
        />
        <meta
          property="og:image"
          content="https://www.uvonradio.com/images/logo_uvon.svg"
        />
        <meta property="og:url" content="https://www.uvonradio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card untuk Share ke Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UVON Radio Jakarta - United Voice of Nusantara"
        />
        <meta
          name="twitter:description"
          content="Dengarkan UVON Radio Jakarta setiap Senin - Jumat melalui website resmi kami!"
        />
        <meta
          name="twitter:image"
          content="https://www.uvonradio.com/images/logo_uvon.svg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    </>
  );
};

export default Head;

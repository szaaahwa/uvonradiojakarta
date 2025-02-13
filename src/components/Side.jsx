import React, { useEffect } from "react";

const Side = () => {
  useEffect(() => {
    // Ensure Twitter embed script loads properly
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

  }, []);

  return (
    <div className="px-5 bg-black text-white">
      {/* Spotify Embed */}
      <p className="mb-2 text-2xl">UVON Chart</p>
      <iframe
        className="rounded-lg"
        src="https://open.spotify.com/embed/playlist/63IOpwGD5rCw8b6RTvUTiD?si=4bb7519923cb412a"
        width="100%"
        height="380"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      {/* instagram embed */}
      <p className="my-5 text-2xl">UVON Updates</p>
      <div className="">
        <blockquote
          className="instagram-media "
          data-instgrm-permalink="https://www.instagram.com/uvonradiojakarta?igsh=ZjJ0dWVxbDF5dTk="
          data-instgrm-version="14"
        ></blockquote>
      </div>
      {/* Twitter Embed */}
      <p className="my-5 text-2xl">UVON Tweets</p>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          FULL LINEUP RADIO ON AIR FESTIVAL 2023
          <a href="https://twitter.com/hashtag/realityclub?src=hash&amp;ref_src=twsrc%5Etfw">
            #realityclub
          </a>{" "}
          <a href="https://twitter.com/hashtag/sisitipsi?src=hash&amp;ref_src=twsrc%5Etfw">
            #sisitipsi
          </a>{" "}
          <a href="https://twitter.com/hashtag/rememberoftoday?src=hash&amp;ref_src=twsrc%5Etfw">
            #rememberoftoday
          </a>{" "}
          <a href="https://twitter.com/hashtag/harveztmoon?src=hash&amp;ref_src=twsrc%5Etfw">
            #harveztmoon
          </a>{" "}
          <a href="https://twitter.com/hashtag/konser?src=hash&amp;ref_src=twsrc%5Etfw">
            #konser
          </a>{" "}
          <a href="https://twitter.com/hashtag/musik?src=hash&amp;ref_src=twsrc%5Etfw">
            #musik
          </a>{" "}
          <a href="https://twitter.com/hashtag/jakarta?src=hash&amp;ref_src=twsrc%5Etfw">
            #jakarta
          </a>{" "}
          <a href="https://t.co/g1UGHM1NsQ">pic.twitter.com/g1UGHM1NsQ</a>
        </p>
        &mdash; Uvon Radio Jakarta (@uvonradio){" "}
        <a href="https://twitter.com/uvonradio/status/1647646622665572352?ref_src=twsrc%5Etfw">
          April 16, 2023
        </a>
      </blockquote>{" "}
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
};

export default Side;

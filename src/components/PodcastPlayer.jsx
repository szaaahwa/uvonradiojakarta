import React, { useEffect } from "react";

const PodcastsPlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.cloud.caster.fm/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <div className="podcast-player-container pr-10">
      <div
        data-type="podcastsPlayer"
        data-publicToken="30fb42b7-93b5-4082-93f6-e5479e70f1c1"
        data-theme="light"
        data-color="e81e4d"
        data-channelId="9e321988-a285-437b-ac77-e5654b4d66ed"
        className="cstrEmbed"
      >
        <a href="https://www.caster.fm">Shoutcast Hosting</a>
        <a href="https://www.caster.fm">Stream Hosting</a>
        <a href="https://www.caster.fm">Radio Server Hosting</a>
      </div>
      
    </div>
  );
};

export default PodcastsPlayer;

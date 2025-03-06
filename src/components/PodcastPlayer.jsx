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
    <div className="podcast-player-container md:pr-10 px-4 md:w-225 text-sm w-full mx-auto">
      <div
        data-type="newStreamPlayer"
        data-publicToken="70d0d462-7796-4882-bec0-f79803b9ba89"
        data-theme="light"
        data-color="e81e4d"
        data-channelId="9e5bb820-eb26-4f30-b911-ffbfba3cba0e"
        data-rendered="false"
        className="cstrEmbed"
      >
        <a href="https://www.caster.fm">Shoutcast Hosting</a>{" "}
        <a href="https://www.caster.fm">Stream Hosting</a>{" "}
        <a href="https://www.caster.fm">Radio Server Hosting</a>
      </div>
    </div>
  );
};

export default PodcastsPlayer;

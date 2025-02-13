import React, { useState } from "react";

const AudioPlayer = () => {
  const streamUrl = "http://sapircast.caster.fm:17993/uyKmo";
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("radio-stream");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <h2>Live Radio Stream</h2>
      <audio id="radio-stream" src={streamUrl} preload="none"></audio>
      <button onClick={togglePlay} className="play-button">
        {isPlaying ? "Pause 🔴" : "Play ▶️"}
      </button>
    </div>
  );
};

export default AudioPlayer;

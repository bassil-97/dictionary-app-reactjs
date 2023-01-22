import React from "react";
import { AudioPlayerConatiner } from "./AudioPlayerStyles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function AudioPlayer({ audioSrc }) {
  const handlePlayAudio = () => {
    let audioLink = audioSrc[0]?.audio;
    let audio = new Audio(audioLink);
    audio.play();
  };

  return (
    <>
      {audioSrc?.length > 0 && (
        <AudioPlayerConatiner id="audio-player" onClick={handlePlayAudio}>
          <PlayArrowIcon sx={{ color: "#a846f2", fontSize: "3rem" }} />
        </AudioPlayerConatiner>
      )}
    </>
  );
}

import React, { useEffect, useRef } from "react";
import allLanguages from "../../data/langauges.js";

const PlayButton = ({
  translatedAudio,
  isPlaying,
  setIsPlaying,
  destinationLang,
}) => {
  const audioRef = useRef(null);

  const destinationLangName = allLanguages[destinationLang].language;

  useEffect(() => {
    if (audioRef.current && translatedAudio && isPlaying) {
      audioRef.current.play();
    } else if (audioRef.current && !isPlaying) {
      audioRef.current.pause();
    }
  }, [isPlaying, translatedAudio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    setIsPlaying(false); // Reset isPlaying to false when audio finishes
  };

  return (
    <div className="w-full">
      <audio
        ref={audioRef}
        src={translatedAudio ? URL.createObjectURL(translatedAudio) : null}
        onEnded={handleEnded} // Add the onEnded event handler here
      />
      <button
        className={`btn ${
          translatedAudio
            ? isPlaying
              ? "btn-error"
              : "btn-success"
            : "btn-disabled"
        } w-full`}
        onClick={togglePlay}
        disabled={!translatedAudio}
      >
        {isPlaying ? "Stop" : `Play in ${destinationLangName}`}
      </button>
    </div>
  );
};

export default PlayButton;

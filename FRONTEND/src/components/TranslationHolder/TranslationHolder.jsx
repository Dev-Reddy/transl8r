import { useState, useEffect } from "react";
import RecordButton from "../RecordButton/RecordButton.jsx";
import TranslateButton from "../TranslateButton/TranslateButton.jsx";
import PlayButton from "../PlayButton/PlayButton.jsx";

const TranslationHolder = ({ sourceLang, destinationLang }) => {
  const [recording, setRecording] = useState(null); // Store the audio recording in local storage
  const [translatedAudio, setTranslatedAudio] = useState(null); // Store the translated audio
  const [isPlaying, setIsPlaying] = useState(false); // Handle play/pause state
  const [recordingID, setRecordingID] = useState(null); // Store the recording ID
  const [translatedID, setTranslatedID] = useState(null); // Store the translated audio ID

  // Automatically play the translated audio when it's received
  useEffect(() => {
    if (translatedAudio) {
      setIsPlaying(true);
    }
  }, [translatedAudio]);

  // Disable the play button when destination language changes
  useEffect(() => {
    setTranslatedAudio(null);
    setIsPlaying(false); // Disable playing since there's no translated audio
  }, [destinationLang]);

  const handleRecording = (audioBlob) => {
    setRecording(audioBlob);
    // localStorage.setItem("recording", audioBlob); // Store audio in local storage
    setTranslatedAudio(null); // Reset translated audio when a new recording starts
    setIsPlaying(false); // Disable playing when a new recording starts
  };

  const handleTranslation = (translatedBlob) => {
    setTranslatedAudio(translatedBlob);
    setIsPlaying(true); // Automatically play the translated audio when it's received
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-2">
      <RecordButton onRecord={handleRecording} />
      <TranslateButton
        recording={recording}
        sourceLang={sourceLang}
        destinationLang={destinationLang}
        onTranslate={handleTranslation}
      />
      <PlayButton
        translatedAudio={translatedAudio}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        destinationLang={destinationLang}
      />
    </div>
  );
};

export default TranslationHolder;

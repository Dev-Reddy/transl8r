import React, { useState } from "react";

const RecordButton = ({ onRecord }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const handleRecord = () => {
    if (!isRecording) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (e) => {
          const audioBlob = e.data;
          onRecord(audioBlob);
        };

        recorder.start();
        setIsRecording(true);
      });
    } else {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <button
      className={`btn ${isRecording ? "btn-error" : "btn-primary"} w-full`}
      onClick={handleRecord}
    >
      {isRecording ? "Stop Recording" : "Start Recording"}
    </button>
  );
};

export default RecordButton;

import React, { useState } from "react";
import allLanguages from "../../data/langauges.js";
// import addAudioToDB from "../../utils/firebaseAdd.js";

const ServerURL = "https://transl8rbackend.duckdns.org/";

const TranslateButton = ({
  recording,
  sourceLang,
  destinationLang,
  onTranslate,
}) => {
  const [isTranslating, setIsTranslating] = useState(false);

  const destinationLangName = allLanguages[destinationLang].language;

  const handleTranslate = async () => {
    if (!recording) return;

    setIsTranslating(true);

    // const docRef = await addAudioToDB(recording);

    console.log("Translating...");
    console.log("Source Language: ", sourceLang);
    console.log("Destination Language: ", destinationLang);

    // Simulate sending the audio to the server for translation
    const formData = new FormData();
    formData.append("audio", recording);
    // formData.append("recording", docRef.id);
    formData.append("sourceLang", sourceLang);
    formData.append("destinationLang", destinationLang);
    await fetch(ServerURL + "translate", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // response.blob()

        console.log(response);
        return response.blob();
      })
      .then((translatedBlob) => {
        onTranslate(translatedBlob);
        setIsTranslating(false);
      });
  };

  return (
    <button
      className={`btn ${recording ? "btn-warning" : "btn-disabled"} w-full`}
      onClick={handleTranslate}
      disabled={!recording || isTranslating}
    >
      {isTranslating ? "Translating..." : `Translate to ${destinationLangName}`}
    </button>
  );
};

export default TranslateButton;

import { useState } from "react";
import allLanguages from "../../data/langauges.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

export default function LanguageDropdown({ setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("");

  const handleLangSelect = (language) => {
    console.log(language);
    setSelectedLang(language.language_code);
    setLang(language.language_code);
    setIsOpen(false);
  };

  return (
    <div className="form-control w-full max-w-xs mx-auto">
      <label className="label">
        <span className="text-lg mx-auto">Pick Language</span>
      </label>

      {/* Custom Dropdown */}
      <div className="relative">
        <button
          className="select select-bordered w-full text-lg p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLang ? allLanguages[selectedLang].language : "Pick one"}
          {selectedLang && (
            <FontAwesomeIcon
              icon={faCrown}
              className="ml-2 p-1"
              style={{
                color:
                  allLanguages[selectedLang].model === "best"
                    ? "#ffd700"
                    : "#c0c0c0",
              }}
            />
          )}
        </button>

        {/* Dropdown List */}
        {isOpen && (
          <ul className="absolute z-10 bg-base-100 border border-base-300 mt-1 w-full max-h-60 overflow-y-auto shadow-md rounded-box">
            {Object.values(allLanguages).map((language) => (
              <li
                key={language.language_code}
                className="flex items-center justify-between px-4 py-2 hover:bg-base-300 cursor-pointer"
                onClick={() => handleLangSelect(language)}
              >
                <span>{language.language}</span>
                <FontAwesomeIcon
                  icon={faCrown}
                  style={{
                    color: language.model === "best" ? "#ffd700" : "#c0c0c0",
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

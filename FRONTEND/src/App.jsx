import { useState } from "react";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import FlagHolder from "./components/FlagHolder/FlagHolder.jsx";
import LanguageDropdownHolder from "./components/LanguageDropdownHolder/LanguageDropdownHolder.jsx";

function App() {
  const [lang1, setLang1] = useState("en");
  const [lang2, setLang2] = useState("hi");

  const [recordingLang1, setRecordingLang1] = useState(false);
  const [recordingLang2, setRecordingLang2] = useState(false);

  const [lang1ToLang2Audio, setLang1ToLang2Audio] = useState(null);
  const [lang2ToLang1Audio, setLang2ToLang1Audio] = useState(null);

  return (
    <ThemeProvider>
      <div>
        <Navbar></Navbar>
        <FlagHolder
          lang1={lang1}
          lang2={lang2}
          recordingLang1={recordingLang1}
          setRecordingLang1={setRecordingLang1}
          recordingLang2={recordingLang2}
          setRecordingLang2={setRecordingLang2}
          lang1ToLang2Audio={lang1ToLang2Audio}
          setLang1ToLang2Audio={setLang1ToLang2Audio}
          lang2ToLang1Audio={lang2ToLang1Audio}
          setLang2ToLang1Audio={setLang2ToLang1Audio}
        ></FlagHolder>
      </div>
      <LanguageDropdownHolder
        setLang1={setLang1}
        setLang2={setLang2}
      ></LanguageDropdownHolder>
    </ThemeProvider>
  );
}

export default App;

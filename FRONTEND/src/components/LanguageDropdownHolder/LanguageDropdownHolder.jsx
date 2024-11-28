import LanguageDropdown from "../LanguageDropdown/LanguageDropdown.jsx";

export default function LanguageDropdownHolder(props) {
  const { setLang1, setLang2 } = props;
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-2 gap-4">
        <LanguageDropdown setLang={setLang1} />
        <LanguageDropdown setLang={setLang2} />
      </div>
    </div>
  );
}

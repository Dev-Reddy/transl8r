import PropTypes from "prop-types";
// import allLanguages from "../../data/langauges.js";
import FlagCard from "../FlagCard/FlagCard.jsx";

export default function FlagHolder(props) {
  const { lang1, lang2 } = props;

  FlagHolder.propTypes = {
    lang1: PropTypes.string.isRequired,
    lang2: PropTypes.string.isRequired,
  };

  return (
    <div className="container mx-auto p-3 pb-2">
      <div className="grid grid-cols-2 gap-4">
        <FlagCard userNo={1} sourceLang={lang1} destinationLang={lang2} />
        <FlagCard userNo={2} sourceLang={lang2} destinationLang={lang1} />
      </div>
    </div>
  );
}

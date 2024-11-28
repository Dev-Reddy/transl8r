import allLanguages from "../../data/langauges.js";
import PropTypes from "prop-types";
import TranslationHolder from "../TranslationHolder/TranslationHolder.jsx";

export default function FlagCard(props) {
  const { sourceLang, destinationLang, userNo } = props;

  FlagCard.propTypes = {
    langCode: PropTypes.string.isRequired,
    userNo: PropTypes.number.isRequired,
  };

  const language = allLanguages[sourceLang];

  return (
    <div className="card bg-base-100 shadow-md border-2 border-base-200 mx-auto rounded-badge p-2 w-3/4">
      <h2 className="text-2xl font-bold text-center p-2">Language {userNo}</h2>
      <figure className="px-2 pt-2">
        <img
          src={language.image}
          alt={language.country}
          className="rounded-full w-1/2 aspect-square
          object-contain
          p-2 bg-white border-2 border-base-200 shadow-md
          "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-xl font-bold">{language.language}</h2>
        <h2 className="text-lg">{language.country}</h2>
      </div>
      <TranslationHolder
        sourceLang={sourceLang}
        destinationLang={destinationLang}
      />
    </div>
  );
}

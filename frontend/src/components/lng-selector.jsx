import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", language: "english" },
  { code: "fr", language: "french" },
  { code: "hi", language: "hindi" },
  { code: "ar", lang: "Arabic" },
];

const lngSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <>
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </>
  );
};

export default lngSelector;

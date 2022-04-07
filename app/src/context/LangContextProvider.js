import React, { useState, useEffect } from "react";
import languages from "../lang/languajes.json";

export const LangContext = React.createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [currentLangObj, setCurrentLangObj] = useState(languages.en);

  useEffect(() => {
    if (lang === "en") {
      setCurrentLangObj(languages.en);
      return;
    }
    if (lang === "es") {
      setCurrentLangObj(languages.es);
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, currentLangObj }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;

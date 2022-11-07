import { useState } from "react";
import langDictionary from "../../utils/dictionary";
import { Language } from "../../utils/types";
import { LanguageSelectorProps } from "./language_selector.types";

const LanguageSelector = (props: LanguageSelectorProps) => {
  const {lang, setLang} = props;
  const handleChangeLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case langDictionary[Language.RUS]: {
        setLang(Language.RUS);
        break;
      }
      case langDictionary[Language.ENG]: {
        setLang(Language.ENG);
        break;
      }
    }
  };
  return (
    <form>
      <label>
        <input
          onChange={handleChangeLang}
          id={langDictionary[Language.RUS]}
          checked={lang === Language.RUS}
          type="radio"
          name="question"
        />
        {langDictionary[Language.RUS]}
      </label>
      <label>
        <input
          onChange={handleChangeLang}
          checked={lang === Language.ENG}
          id={langDictionary[Language.ENG]}
          type="radio"
          name="question"
        />
        {langDictionary[Language.ENG]}
      </label>
    </form>
  );
};

export default LanguageSelector;
